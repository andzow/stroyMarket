<template>
  <footer class="footer">
    <div class="footer__container">
        <div class="footer__info">
            <div class="footer__item">
                <h2 class="footer__logo">Строй<span class="footer__span">Маркет</span></h2>
                <p class="footer__text">ИНН 434588967285</p>
                <p class="footer__text">ИП Соболев К. С.</p>
                <p class="footer__text">442304, Пензенская область, Городищенский р-н, п. Затон, ул. Горная, д. 2</p>
            </div>
            <div class="footer__item footer__item_center">
                <p class="footer__text footer__app" @click="scrollToAnchor('main')">Главная</p>
                <p class="footer__text footer__app" @click="scrollToAnchor('products')">Продукция</p>
                <p class="footer__text footer__app" @click="scrollToAnchor('about')">О нас</p>
                <p class="footer__text footer__app" @click="scrollToAnchor('gallery')">Склады</p>
            </div>
            <div class="footer__item">
                <div class="footer__position">
                    <img src="~/assets/images/phone.svg" alt="">
                    <a class="footer__contact" href="tel:+79950684351">7 (995) - 068 - 43 - 51</a>
                </div>
                <div class="footer__position">
                    <img src="~/assets/images/map.svg" alt="">
                    <a class="footer__contact" href="mailto:KOSTYA-SOB81@YANDEX.RU">KOSTYA-SOB81@YANDEX.RU</a>
                </div>
            </div>
        </div>
        <div class="footer__other">
            <p class="footer__private">© {{ year }} СтройМаркет. Все права защищены.</p>
            <a href="https://wave-studio.site" target="_blank" class="footer__private footer__site">Разработка сайта - <span class="footer__special">Волна</span></a>
        </div>
    </div>
  </footer>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const year = ref(new Date().getFullYear())
function scrollToTop () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
        
function scrollToAnchor(anchorMain) { 
    if (route.name === "index") {
        const anchor = document.getElementById(anchorMain);
        if (anchor) {
            const offset = 90;
            const top = anchor.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    } else {
        const newRoute = { path: '/', hash: `#${anchorMain}`};
        router.push(newRoute);
    }
}
</script>

<style scoped>
.footer {
    padding: 60px 0 40px 0;
    background: #111;
}
.footer__container {
    max-width: 1700px;
    margin: 0 auto;
    padding: 0 20px;
    color: var(--white);
}
.footer__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid #474F56;
}
.footer__text {
    margin-top: 5px;
    max-width: 400px;
}
.footer__logo {
    font-size: 20px;
    font-weight: 500;
}
.footer__span {
    color: var(--red);
    font-weight: 500;
}
.footer__item_center {
    text-align: center;
}
.footer__app {
    transition: all .3s ease;
    cursor: pointer;
}
.footer__app:hover {
    color: var(--red);
}
.footer__position {
    display: flex;
    align-items: center;
}
.footer__position {
    margin-top: 10px;
}
.footer__contact {
    margin-left: 8px;
    transition: all .3s ease;
    cursor: pointer;
}
.footer__contact:hover {
    color: var(--red);
}
.footer__other {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #474F56;
}
.footer__special {
    color: #474F56;
    transition: all .3s ease;
    cursor: pointer;
}
.footer__private {
    font-weight: 600;
    margin-top: 10px;
}
.footer__special:hover {
    color: var(--red);
}
@media(max-width: 700px) {
    .footer__logo {
        margin-bottom: 10px;
    }
    .footer__info {
        flex-direction: column;
    }
    .footer__item {
        text-align: center;
    }
    .footer__position {
        justify-content: center;
    }
    .footer__other {
        flex-direction: column;
    }
    .footer__private {
        text-align: center;
    }
}
</style>