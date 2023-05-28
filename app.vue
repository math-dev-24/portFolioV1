<template>
  <NuxtLayout>
    <NuxtPage :transition="{name: 'bounce', mode:'out-in'}" />
  </NuxtLayout>
</template>

<style lang="sass">
.bounce-enter-active,
.bounce-leave-active
  transition: all 0.4s

.bounce-enter-from
  transform: translateX(20px)
  opacity: 0
.bounce-leave-to
  opacity: 0
  transform: translateX(-20px)
</style>