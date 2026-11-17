<script>
    // variabele met hover properties afmaken
    const hover = 'hover:text-black transition-colors duration-300'

    // list items in een array zetten zodat ik maar 1 list item met een for each loop kan gebruiken

</script>

<div class="grid grid-cols-6 gap-4 pt-5 pr-3 pl-3 pb-5">
    <!-- svelte-ignore a11y_missing_content -->
    <h1 id="logo">Florist</h1>
    <ol class="flex gap-5">
        <li class="text-zinc-600 hover:text-black transition-colors duration-300">
            <a href="/">Home</a>
        </li>
        <li class="text-zinc-600 hover:text-black transition-colors duration-300">
            <a href="/roses">Roses</a>
        </li>
        <li class="text-zinc-600 hover:text-black transition-colors duration-300">
            <a href="/bouquets">Bouquets</a>
        </li>
        <li class="text-zinc-600 hover:text-black transition-colors duration-300">
            <a href="/plants">Plants</a>
        </li>
        <li class="text-zinc-600 hover:text-black transition-colors duration-300">
            <a href="/gifts">Gifts</a>
        </li>
        <li class="text-zinc-600 hover:text-black transition-colors duration-300">
            <a href="/location">Location</a>
        </li>
    </ol>
</div>