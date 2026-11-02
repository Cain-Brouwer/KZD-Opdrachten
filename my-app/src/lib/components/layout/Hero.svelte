<script>
	import { tick } from 'svelte';

	const slides = [
		{
			src: '/gallery-1.jpg',
			alt: 'Construction worker in a yellow hard hat on a building site'
		},
		{
			src: '/gallery-2.jpg',
			alt: 'Smiling site manager in front of a modern glass building'
		}
	];

	// Clone de laatste en eerste slide zodat er oneindig doorgeklikt kan worden.
	const loopSlides = [slides[slides.length - 1], ...slides, slides[0]];

	let position = $state(1);
	let active = $derived(
		position === 0 ? slides.length - 1 : position === slides.length + 1 ? 0 : position - 1
	);
	let animate = $state(true);
	let moving = $state(false);
	let paused = $state(false);

	$effect(() => {
		if (paused) return;

		const id = setInterval(() => {
			move(1);
		}, 10000);

		return () => clearInterval(id);
	});

	/** @param {number} step */
	function move(step) {
		if (moving) return;

		moving = true;
		animate = true;
		position += step;
	}

	/** @param {number} index */
	function goTo(index) {
		if (moving || index === active) return;

		moving = true;
		animate = true;
		position = index + 1;
	}

	/** @param {TransitionEvent} event */
	async function handleTransitionEnd(event) {
		if (event.propertyName !== 'transform') return;

		if (position === loopSlides.length - 1) {
			animate = false;
			position = 1;
			await tick();
			requestAnimationFrame(() => {
				animate = true;
				moving = false;
			});
		} else if (position === 0) {
			animate = false;
			position = slides.length;
			await tick();
			requestAnimationFrame(() => {
				animate = true;
				moving = false;
			});
		} else {
			moving = false;
		}
	}
</script>

<section
	id="top"
	class="relative overflow-hidden"
	aria-label="Introduction"
	onmouseenter={() => (paused = true)}
	onmouseleave={() => (paused = false)}
>
	<div class="relative h-[480px] w-full overflow-hidden">
		<div
			class="flex h-full {animate ? 'transition-transform duration-500' : ''}"
			style:transform={`translateX(-${position * 100}%)`}
			ontransitionend={handleTransitionEnd}
		>
			{#each loopSlides as slide, index (index)}
				<div class="relative h-full w-full shrink-0">
					<img
						src={slide.src}
						alt={slide.alt}
						class="h-full w-full object-cover"
						loading={index === 1 ? 'eager' : 'lazy'}
					/>
					<div class="absolute inset-0 bg-black/35"></div>
				</div>
			{/each}
		</div>

		<div class="absolute inset-0">
			<div class="mx-auto flex h-full max-w-6xl flex-col justify-center px-4 text-white">
				<p class="text-sm font-semibold tracking-wide uppercase">High quality guaranteed</p>
				<h1 class="mt-3 max-w-xl text-4xl leading-tight font-bold sm:text-5xl">
					Constructing Is Our Life Business
				</h1>

				<div class="mt-6 flex flex-wrap gap-3">
					<a href="#services" class="bg-[#f5a623] px-5 py-3 text-xs font-semibold uppercase">
						Our services &gt;
					</a>
					<a href="#about" class="bg-[#1d2632] px-5 py-3 text-xs font-semibold uppercase">
						About us &gt;
					</a>
				</div>
			</div>
		</div>

		<button
			type="button"
			class="absolute top-1/2 left-0 hidden h-14 w-11 -translate-y-1/2 items-center justify-center bg-black/40 text-white hover:bg-black/70 sm:flex"
			aria-label="Previous slide"
			onclick={() => move(-1)}
		>
			<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2">
				<polyline points="15 18 9 12 15 6" />
			</svg>
		</button>

		<button
			type="button"
			class="absolute top-1/2 right-0 hidden h-14 w-11 -translate-y-1/2 items-center justify-center bg-black/40 text-white hover:bg-black/70 sm:flex"
			aria-label="Next slide"
			onclick={() => move(1)}
		>
			<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2">
				<polyline points="9 18 15 12 9 6" />
			</svg>
		</button>

		<div class="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 sm:hidden">
			{#each slides as slide, index (slide.src)}
				<button
					type="button"
					class="h-2.5 w-2.5 rounded-full {index === active ? 'bg-[#f5a623]' : 'bg-white/70'}"
					aria-label="Go to slide {index + 1}"
					onclick={() => goTo(index)}
				></button>
			{/each}
		</div>
	</div>
</section>
