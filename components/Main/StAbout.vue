<script setup>
const info = ref([
    {
        name: "100+",
        text: "Партнеров-поставщиков, с которыми мы сотрудничаем, чтобы предоставлять широкий ассортимент строительных материалов от лучших производителей."
    },
    {
        name: "43,000+",
        text: "Доставок выполнено по всей стране, гарантируя своевременное выполнение всех заказов."
    },
    {
        name: "30+",
        text: "Лет успешной работы на рынке строительных материалов, обеспечивая надежность и качество для наших клиентов."
    }
])
</script>

<template>
    <section class="about" id="about">
        <div class="about__container">
            <h3 class="about__name" data-aos="zoom-out-up" data-aos-delay="500">Строй<span class="about__span">Маркет</span></h3>
            <p class="about__text" data-aos="zoom-out-up" data-aos-delay="500">Благодаря большому опыту и надежной логистике, мы обеспечиваем своевременную доставку более 43 000 заказов по всей территории страны. Мы гордимся своей репутацией надежного партнера, который ценит каждый заказ и стремится удовлетворить потребности клиентов на всех этапах работы.</p>
            <div class="about__position">
                <div class="about__item" data-aos="zoom-out-up" data-aos-delay="500" v-for="(item, index) in info" :key="index">
                    <h4 class="about__name about__name_color">{{ item.name }}</h4>
                    <p class="about__text">{{ item.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.about {
    color: var(--white);
    background: url('/Main/about.webp');
    background-position: 50% 50%;
    background-size: cover;
    overflow: hidden;
    padding: 200px 0;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2); 
        z-index: 1; 
    }

    &__container {
        position: relative;
        max-width: 1380px;
        margin: 0 auto;
        padding: 0 20px;
        z-index: 2;
        color: var(--white);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__name {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 20px;
        text-align: center;
    }

    &__name_color {
        color: var(--red);
    }

    &__span {
        color: var(--red);
    }

    &__text {
        text-align: center;
        max-width: 700px;
    }

    &__position {
        display: flex;
        margin-top: 60px;
    }

    @media(max-width:700px) {
        padding: 100px 0;
        
        &__position {
            flex-direction: column;
        }

        &__text {
            margin-bottom: 30px;
        }
    }
}
</style>