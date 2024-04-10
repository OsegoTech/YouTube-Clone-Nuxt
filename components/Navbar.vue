<template>
    <div class="items-center flex ">
        <div class="flex gap-3 items-center mr-auto">
            <LucideAlignJustify :size="36" />
            <div class="flex items-center">
                <LucideYoutube color="red" size="36" />
                <h1>YouTube<sup>TM</sup></h1>
            </div>


        </div>
        <div class="flex items-center gap-3">
            <input type="text" placeholder="Search" class="border-2 rounded-l-full rounded-r-full py-1 px-6">
            <i class="pi pi-microphone text-red-700 rounded-full bg-gray-200 p-3.5 hover:bg-gray-300"
                title="Search with your voice"></i>
        </div>
        <div class="ml-auto flex items-center gap-2 justify-evenly w-[200px]">
            <LucideVideo class="w-7 h-7" />
            <LucideBell class="w-7 h-7" />
            <div>
                <div class="relative">
                    <img alt="tania andrew" @click="toggleProfileOptions"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        class="relative inline-block h-10 w-10 cursor-pointer rounded-full object-cover object-center"
                        data-popover-target="profile-menu" />
                    <ProfileOptions class="absolute right-16 top-4" v-if="showProfileOptions" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const showProfileOptions = ref(false)
console.log(showProfileOptions.value);

const toggleProfileOptions = () => {
    showProfileOptions.value = !showProfileOptions.value
}


</script>

<style lang="scss" scoped></style>