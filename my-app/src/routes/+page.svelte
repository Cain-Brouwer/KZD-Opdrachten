<script>
    // @ts-ignore
    import Footer from '$lib/components/layout/Footer.svelte';
    import Header from '\$lib/components/layout/Header.svelte';
    import SliderSection from "$lib/components/content/SliderSection.svelte";
    import CardSection from "$lib/components/content/CardSection.svelte";
    import InformationSection from "$lib/components/content/InformationSection.svelte";
</script>

<div class="flex flex-col min-h-screen">
    <div class="bg-white">
        <Header/>
    </div>
    <div class="flex-1 bg-zinc-700">
        <SliderSection />
        <CardSection />
        <InformationSection />
    </div>
    <div class="bg-zinc-700">
        <Footer/>
    </div>
</div>
