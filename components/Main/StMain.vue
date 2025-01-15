<script setup lang='ts'>
let info = ref([
    {
        title: "Планирование",
        text: "Определите нужные материалы, их количество и сроки поставки для проекта"
    },
    {
        title: "Выбор",
        text: "Изучите наш ассортимент, выберите подходящие материалы и добавьте в корзину"
    },
    {
        title: "Заключение",
        text: "Подтвердите заказ, выберите способы оплаты и доставки для завершения покупки"
    },
])
</script>

<template>
    <section class="main" id="main">
        <div class="main__container">
            <div class="main__block">
                <h1 class="main__title" data-aos="zoom-in">Оптовая продажа стройматериалов</h1>
                <a class="main__btn" data-aos="zoom-in" data-aos-delay="200" href="tel:+79950684351">Оформить заказ</a>
            </div>
            <div class="main__info">
                <div class="main__item" data-aos="flip-left" data-aos-delay="500" v-for="(item, idx) in info" :key="idx">
                    <span class="main__span">0{{ idx + 1 }}</span>
                    <h2 class="main__name">{{ item.title }}</h2>
                    <p class="main__text">{{ item.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.main {
    width: 100%;
    height: 100vh;
    background: url('/Main/back.webp');
    background-position: 50% 50%;
    background-size: cover;
    overflow: hidden;

    &__container {
        color: var(--white);
        width: 85%;
        height: 100%;
        margin-left: 15%;
        display: flex;
        flex-direction: column;
       justify-content: flex-end;
    }

    &__block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex-grow: 1; 
    }

    &__title {
        font-size: 68px;
        font-weight: 800;
        max-width: 700px;
        line-height: 68px;
        margin-bottom: 25px;
    }

    &__btn {
        background: var(--red);
        display: inline-block;
        padding: 20px 40px;
        border-radius: 20px;
        font-size: 20px;
        font-weight: 400;
        transition: all .3s ease;
    }

    &__btn:hover {
        transform: scale(1.03);
    }

    &__info {
        background: rgba($color: #000000, $alpha: .6);
        padding: 40px;
        display: flex;
    }

    &__item {
        display: flex;
        flex-direction: column;
    }

    &__item:not(:last-child) {
        margin-right: 30px;
    }

    &__span {
        color: var(--red);
        font-weight: 800;
        margin-bottom: 20px;
    }

    &__name {
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 6px;
    }

    &__text {
        max-width: 450px;
    }

    @media(max-width: 900px) {
        &__container {
            width: 100%;
            margin-left: 0%;
            align-items: center;
        }

        &__block {
            align-items: center;
        }

        &__title {
            font-size: 58px;
            line-height: 58px;
            text-align: center;
        }
    }

    @media(max-width: 700px) {
        height: auto;

        &__title {
            font-size: 48px;
            line-height: 48px;
        }

        &__btn {
            padding: 15px 25px;
        }

        &__info {
            flex-direction: column;
        }

        &__item {
            margin-bottom: 20px;
        }
    }

    @media(max-width: 500px) {
        &__title {
            font-size: 38px;
            line-height: 38px;
        }
        &__block {
            margin: 200px 0 100px 0;
        }
    }

    @media(max-width: 390px) {
        &__title {
            font-size: 32px;
            line-height: 32px;
        }
    }
}
</style>