<template>
    <div class="common-layout">
        <el-container>
            <el-header>
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
            </el-header>
            <el-main>
                <slot />
            </el-main>
            <el-footer>
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
            </el-footer>
        </el-container>
    </div>



</template>

<style>
.header {
    display: flex;
    justify-content: space-between;
    max-width: 1536px;
    padding: 10px 30px;
    margin: 0 auto;
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
    width: 150px;
    height: 150px;
    flex-direction: column;
    justify-content: space-between;
}

.contacts_item_link {
    text-decoration: none;
}

.icons {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

.Requisites {
    display: flex;
    width: 350px;
    flex-direction: column;
    justify-content: space-between;
}

@media screen and (max-width: 376px) {
    .logo {
        display: none;
    }

    .nav_item_link {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 90px;
    height: 35px;
    padding: 10px;
    border-radius: 5px;
    font-size: 12px;
    text-decoration: none;
    color: black;
    background-color: rgb(255, 217, 160);
}
}
</style>