<template>
    <header class="header">
        <nuxt-link class="logo" to="/"><img src="@/assets/img/logo.jpg" alt=""
                style="width:100%; height:100%"></nuxt-link>
        <nav class="nav">
            <ul class="nav_item">
                <nuxt-link class="nav_item_link">О компании</nuxt-link>
                <nuxt-link class="nav_item_link" to="/Portfolio">Работы</nuxt-link>
                <nuxt-link class="nav_item_link">Контакты</nuxt-link>
            </ul>
        </nav>
    </header>
    <slot />
    <footer class="footer">
        <div>
            <nuxt-link class="logo_footer" to="/">LOGO</nuxt-link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
            <p>Контакты</p>
        </div>
        <div>
            <p>Реквизиты</p>
        </div>
    </footer>
</template>

<style>
.header {
    display: flex;
    justify-content: space-between;
    max-width: 1536px;
    margin: 0 auto;
    padding: 10px;
    background-color: rgb(238, 235, 235);
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
    margin-right: 30px;
}

.nav_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 375px;
    height: 60px;
}

.nav_item_link {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    height: 35px;
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
    text-decoration: none;
    background-color: rgb(80, 247, 211);
}

.footer {
    display: flex;
    justify-content: space-between;
    max-width: 1536px;
    margin: 0 auto;
    padding: 40px;
    background-color: rgb(238, 235, 235);
}

.logo_footer {
    display: flex;
    width: 120px;
    height: 60px;
    align-items: center;
    justify-content: flex-start;
    font-size: 24px;
}
</style>