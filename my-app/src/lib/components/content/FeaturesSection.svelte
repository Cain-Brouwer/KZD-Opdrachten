<script>
	import Icon from '#lib/components/ui/Icon.svelte';
	import { features } from '#lib/data/site.js';
</script>

<section id="services" class="bg-slate-50 py-16 lg:py-20">
	<div class="mx-auto max-w-[1170px] px-4">
		<div class="grid gap-6 md:grid-cols-3">
			{#each features as feature (feature.title)}
				<article class="flex flex-col bg-white shadow-sm">
					<img
						src={feature.image}
						alt={feature.alt}
						class="aspect-[370/278] w-full object-cover"
						loading="lazy"
					/>
					<div class="flex flex-1 flex-col p-8">
						<h3 class="font-sans text-2xl font-semibold tracking-wide uppercase">
							{feature.title}
						</h3>
						<span class="mt-5 block h-0.5 w-10 bg-brand"></span>
						<p class="mt-5 text-sm leading-relaxed">{feature.text}</p>
						<a
							href="#contact"
							class="mt-7 flex w-fit items-center gap-2 bg-brand px-6 py-3 text-xs font-semibold tracking-wide text-white uppercase transition hover:bg-brand-dark"
						>
							Learn more
							<Icon name="chevron-right" class="h-4 w-4" />
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
