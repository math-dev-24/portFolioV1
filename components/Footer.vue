<template>
    <footer>
        <NuxtLink to="/" class="mx-4">About</NuxtLink>
        <NuxtLink to="/Projects" class="mx-4">Projects</NuxtLink>
        <NuxtLink to="/certificates" class="mx-4">Certificates</NuxtLink>
        <NuxtLink to="/contact" class="ml-4 mr-14">Contact</NuxtLink>
    </footer>
</template>

<style scoped lang="sass">
footer
    border-top: 1px solid #CBE4DE
    min-height: 100px
    display: flex
    align-items: center
    justify-content: end

.router-link-active
    text-decoration: underline
</style>