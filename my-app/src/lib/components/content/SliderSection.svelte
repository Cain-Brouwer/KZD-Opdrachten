<script>
    let currentImageIndex = $state(0);
    let images = [
        "/Bloemen_verzameling.jpg",
        "/Seizoensbloemen.webp",
        "/Tulpen.jpg"
    ];

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }
</script>

<div class="grid grid-cols-2 pt-40 pb-40 place-items-center">
    <div class="col-start-1">
        <h1 class="text-5xl text-white pb-4">Fresh Flowers, Thoughtfully <br> Arranged</h1>
        <p class="text-white pb-4">Seasonal blooms crafted for everyday moments and meaningful occasions. Sourced <br>
            responsibly and arranged with care.</p>
        <button class="bg-blue-500 rounded p-2 text-white"><a href="/flowers">Shop Flowers</a></button>
    </div>
    <div class="col-start-2 relative">
        <img class="w-220 h-150" src={images[currentImageIndex]} alt="Bloemen">
        <button class="absolute right-0 top-1/2 transform
                       -translate-y-1/2 text-white/80 text-5xl mr-10"
                       on:click={nextImage}
        >ᐳ</button>
        <button class="absolute left-0 top-1/2 transform
                       -translate-y-1/2 text-white/80 text-5xl ml-10"
                       on:click={prevImage}
        >ᐸ</button>
    </div>
</div>