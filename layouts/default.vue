<template>
    <main class="flex flex-col">
        <div class="container m-auto flex-1">
        <slot></slot>
    </div>
    <Footer />
    </main>



</template>

<style scoped lang="sass">
main
    min-height: 100vh
</style>