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

.nav_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    height: 60px;
}

</style>