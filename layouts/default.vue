<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <header class="header">
                    <nuxt-link class="logo" to="/"><img src="@/assets/img/logo.jpg" alt=""
                            style="width:100%; height:100%"></nuxt-link>
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
                        <nuxt-link class="logo_footer" to="/">LOGO</nuxt-link>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="contacts">
                        <p>Контакты</p>
                        <nuxt-link to="">VK</nuxt-link>
                        <nuxt-link to="">Telegramm</nuxt-link>
                        <nuxt-link to="">WhatsApp</nuxt-link>
                        <nuxt-link to="">Viber</nuxt-link>
                    </div>
                    <div class="Requisites">
                        <p>Реквизиты</p>
                        <p>Наименование организации ООО «Весна»</p>
                        <p>ИНН 7712345678</p>
                        <p>КПП 779101001</p>
                        <p>БИК 044521234</p>
                        <p>Р/С 40702810123450101230</p>
                        <p>К/С 30101234500000000225</p>
                        <p>ОКПО 12345678</p>
                        <p>ОКАТО 87654321000</p>
                        <p>ОКВЭД (основной) 18.15</p>
                        <p>ОГРН 1047712345678</p>
                        <p>Генеральный директор Петров Сергей Петрович</p>
                        <p>Электронная почта info@vesna.ru</p>
                        <p>Телефон +749512345678</p>
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
    background-color: rgb(80, 247, 211);
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
    font-size: 24px;
}
.contacts {
    display: flex;
    width: 150px;
    height: 150px;
    flex-direction: column;
    justify-content: space-between;
}
.Requisites {
    display: flex;
    width: 350px;
    flex-direction: column;
    justify-content: space-between;
}
</style>