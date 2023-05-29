<script setup lang="ts">
import ProjectInterface from '~/shared/interface/project';

defineProps<{
    index : number,
    project: ProjectInterface
}>()

</script>

<template>
    <div>
        <span class="color1">const</span> <span class="color4">project_{{ index }}</span> = { 
            <br />
            <span class="colorTrans">---</span><span class="color4">"title"</span> : <span class="color2">"{{ project.title }}"</span>, 
            <br />
            <span class="colorTrans">---</span><span class="color4">"Stack"</span> : <span class="color3">[<span v-for="stack in project.techno" :key="stack.name">"{{ stack.name }}", </span>]</span> 
            <br />
            <span class="colorTrans">---</span><span class="color4">"Link"</span> : <a :href="project.link" target="_blank">{{ project.link }}</a>
            <br />
            <span class="colorTrans">---</span><span class="color4">Details</span> : <span><a :href="`/project/detail/${project.title}`">More</a></span>
            <br />
        }
    </div>
    <br />
</template>

<style scoped lang="sass">

div
    margin-left: 5px
.colorTrans
    color: #1a1f1f
.color1
    color: violet
.color2
    color: #a14f23
.color3
    color: #ba5c29
.color4
    color: #299dba
</style>

