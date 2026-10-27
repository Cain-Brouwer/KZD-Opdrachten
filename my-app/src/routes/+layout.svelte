<script>
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	// @ts-ignore
	import Hero from '#lib/components/layout/Hero.svelte';
	// @ts-ignore
	import Header from '#lib/components/layout/Header.svelte';
	// @ts-ignore
	import Footer from '#lib/components/layout/Footer.svelte';

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Hero />
<Header />
{@render children()}
<Footer />
