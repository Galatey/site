<template>
    <header class="header">
        <nuxt-link class="logo" to="/">LOGO</nuxt-link>
        <nav>
            <ul class="nav_item">
                <nuxt-link>О компании</nuxt-link>
                <nuxt-link to="/Portfolio">Работы</nuxt-link>
                <nuxt-link>Контакты</nuxt-link>
            </ul>
        </nav>
    </header>
    <slot />
</template>

<style>
.header {
    display: flex;
    justify-content: space-between;
    max-width: 1536px;
    margin: 0 auto;
    padding: 10px;
}

.logo {
    display: flex;
    width: 120px;
    height: 60px;
    align-items: center;
    justify-content: center;
    font-size: 24px;
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
    color: black;
    background-color: rgb(255, 217, 160);
}
</style>