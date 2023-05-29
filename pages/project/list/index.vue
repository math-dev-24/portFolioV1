<script setup lang="ts">
import { projects } from '~/shared/data/projects';

useHead({
    title: "Projects | BUSSE Mathieu",
    meta: [
        {
            name: "description",
            content: "List of projects carried out in web dev"
        }
    ]
})

const nbrMax = ref<number>(3)
const maxProject = ref<number>(projects.length)

</script>

<template>
    <section>
        <h1 class="text-2xl font-bold">List of projects</h1>
        <div class="separator"></div>
        <div class="flex">

            <div class="card">
                <div class="tools">
                    <div class="circle">
                        <span class="red box"></span>
                    </div>
                    <div class="circle">
                        <span class="yellow box"></span>
                    </div>
                    <div class="circle">
                        <span class="green box"></span>
                    </div>
                </div>
                <div class="card__content">
                    <span class="ccolor1">const</span> <span class="ccolor4">projectList</span> : <span
                        class="ccolor6">ProjectInterface[]</span> = <span class="ccolor5"> {</span>
                    <br>
                    <template v-for="(project, index) in projects.sort((a, b) => a.id - b.id)" :key="index">
                        <CardProject v-if="index < nbrMax" :project="project" :index="index" />
                    </template>
                    <span class="ccolor5">}</span>
                </div>
                <span class="clic">_</span>
            </div>
        </div>
        <div v-if="nbrMax < maxProject" @click="() => { nbrMax = nbrMax + 2 }"
            class="block w-1/3 m-auto border my-6 text-center cursor-pointer hover:text-white">load More...</div>

        <NavLinkPage previous="/" text-previous="About" next="/certificates" text-next="Certificates" />
    </section>
</template>

<style scoped lang="css">
section {
    width: 80%;
    margin: auto;
}

.card {
    margin: 0 auto;
    padding: 10px;
    width: 95%;
    min-height: 350px;
    background-color: #1a1f1f;
    border-radius: 8px;
    z-index: 1;
}

.tools {
    display: flex;
    align-items: center;
    padding: 9px;
}

.circle {
    padding: 0 4px;
}

.box {
    display: inline-block;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 1px;
    border-radius: 50%;
}

.red {
    background-color: #ff605c;
}

.yellow {
    background-color: #ffbd44;
}

.green {
    background-color: #00ca4e;
}
</style>