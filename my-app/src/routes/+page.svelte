<script>
	import Hero from '#lib/components/layout/Hero.svelte';

	const features = [
		{
			title: 'Construction',
			image: '/gallery-3.jpg',
			alt: 'Two construction workers on a building site',
			text: 'We specialize in all kinds of construction works. Our certified team provides the services in time and on the highest level.'
		},
		{
			title: 'About Us',
			image: '/gallery-4.jpg',
			alt: 'Construction worker in a safety vest watching a crane',
			text: 'BuildIcon is a completely client-oriented company. We are able to meet schedule deadlines with top quality.'
		},
		{
			title: 'Effective Teamwork',
			image: '/gallery-5.jpg',
			alt: 'Team of construction workers giving each other a high five',
			text: 'We have a very good team-based and teamwork attitude, working together to find the best solutions.'
		}
	];

	const projects = [
		{
			title: 'Casa Blanca Villa',
			category: 'Building',
			image: '/project-2.jpg',
			description: 'A sun-drenched private villa with a courtyard pool and open-plan living.'
		},
		{
			title: 'Shreveport, Bossier City',
			category: 'Consulting',
			image: '/project-5.jpg',
			description:
				'This luxury resort and senior independent living facility with a fitness center, pool, spa, sauna, hair salon, classroom space and more.'
		},
		{
			title: 'Coastal Residence',
			category: 'Consulting',
			image: '/project-1.jpg',
			description: 'A cliffside home with floor-to-ceiling glass and panoramic ocean views.'
		},
		{
			title: 'Alpine Courtyard House',
			category: 'Building',
			image: '/project-4.jpg',
			description: 'A minimalist mountain retreat built around a planted courtyard.'
		},
		{
			title: 'Minimal Kitchen Loft',
			category: 'Interior',
			image: '/project-6.jpg',
			description: 'A bright interior renovation with warm timber and seamless white cabinetry.'
		},
		{
			title: 'Palm Grove Estate',
			category: 'Office',
			image: '/project-3.jpg',
			description: 'A tropical family home with a resort-style pool and landscaped garden.'
		}
	];
</script>

<Hero />

<section id="about" class="bg-white">
	<div
		class="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between"
	>
		<h2 class="text-2xl font-bold text-[#f5a623]">We Are BuildIcon</h2>
		<p class="text-sm">We have been transforming ideas and visions into award-winning projects.</p>
		<a href="#contact" class="bg-[#f5a623] px-5 py-3 text-xs font-semibold text-white">
			Request a quote
		</a>
	</div>
</section>

<section id="services" class="bg-gray-100 py-12">
	<div class="mx-auto max-w-6xl px-4">
		<h2 class="text-center text-2xl font-bold text-[#1d2632]">Our Services</h2>

		<div class="mt-8 grid gap-6 md:grid-cols-3">
			{#each features as feature (feature.title)}
				<article class="bg-white">
					<img src={feature.image} alt={feature.alt} class="h-52 w-full object-cover" />
					<div class="p-5">
						<h3 class="text-xl font-bold text-[#1d2632]">{feature.title}</h3>
						<p class="mt-3 text-sm leading-relaxed">{feature.text}</p>
						<a href="#contact" class="mt-4 inline-block bg-[#f5a623] px-4 py-2 text-xs text-white">
							Learn more &gt;
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<section id="projects" class="py-12">
	<div class="mx-auto max-w-6xl px-4">
		<h2 class="text-center text-2xl font-bold text-[#1d2632]">Featured Projects</h2>
	</div>

	<div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as project (project.title)}
			<a
				href="#contact"
				class="group relative block aspect-[4/3] overflow-hidden bg-[#1d2632]"
				aria-label="View project: {project.title}"
			>
				<img
					src={project.image}
					alt={project.title}
					class="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-50"
					loading="lazy"
				/>

				<div
					class="absolute inset-0 flex flex-col justify-center bg-[#1d2632]/80 p-6 text-white opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-8"
				>
					<h3 class="text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
					<p class="mt-3 max-w-md text-sm leading-relaxed text-gray-200">
						{project.description}
					</p>
					<span class="mt-4 text-xs font-semibold text-[#f5a623] uppercase"> Learn more &gt; </span>
				</div>
			</a>
		{/each}
	</div>
</section>
