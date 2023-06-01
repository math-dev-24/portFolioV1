<script setup lang="ts">
import ProjectInterface from '~/shared/interface/project';

defineProps<{
    index: number,
    project: ProjectInterface
}>()


</script>

<template>
    <div>
        <span class="ccolorTrans">---</span><span class="ccolor5"> {</span>
        <br>
        <span class="ccolorTrans">------</span><span class="ccolor4">"title"</span> : <h2 class="ccolor2 font-normal text-sm md:text-lg inline">"{{
            project.title }}"</h2>,
        <br />
        <span class="ccolorTrans">------</span><span class="ccolor4">"techno"</span> : <span class="ccolor3">[<b
                v-for="stack in project.techno" :key="stack.name" class="font-normal">"{{ stack.name }}", </b>]</span>,
        <br />
        <span class="ccolorTrans">------</span><span class="ccolor4">"link"</span> : "<a :href="project.link"
            target="_blank">{{ project.link }}</a>",
        <br />
        <span class="ccolorTrans">------</span><span class="ccolor4">details</span> : "<span><a
                :href="`/project/detail/${project.title}`">More</a></span>",
        <br />
        <span class="ccolorTrans">---</span><span class="ccolor5"> }</span>,
    </div>
</template>

<style scoped lang="sass">

div
    margin-left: 5px

</style>

