<script>
	import Icon from '#lib/components/ui/Icon.svelte';
	import { navItems } from '#lib/data/site.js';

	let mobileOpen = $state(false);
	let searchOpen = $state(false);
</script>

<header class="relative z-50 bg-white">
	<div class="border-b border-slate-200">
		<div class="mx-auto flex max-w-[1170px] items-center gap-4 px-4 py-3">
			<a href="#top" class="shrink-0" aria-label="BuildIcon home">
				<img
					src="/logo.webp"
					alt="BuildIcon Construction Company"
					class="h-10 w-auto md:h-12"
					width="265"
					height="112"
				/>
			</a>

			<div class="ml-auto hidden items-center gap-6 lg:flex">
				<div class="flex items-center gap-3 border-r border-slate-200 pr-6">
					<Icon name="phone" class="h-7 w-7 shrink-0 text-brand" />
					<div class="leading-tight">
						<p class="text-[11px] tracking-wide text-slate-400 uppercase">
							Custom support &amp; sale
						</p>
						<a
							href="tel:+74951234567"
							class="font-sans text-sm font-semibold text-ink transition hover:text-brand"
						>
							+7-495-1234567
						</a>
					</div>
				</div>

				<div class="flex items-center gap-3">
					<Icon name="clock" class="h-7 w-7 shrink-0 text-brand" />
					<div class="leading-tight">
						<p class="text-[11px] tracking-wide text-slate-400 uppercase">Working time</p>
						<p class="font-sans text-sm font-semibold text-ink">Mon&ndash;Sat: 08:00&ndash;18:00</p>
					</div>
				</div>

				<a
					href="#contact"
					class="flex items-center gap-2 bg-ink px-5 py-3 text-xs font-semibold tracking-wide text-white uppercase transition hover:bg-brand hover:text-ink"
				>
					<Icon name="mail" class="h-4 w-4" />
					Request a quote
				</a>
			</div>
		</div>
	</div>

	<nav class="sticky top-0 z-40 bg-brand text-white shadow-md" aria-label="Main navigation">
		<div class="mx-auto flex max-w-[1170px] items-stretch px-4">
			<button
				type="button"
				class="flex items-center gap-2 py-3 text-xs font-semibold tracking-wide uppercase lg:hidden"
				aria-label="Toggle navigation"
				aria-expanded={mobileOpen}
				aria-controls="mobile-navigation"
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				<Icon name={mobileOpen ? 'close' : 'menu'} class="h-5 w-5" />
				Menu
			</button>

			<ul class="hidden lg:flex">
				{#each navItems as item, index (item.label)}
					<li class="group relative flex">
						<a
							href={item.href}
							class="flex items-center gap-1.5 px-4 py-3.5 text-xs font-semibold tracking-[0.08em] uppercase transition hover:bg-ink/10 {index ===
							0
								? 'bg-ink hover:bg-ink-soft'
								: ''}"
						>
							{item.label}
							{#if item.children}
								<Icon name="chevron-down" class="h-3.5 w-3.5" />
							{/if}
						</a>

						{#if item.children}
							<div
								class="invisible absolute top-full left-0 z-50 w-56 bg-white py-2 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100"
							>
								{#each item.children as child (child.label)}
									<a
										href={child.href}
										class="block px-5 py-2.5 text-xs font-semibold tracking-wide text-slate-600 uppercase transition hover:bg-slate-100 hover:text-brand"
									>
										{child.label}
									</a>
								{/each}
							</div>
						{/if}
					</li>
				{/each}
			</ul>

			<div class="ml-auto hidden items-center lg:flex">
				{#if searchOpen}
					<form
						class="hidden items-center gap-2 lg:flex"
						role="search"
						onsubmit={(event) => event.preventDefault()}
					>
						<input
							type="search"
							placeholder="Search..."
							aria-label="Search"
							class="w-44 border border-white/40 bg-white/15 px-3 py-1.5 text-xs text-white placeholder:text-white/70 focus:ring-2 focus:ring-white/60 focus:outline-none"
						/>
						<button
							type="button"
							class="p-1 transition hover:text-ink"
							aria-label="Close search"
							onclick={() => (searchOpen = false)}
						>
							<Icon name="close" class="h-5 w-5" />
						</button>
					</form>
				{:else}
					<button
						type="button"
						class="p-2 transition hover:text-ink"
						aria-label="Open search"
						onclick={() => (searchOpen = true)}
					>
						<Icon name="search" class="h-5 w-5" />
					</button>
				{/if}
			</div>
		</div>

		{#if mobileOpen}
			<div id="mobile-navigation" class="border-t border-white/20 bg-ink px-4 py-4 lg:hidden">
				<ul class="space-y-1">
					{#each navItems as item (item.label)}
						<li>
							<a
								href={item.href}
								class="block px-2 py-2 text-sm font-semibold tracking-wide text-white uppercase transition hover:text-brand"
								onclick={() => (mobileOpen = false)}
							>
								{item.label}
							</a>
							{#if item.children}
								<ul class="mb-2 ml-4 border-l border-white/15 pl-3">
									{#each item.children as child (child.label)}
										<li>
											<a
												href={child.href}
												class="block px-2 py-1.5 text-xs tracking-wide text-slate-300 uppercase transition hover:text-brand"
												onclick={() => (mobileOpen = false)}
											>
												{child.label}
											</a>
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</nav>
</header>
