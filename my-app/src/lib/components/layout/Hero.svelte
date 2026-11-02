<script>
	import Icon from '#lib/components/ui/Icon.svelte';

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

	let active = $state(0);
	let paused = $state(false);

	$effect(() => {
		if (paused) return;

		const id = setInterval(() => {
			active = (active + 1) % slides.length;
		}, 8000);

		return () => clearInterval(id);
	});

	/** @param {number} step */
	function go(step) {
		active = (active + step + slides.length) % slides.length;
	}
</script>

<section
	id="top"
	class="relative isolate overflow-hidden bg-slate-200"
	aria-label="Introduction"
	onmouseenter={() => (paused = true)}
	onmouseleave={() => (paused = false)}
>
	<div class="relative h-[560px] w-full sm:h-[620px]">
		{#each slides as slide, index (slide.src)}
			<img
				src={slide.src}
				alt={slide.alt}
				class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 {index ===
				active
					? 'opacity-100'
					: 'opacity-0'}"
				loading={index === 0 ? 'eager' : 'lazy'}
			/>
		{/each}

		<div class="absolute inset-0 bg-gradient-to-r from-white/85 via-white/35 to-transparent"></div>

		<div class="relative mx-auto flex h-full max-w-[1170px] flex-col justify-center px-4">
			<span class="mb-4 block h-0.5 w-14 bg-brand"></span>
			<p class="font-sans text-sm font-semibold tracking-[0.15em] text-ink uppercase">
				High quality guaranteed
			</p>
			<h1
				class="mt-3 max-w-2xl font-sans text-3xl leading-[1.08] font-semibold text-ink sm:text-4xl md:text-5xl lg:text-6xl"
			>
				Constructing<br />Is Our Life Business
			</h1>

			<div class="mt-8 flex flex-wrap gap-3">
				<a
					href="#services"
					class="flex items-center gap-2 bg-brand px-6 py-3.5 text-xs font-semibold tracking-wide text-white uppercase transition hover:bg-brand-dark"
				>
					Our services
					<Icon name="chevron-right" class="h-4 w-4" />
				</a>
				<a
					href="#about"
					class="flex items-center gap-2 bg-ink px-6 py-3.5 text-xs font-semibold tracking-wide text-white uppercase transition hover:bg-ink-soft"
				>
					About us
					<Icon name="chevron-right" class="h-4 w-4" />
				</a>
			</div>
		</div>

		<button
			type="button"
			class="absolute top-1/2 left-0 hidden h-14 w-11 -translate-y-1/2 items-center justify-center bg-ink/55 text-white transition hover:bg-ink/80 sm:flex"
			aria-label="Previous slide"
			onclick={() => go(-1)}
		>
			<Icon name="chevron-left" class="h-6 w-6" />
		</button>
		<button
			type="button"
			class="absolute top-1/2 right-0 hidden h-14 w-11 -translate-y-1/2 items-center justify-center bg-ink/55 text-white transition hover:bg-ink/80 sm:flex"
			aria-label="Next slide"
			onclick={() => go(1)}
		>
			<Icon name="chevron-right" class="h-6 w-6" />
		</button>

		<div class="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 sm:hidden">
			{#each slides as slide, index (slide.src)}
				<button
					type="button"
					class="h-2.5 w-2.5 rounded-full transition {index === active
						? 'bg-brand'
						: 'bg-white/80 hover:bg-white'}"
					aria-label="Go to slide {index + 1}"
					aria-current={index === active}
					onclick={() => (active = index)}
				></button>
			{/each}
		</div>
	</div>
</section>
