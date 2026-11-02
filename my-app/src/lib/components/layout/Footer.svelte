<script>
	import Icon from '#lib/components/ui/Icon.svelte';
</script>

<footer id="contact" class="bg-ink text-slate-300">
	<div class="mx-auto grid max-w-[1170px] gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
		<div>
			<a href="#top" class="mb-5 inline-block bg-white p-2" aria-label="BuildIcon home">
				<img
					src="/logo.webp"
					alt="BuildIcon Construction Company"
					class="h-10 w-auto"
					width="265"
					height="112"
				/>
			</a>
			<p class="text-sm leading-relaxed">
				We have been transforming ideas and visions into award-winning projects since 1998.
			</p>
			<div class="mt-5 flex gap-2">
				{#each ['Fb', 'In', 'Tw', 'Ig'] as social (social)}
					<a
						href="#top"
						class="flex h-9 w-9 items-center justify-center border border-white/15 text-xs font-semibold text-white uppercase transition hover:border-brand hover:bg-brand hover:text-ink"
						aria-label={social}
					>
						{social}
					</a>
				{/each}
			</div>
		</div>

		<div>
			<h3 class="mb-5 text-sm font-semibold tracking-wide text-white uppercase">Quick links</h3>
			<ul class="space-y-2.5 text-sm">
				{#each [['Home', '#top'], ['About us', '#about'], ['Services', '#services'], ['Projects', '#projects'], ['Contact', '#contact']] as [label, href] (label)}
					<li>
						<a {href} class="transition hover:text-brand">{label}</a>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<h3 class="mb-5 text-sm font-semibold tracking-wide text-white uppercase">Services</h3>
			<ul class="space-y-2.5 text-sm">
				{#each ['General construction', 'Renovation', 'Project consulting', 'Interior finishing', 'Maintenance'] as service (service)}
					<li>
						<a href="#services" class="transition hover:text-brand">{service}</a>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<h3 class="mb-5 text-sm font-semibold tracking-wide text-white uppercase">Get in touch</h3>
			<ul class="space-y-4 text-sm">
				<li class="flex gap-3">
					<Icon name="phone" class="mt-0.5 h-4 w-4 shrink-0 text-brand" />
					<a href="tel:+74951234567" class="transition hover:text-brand">+7-495-1234567</a>
				</li>
				<li class="flex gap-3">
					<Icon name="mail" class="mt-0.5 h-4 w-4 shrink-0 text-brand" />
					<a href="mailto:info@buildicon.com" class="transition hover:text-brand">
						info@buildicon.com
					</a>
				</li>
				<li class="flex gap-3">
					<Icon name="clock" class="mt-0.5 h-4 w-4 shrink-0 text-brand" />
					<span>Mon&ndash;Sat: 08:00&ndash;18:00</span>
				</li>
				<li class="text-slate-400">Bossier City, LA &mdash; United States</li>
			</ul>
		</div>
	</div>

	<div class="border-t border-white/10">
		<div
			class="mx-auto flex max-w-[1170px] flex-col gap-2 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between"
		>
			<p>&copy; {new Date().getFullYear()} BuildIcon Construction Company. All rights reserved.</p>
			<p>Privacy policy &middot; Terms of service</p>
		</div>
	</div>
</footer>
