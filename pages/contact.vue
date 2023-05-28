<script setup lang='ts'>
import { z } from "zod"
import { toTypedSchema } from '@vee-validate/zod';

useHead({
    title: "Contact | BUSSE Mathieu",
    meta: [
        {
            name: "description",
            content: "Contact me"
        }
    ]
})

const schema = toTypedSchema(z.object({
    name: z.string().min(3),
    email: z.string().nonempty('Required email').email(),
    message: z.string().nonempty('Required content').min(3)
}))


const onSubmit = (values: any) => {
    console.log(values)
    const router = useRouter()
    router.push('/')
}


</script>

<template>
    <main>
        <h1 class="text-center">Contact</h1>
        <div class="separator"></div>
        <section>
            <VeeForm class="container m-auto my-14 flex flex-col gap-4" @submit="onSubmit" :validation-schema="schema"
                v-slot="{ errors }">
                <div class="flex flex-col">
                    <label>Nom :</label>
                    <VeeField name="name" rules="name" :class="{ inputAlert: errors.name }" />
                </div>
                <div class="flex flex-col">
                    <label>Email :</label>
                    <VeeField type="email" name="email" rules="email" :class="{ inputAlert: errors.email }" />
                </div>
                <div class="flex flex-col">
                    <label for="message">Message :</label>
                    <VeeField type="textarea" name="message" id="message" rules="message"
                        :class="{ inputAlert: errors.message }" />
                </div>
                <button type="submit" class="flex content-center items-center" id="btnSend">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                        <path fill="currentColor"
                            d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26l.001.002l4.995 3.178l3.178 4.995l.002.002l.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215l7.494-7.494l1.178-.471l-.47 1.178Z">
                        </path>
                    </svg>
                    <span class="ml-2">Send !</span>
                </button>
            </VeeForm>
            <NuxtLink to="/" id="btnBackHome">Go back to the homepage</NuxtLink>
        </section>
    </main>
</template>
<style scoped lang="sass">
section
    width: 80%
    margin: auto
.inputAlert
    border-color: red
form
    color: white
#btnSend
    border: 1px solid white
    background: rgb(255,255,255,0.07)
    padding: 15px 8px
    color: white
    border-radius: 5px
    font-size: 1.1em
    cursor: pointer
    transition: all .6s in-out
    &:hover
        border-color: #2e4f4f

#btnBackHome
    border: 1px solid white
    padding: 8px 15px
    background: rgb(255,255,255,0.07)
    width: 100px
    border-radius: 4px
    cursor: pointer
    margin: auto
    transition: all .6s in-out
    &:hover
        color: #CBE4DE
        border-color: #2E4F4F
input
    background: #2E4F4F
    padding: 8px 10px
    border-radius: 5px
    border: 1px solid transparent
    outline: none
    color: white
    &:valid
        background: #2E4F4F

</style>
