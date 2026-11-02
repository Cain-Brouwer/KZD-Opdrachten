<script>
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import Header from '#lib/components/layout/header/Header.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import BackToTop from '#lib/components/ui/BackToTop.svelte';

	/** @type {{ children: import('svelte').Snippet }} */
	let { children } = $props();
</script>

<svelte:head>
	<title>BuildIcon | Construction Company</title>
	<meta
		name="description"
		content="BuildIcon is a client-oriented construction company turning ideas and visions into award-winning projects."
	/>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />
<BackToTop />
