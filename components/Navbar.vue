<template>
    <div class="items-center flex ">
        <div class="flex gap-3 items-center mr-auto">
            <i class="pi pi-align-justify text-red-700"></i>
            <div class="flex items-center">
                <i class="pi pi-youtube text-red-700 w-[20px]"></i>
                <h1>YouTube<sup>TM</sup></h1>
            </div>


        </div>
        <div class="flex items-center gap-3">
            <input type="text" placeholder="Search" class="border-2 rounded-l-full rounded-r-full py-1 px-6">
            <i class="pi pi-microphone text-red-700 rounded-full bg-gray-200 p-3.5 hover:bg-gray-300"
                title="Search with your voice"></i>
        </div>
        <div class="ml-auto flex items-center">
            <i class="pi pi-video"></i>
            <i class="pi pi-bell"></i>
            <div>
                <div class="relative">
                    <img alt="tania andrew"
                    @click="onClick"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                    class="relative inline-block h-12 w-12 cursor-pointer rounded-full object-cover object-center"
                    data-popover-target="profile-menu" />
                    <ProfileOptions class="absolute right-16 top-4" v-if="toggle"/>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script setup>
    const toggle = ref(false)

    const onClick = () => {
        toggle.value = !toggle.value
    }
</script>

<style lang="scss" scoped></style>