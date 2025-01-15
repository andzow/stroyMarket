<script setup>
</script>

<template>
    <section class="products" id="products">
        <div class="products__container">
            <div class="products__position" data-aos="zoom-in-right" data-aos-delay="500">
                <img class="products__img" src="/Main/brick.webp" alt="">
                <div class="products__block">
                    <h3 class="products__title">Кирпич: прочность и долговечность</h3>
                    <p class="products__text">Кирпич — один из самых популярных и прочных строительных материалов. Он обеспечивает отличную тепло- и звукоизоляцию, устойчив к внешним воздействиям и долговечен в эксплуатации.</p>
                    <a class="products__btn" href="tel:+79950684351">Оформить предзаказ</a>
                </div>
            </div>

            <div class="products__position products__position_reverse" data-aos="zoom-in-left" data-aos-delay="500">
                <img class="products__img" src="/Main/board.webp" alt="">
                <div class="products__block">
                    <h3 class="products__title">Термодеревянные доски</h3>
                    <p class="products__text">Термодеревянные доски проходят термическую обработку, что делает их устойчивыми к влаге, гниению и насекомым, при этом сохраняется естественная текстура дерева и его привлекательность.</p>
                    <a class="products__btn" href="tel:+79950684351">Забронировать товар</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.products {
    position: relative;
    background: url('/Main/product.webp');
    background-position: 50% 50%;
    background-size: cover;
    overflow: hidden;
    padding: 130px 0 60px 0;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); 
        z-index: 1; 
    }

    &__container {
        position: relative;
        max-width: 1380px;
        margin: 0 auto;
        padding: 0 20px;
        z-index: 2;
        color: var(--white);
    }

    &__position {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    &__position_reverse {
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    &__block {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__title {
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 15px;
        text-align: center;
    }

    &__text {
        text-align: center;
        margin-bottom: 15px;
    }

    &__btn {
        background: var(--red);
        padding: 15px 35px;
        border-radius: 20px;
        font-size: 18px;
        font-weight: 400;
        transition: all .3s ease;
    }

    &__btn:hover {
        transform: scale(1.1);
    }

    @media(max-width: 1200px) {
        &__img {
            max-width: 500px;
        }
    }

    @media(max-width: 900px) {
        padding: 90px 0;

        &__img {
            max-width: 100%;
        }

        &__position {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-bottom: 40px;
        }

        &__title {
            margin-top: 15px;
        }
    }
}
</style>