<script setup lang="ts">
import { projects } from '~/shared/data/projects';
const route = useRoute()


const paramProject = route.params.projectName
const project = { ...projects.filter(p => p.title === paramProject) }[0]

const widthImage: number = project.image ? project.image.length + 1 : 1

useHead({
    title: `Project - ${project.title}`,
    meta: [
        {
            name: "description",
            content: `${project.description}`
        }
    ]
})
const indexPrevious: number = projects.sort((a, b) => a.id - b.id).filter(p => p.title === paramProject)[0].id - 1
const indexNext: number = projects.sort((a, b) => a.id - b.id).filter(p => p.title === paramProject)[0].id + 1

const projectPrevious = { ...projects.filter(p => p.id === indexPrevious)[0] }
const projectNext = { ...projects.filter(p => p.id === indexNext)[0] }


</script>


<template>
    <main>
        <h1><a :href="project.link" target="_blank">{{ project.title }}</a></h1>
        <div id="panelImg" v-if="project.image">
            <NuxtImg v-for="(img, index) in project.image" :src="img" :key="index" :alt="`${project.title}_${index}`" />
        </div>
        <div>
            <h2>Techno:</h2>
            <div class="flex text-center content-center items-center">
                <div class="flex-1">
                    <h3 class="underline">Front-end</h3>
                    <template v-for="stack in project.techno" :key="stack.name">
                        <div v-if="stack.type === 'FRONT'">{{ stack.name }}</div>
                    </template>
                </div>
                <div class="flex-1">
                    <h3 class="underline">Back-end</h3>
                    <template v-for="stack in project.techno" :key="stack.name">
                        <div v-if="stack.type === 'BACK'">{{ stack.name }}</div>
                    </template>
                </div>
            </div>
        </div>

        <div class="mb-8">
            <h2>Description:</h2>
            <div v-html="project.description"></div>
        </div>
        <div v-if="project.github" class="flex flex-col gap-4 my-2">        
            <NuxtLink class="cursor-pointer flex content-center items-center" v-for="git in project.github" :key="git.name" :to="git.link" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16">
                    <path fill="currentColor"
                        d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38c0-.27.01-1.13.01-2.2c0-.75-.25-1.23-.54-1.48c1.78-.2 3.65-.88 3.65-3.95c0-.88-.31-1.59-.82-2.15c.08-.2.36-1.02-.08-2.12c0 0-.67-.22-2.2.82c-.64-.18-1.32-.27-2-.27c-.68 0-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82c-.44 1.1-.16 1.92-.08 2.12c-.51.56-.82 1.28-.82 2.15c0 3.06 1.86 3.75 3.64 3.95c-.23.2-.44.55-.51 1.07c-.46.21-1.61.55-2.33-.66c-.15-.24-.6-.83-1.23-.82c-.67.01-.27.38.01.53c.34.19.73.9.82 1.13c.16.45.68 1.31 2.69.94c0 .67.01 1.3.01 1.49c0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
                    </path>
                </svg>
                <span class="ml-2">{{ git.name }}</span>
        </NuxtLink>
    </div>

        <NuxtLink :to="project.link" id="btn_run" target="_blank" class="flex content-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M16.5 5.5a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m-3.6 13.9l1-4.4l2.1 2v6h2v-7.5l-2.1-2l.6-3A7.298 7.298 0 0 0 22 13v-2c-1.76.03-3.4-.89-4.3-2.4l-1-1.6c-.36-.6-1-1-1.7-1c-.3 0-.5.1-.8.1L9 8.3V13h2V9.6l1.8-.7l-1.6 8.1l-4.9-1l-.4 2l7 1.4M4 9a1 1 0 0 1-1-1a1 1 0 0 1 1-1h3v2H4m1-4a1 1 0 0 1-1-1a1 1 0 0 1 1-1h5v2H5m-2 8a1 1 0 0 1-1-1a1 1 0 0 1 1-1h4v2H3Z">
                </path>
            </svg>
            <span class="ml-1">Run</span>
        </NuxtLink>

        <NavLinkPage :previous="`/project/detail/${projectPrevious.title}`" :text-previous="projectPrevious.title"
            :next="`/project/detail/${projectNext.title}`" :text-next="projectNext.title" />

        <NuxtLink to="/project/list" id="btn_back" class="italic">
            Back to view all projects
        </NuxtLink>
    </main>
</template>

<style scoped lang="sass">
main
    width: 80%
    margin: auto
#btn_back
    display: block
    margin: 15px auto
    width: 50%
    text-align: center
    padding: 10px
#panelImg
    display: flex
    margin: 10px auto
    height: 250px
    img
        width: calc( 100% / v-bind(widthImage))
        transition: all 0.3s ease-in-out
        opacity: 0.9
        &:hover
            opacity: 1
            z-index: 155
            transform: scale(1.2)

#btn_run
    display: block
    width: 30%
    margin: auto
    text-align: center
    padding: 5px
    border: 1px solid white
    border-radius: 5px
    &:hover
        width: 33%
        color: #CBE4DE
        border-color: #2E4F4F
</style>