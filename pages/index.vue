<template>
    <div>
        <Navbar />
        <div class="flex w-full">
            <Sidebar />
            <div >
                <div class="flex gap-3 overflow-x-clip">
                    <div v-for="(label, index) in tags" :key="index" class="flex ">
                    <Chiptag :label="label" class=""/>
                </div>
                </div>
                
                <div class="flex gap-4 flex-wrap w-full h-[90vh] overflow-y-scroll rounded-md p-6">
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </div>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
const tags = ref([
    "Music",
    "Comedy",
    "African",
    "Programming",
    "Afropop",
    "computer science",
    "Reggea",
    "Diamond",
    "Microsoft",
    "Interviews",
    
])



</script>

<style scoped></style>