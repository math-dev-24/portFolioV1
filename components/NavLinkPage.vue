<script setup lang="ts">
defineProps<{
    previous?: string,
    textPrevious?: string,
    next?: string,
    textNext?: string,
}>()
</script>


<template>
    <div class="separator mt-6 md:mt-14"></div>
    <div class="panel_btn_nav mb-10">
        <NuxtLink class="btn_previous flex-1" :to="previous" v-if="textPrevious">
            <span>Previous page</span>
            <span>{{ textPrevious  }}</span>
        </NuxtLink>
        <div v-else class=" flex-1"></div>
        <NuxtLink class="btn_next flex-1" :to="next" v-if="textNext">
            <span>Next page</span>
            <span>{{ textNext }}</span>
        </NuxtLink>
        <div v-else class="flex-1"></div>
    </div>
</template>