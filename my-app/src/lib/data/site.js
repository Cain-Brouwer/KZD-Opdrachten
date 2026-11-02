export const navItems = [
	{ label: 'Home', href: '#top' },
	{ label: 'About', href: '#about' },
	{
		label: 'Services',
		href: '#services',
		children: [
			{ label: 'Construction', href: '#services' },
			{ label: 'Renovation', href: '#services' },
			{ label: 'Consulting', href: '#services' }
		]
	},
	{
		label: 'Projects',
		href: '#projects',
		children: [
			{ label: 'All projects', href: '#projects' },
			{ label: 'Building', href: '#projects' },
			{ label: 'Interior', href: '#projects' },
			{ label: 'Office', href: '#projects' }
		]
	},
	{ label: 'News', href: '#projects' },
	{ label: 'Contact', href: '#contact' }
];

export const features = [
	{
		title: 'Construction',
		image: '/gallery-3.jpg',
		alt: 'Two construction workers guiding a crane on a building site',
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

export const projectFilters = ['All', 'Building', 'Consulting', 'Interior', 'Office'];

export const projects = [
	{
		title: 'Casa Blanca Villa',
		category: 'Building',
		image: '/project-2.jpg',
		alt: 'White villa with a wooden pergola and a courtyard pool',
		description: 'A sun-drenched private villa with a courtyard pool and open-plan living.'
	},
	{
		title: 'Shreveport, Bossier City',
		category: 'Consulting',
		image: '/project-5.jpg',
		alt: 'Modern museum illuminated at dusk with reflections in the water',
		description:
			'This luxury resort and senior independent living facility with a fitness center, pool, spa, sauna, hair salon, classroom space and more.',
		featured: true
	},
	{
		title: 'Coastal Residence',
		category: 'Consulting',
		image: '/project-1.jpg',
		alt: 'Modern cliffside home with a wooden terrace overlooking the ocean',
		description: 'A cliffside home with floor-to-ceiling glass and panoramic ocean views.'
	},
	{
		title: 'Alpine Courtyard House',
		category: 'Building',
		image: '/project-4.jpg',
		alt: 'Minimalist white house with a wooden deck and mountain backdrop',
		description: 'A minimalist mountain retreat built around a planted courtyard.'
	},
	{
		title: 'Minimal Kitchen Loft',
		category: 'Interior',
		image: '/project-6.jpg',
		alt: 'Bright white kitchen with warm timber and polished concrete floors',
		description: 'A bright interior renovation with warm timber and seamless white cabinetry.'
	},
	{
		title: 'Palm Grove Estate',
		category: 'Office',
		image: '/project-3.jpg',
		alt: 'Tropical villa with a large swimming pool and palm trees',
		description: 'A tropical family home with a resort-style pool and landscaped garden.'
	}
];
