<template>
    <footer class="min-h-[100px] w-screen flex items-center flex-row-reverse">
        <NuxtLink to="/contact" class="ml-2 md:ml-4 mr-4 md:mr-14">Contact</NuxtLink>
        <NuxtLink to="/certificates" class="md:mx-4">Certificates</NuxtLink>
        <NuxtLink to="/project/list" class=" mx-2 md:mx-4">Projects</NuxtLink>
        <NuxtLink to="/" class="md:mx-4">About</NuxtLink>
    </footer>
</template>

<style scoped lang="sass">
footer
    border-top: 1px solid #CBE4DE
.router-link-active
    text-decoration: underline
</style>