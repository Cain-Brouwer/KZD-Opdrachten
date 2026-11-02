<script>
	import Icon from '#lib/components/ui/Icon.svelte';
	import { projectFilters, projects } from '#lib/data/site.js';

	let filter = $state('All');
	let visibleProjects = $derived(
		filter === 'All' ? projects : projects.filter((project) => project.category === filter)
	);
</script>

<section id="projects" class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-[1170px] px-4">
		<h2 class="text-center font-sans text-2xl font-semibold tracking-wide uppercase">
			Featured projects
		</h2>

		<div class="mt-6 flex flex-wrap justify-center gap-x-7 gap-y-3">
			{#each projectFilters as option (option)}
				<button
					type="button"
					class="text-xs font-semibold tracking-[0.08em] uppercase transition {filter === option
						? 'text-brand'
						: 'text-slate-500 hover:text-ink'}"
					aria-pressed={filter === option}
					onclick={() => (filter = option)}
				>
					{option}
				</button>
			{/each}
		</div>
	</div>

	<div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
		{#each visibleProjects as project (project.title)}
			<a
				href="#contact"
				class="group relative block aspect-[4/3] overflow-hidden bg-ink"
				aria-label="View project: {project.title}"
			>
				<img
					src={project.image}
					alt={project.alt}
					class="h-full w-full object-cover transition duration-700 group-hover:scale-105 {project.featured
						? 'opacity-30'
						: 'group-hover:opacity-60'}"
					loading="lazy"
				/>

				<div
					class="absolute inset-0 flex flex-col justify-center p-6 text-white transition sm:p-8 {project.featured
						? 'bg-ink/70'
						: 'bg-ink/80 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'}"
				>
					<h3 class="font-sans text-xl font-semibold text-white sm:text-2xl">
						{project.title}
					</h3>
					<p class="mt-3 max-w-md text-sm leading-relaxed text-slate-200">
						{project.description}
					</p>
					<span
						class="mt-5 flex items-center gap-2 text-xs font-semibold tracking-wide text-brand uppercase"
					>
						Learn more
						<Icon name="chevron-right" class="h-4 w-4" />
					</span>
				</div>
			</a>
		{/each}
	</div>
</section>
