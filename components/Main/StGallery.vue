<script setup>
</script>

<template>
    <section class="gallery" id="gallery">
        <div class="gallery__container">
            <h3 class="gallery__name" data-aos="zoom-out-up" data-aos-delay="500">Фотогалерея</h3>
            <p class="gallery__text" data-aos="zoom-out-up" data-aos-delay="500">В нашей фотогалерее вы можете ознакомиться с нашими проектами, реализациями и достижениями. Здесь собраны фотографии, которые демонстрируют широкий спектр строительных материалов, которые мы предлагаем, а также примеры успешных поставок и завершенных объектов.</p>
            <div class="gallery__grid">
                <img class="gallery__1" src="/Main/gallery_1.webp" alt="" data-aos="zoom-out-up" data-aos-delay="500">
                <img class="gallery__2" src="/Main/gallery_2.webp" alt="" data-aos="zoom-out-up" data-aos-delay="500">
                <img class="gallery__3" src="/Main/gallery_3.webp" alt="" data-aos="zoom-out-up" data-aos-delay="500">
                <img class="gallery__4" src="/Main/gallery_4.webp" alt="" data-aos="zoom-out-up" data-aos-delay="500">
                <img class="gallery__5" src="/Main/gallery_5.webp" alt="" data-aos="zoom-out-up" data-aos-delay="500">
                <img class="gallery__6" src="/Main/gallery_6.webp" alt="" data-aos="zoom-out-up" data-aos-delay="500">
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.gallery {
    padding: 130px 0;
    background: rgba($color: #111, $alpha: 1);

    &__name {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 20px;
        text-align: center;
    }

    &__text {
        text-align: center;
        max-width: 800px;
        margin-bottom: 30px;
    }

    &__container {
        position: relative;
        max-width: 1380px;
        margin: 0 auto;
        padding: 0 20px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--white);
    }

    &__1 {
        grid-area: gallery_1;
    }
    &__2 {
        grid-area: gallery_2;
    }
    &__3 {
        grid-area: gallery_3;
    }
    &__4 {
        grid-area: gallery_4;
    }
    &__5 {
        grid-area: gallery_5;
    }
    &__6 {
        grid-area: gallery_6;
    }

    &__grid {
        display: grid;
        gap: 25px;
        grid-template-areas:
        "gallery_1 gallery_3 gallery_5"
        "gallery_1 gallery_4 gallery_5"
        "gallery_1 gallery_4 gallery_6"
        "gallery_2 gallery_4 gallery_6";
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 700px) {
        padding: 30px;
        
        &__grid {
            grid-template-areas:
            "gallery_1"
            "gallery_2"
            "gallery_3"
            "gallery_4"
            "gallery_5"
            "gallery_6";
            grid-template-columns: repeat(1, 1fr);
        }
    }
}
</style>