<script>
	import Icon from '#lib/components/ui/Icon.svelte';
</script>

<section id="about" class="border-b border-slate-200 bg-white">
	<div
		class="mx-auto flex max-w-[1170px] flex-col gap-6 px-4 py-9 md:flex-row md:items-center md:gap-8"
	>
		<h2 class="shrink-0 font-sans text-3xl font-semibold text-brand">We Are BuildIcon</h2>
		<p class="max-w-xl text-sm leading-relaxed text-slate-600">
			We have been transforming ideas and visions into award-winning projects.
		</p>
		<a
			href="#contact"
			class="flex items-center gap-2 self-start bg-brand px-6 py-3.5 text-xs font-semibold tracking-wide text-white uppercase transition hover:bg-brand-dark md:ml-auto md:self-auto"
		>
			<Icon name="mail" class="h-4 w-4" />
			Request a quote
		</a>
	</div>
</section>
