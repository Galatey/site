<template>
    <div class="common-layout">
                <header class="header">
                    <nuxt-link class="logo" to="/">
                        <img src="@/assets/img/logo.jpg" alt="" style="width:100%; height:100%">
                    </nuxt-link>
                    <nav class="nav">
                        <nuxt-link class="nav_item_link">О компании</nuxt-link>
                        <nuxt-link class="nav_item_link" to="/Portfolio">Работы</nuxt-link>
                        <nuxt-link class="nav_item_link">Контакты</nuxt-link>
                    </nav>
                    <div class="top-phone">
                        <span class="phone">+7 (900) 000-00-00</span>
                    </div>
                </header>
                <slot />
                <footer class="footer">
                    <div>
                        <nuxt-link class="logo_footer" to="/">
                            <img src="@/assets/img/logo.jpg" alt="" style="width:100%; height:100%">
                        </nuxt-link>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="contacts">
                        <span>Контакты</span>
                        <nuxt-link class="contacts_item_link" to="https://vk.com" target="_blank">
                            <img class="icons" src="@/assets/img/svg/vk_jwps1kngigw6.svg" alt="">
                            <span>VK</span>
                        </nuxt-link>
                        <nuxt-link class="contacts_item_link" to="https://web.telegram.org" target="_blank">
                            <img class="icons" src="@/assets/img/svg/telegram_79rt2itlji9i.svg" alt="">
                            <span>Telegramm</span>
                        </nuxt-link>
                        <nuxt-link class="contacts_item_link" to="https://web.whatsapp.com" target="_blank">
                            <img class="icons" src="@/assets/img/svg/whatsapp_ig80sdcz30vh.svg" alt="">
                            <span>WhatsApp</span>
                        </nuxt-link>
                        <nuxt-link class="contacts_item_link" to="">
                            <img class="icons" src="@/assets/img/svg/viber_xg4lbhqd40j8.svg" alt="">
                            Viber
                        </nuxt-link>
                    </div>
                </footer>
        <header class="header">
            <nuxt-link class="logo" to="/">
                <img src="@/assets/img/logo.jpg" alt="" style="width:100%; height:100%">
            </nuxt-link>
            <nav class="nav">
                <nuxt-link class="nav_item_link">О компании</nuxt-link>
                <nuxt-link class="nav_item_link" to="/Portfolio">Работы</nuxt-link>
                <nuxt-link class="nav_item_link">Контакты</nuxt-link>
            </nav>
        </header>
        <slot />
        <footer class="footer">
            <div>
                <nuxt-link class="logo_footer" to="/">
                    <img src="@/assets/img/logo.jpg" alt="" style="width:100%; height:100%">
                </nuxt-link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="contacts">
                <span>Контакты</span>
                <nuxt-link class="contacts_item_link" to="https://vk.com" target="_blank">
                    <img class="icons" src="@/assets/img/svg/vk_jwps1kngigw6.svg" alt="">
                    <span>VK</span>
                </nuxt-link>
                <nuxt-link class="contacts_item_link" to="https://web.telegram.org" target="_blank">
                    <img class="icons" src="@/assets/img/svg/telegram_79rt2itlji9i.svg" alt="">
                    <span>Telegramm</span>
                </nuxt-link>
                <nuxt-link class="contacts_item_link" to="https://web.whatsapp.com" target="_blank">
                    <img class="icons" src="@/assets/img/svg/whatsapp_ig80sdcz30vh.svg" alt="">
                    <span>WhatsApp</span>
                </nuxt-link>
                <nuxt-link class="contacts_item_link" to="">
                    <img class="icons" src="@/assets/img/svg/viber_xg4lbhqd40j8.svg" alt="">
                    Viber
                </nuxt-link>
            </div>
        </footer>
    </div>
</template>

<script setup>

</script>

<style>
.header {
    display: flex;
    justify-content: space-between;
    max-width: 1536px;
    padding: 10px 30px;
    margin: 0 auto;
    gap: 15px;
    align-items: center;
}

.logo {
    display: flex;
    width: 200px;
    height: 60px;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    text-decoration: none;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    height: 60px;
    gap: 15px;
}


.nav_item_link {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 125px;
    height: 35px;
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
    text-decoration: none;
    color: black;
    background-color: rgb(255, 217, 160);
}

.top-phone {
    display: flex;
    min-width: 190px;
    align-items: center;
    justify-content: center;
}

.phone {
    display: flex;
    flex-direction: row;
    font-size: 24px;
}

.footer {
    display: flex;
    justify-content: space-between;
    max-width: 1536px;
    margin: 0 auto;
    padding: 40px;
}

.logo_footer {
    display: flex;
    width: 120px;
    height: 60px;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    font-size: 24px;
}

.contacts {
    display: flex;
    min-width: 150px;
    height: 150px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}

.contacts_item_link {
    text-decoration: none;
    color: rgb(48, 67, 235);
}

.icons {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

@media screen and (max-width: 400px) {
    .logo {
        display: none;
    }

    .header {
        display: flex;
        justify-content: center;
    }

    .nav_item_link {
        min-width: 100px;
        font-size: 16px;
    }

}
</style>