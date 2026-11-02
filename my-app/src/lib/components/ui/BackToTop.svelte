<script>
	import Icon from '#lib/components/ui/Icon.svelte';

	let visible = $state(false);

	$effect(() => {
		function onScroll() {
			visible = window.scrollY > 400;
		}

		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => window.removeEventListener('scroll', onScroll);
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if visible}
	<button
		type="button"
		class="fixed right-5 bottom-5 z-50 flex items-center gap-2 bg-brand px-4 py-2.5 text-xs font-semibold tracking-wide text-white uppercase shadow-lg transition hover:bg-brand-dark"
		aria-label="Back to top"
		onclick={scrollToTop}
	>
		<Icon name="arrow-up" class="h-4 w-4" />
		Top
	</button>
{/if}
