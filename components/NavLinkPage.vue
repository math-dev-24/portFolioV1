<script setup lang="ts">
defineProps<{
    previous: string,
    textPrevious: string,
    next: string,
    textNext: string,
}>()
</script>


<template>
    <div class="separator mt-6"></div>
    <div class="panel_btn_nav">
        <NuxtLink class="btn_previous flex-1" :to="previous">
            <span>Previous page</span>
            <span>{{ textPrevious  }}</span>
        </NuxtLink>
        <NuxtLink class="btn_next flex-1" :to="next">
            <span>Next page</span>
            <span>{{ textNext }}</span>
        </NuxtLink>
    </div>
</template>