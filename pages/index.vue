<script setup>

const meta = await queryContent('/meta').findOne()
const indexData = await queryContent('/').findOne()

const {site} = meta
const {first, second} = indexData

useServerSeoMeta({
  ogImage: () => site.avatarPage
})

</script>

<template>
  <div class="flex flex-col items-center gap-12">
    <div class="flex flex-col md:flex-row justify-between gap-4 lg:w-3/4 w-full" >
      <span class="px-5 py-10 bg-cyan-700 text-lg text-white font-semibold lg:w-64 w-full flex items-center justify-center text-center" v-for="item in first">{{item}}</span>
    </div>
    <div class="md:py-0 lg:w-3/4 w-full h-auto" v-for="item in second">
      <div class="flex justify-center items-center relative border-t border-b md:border-none border-gray-300 py-6 mb-5">
        <div class="absolute bg-white font-bold text-zinc-500 px-3">{{item?.title}}</div>
        <div class="flex-grow border-t border-gray-300 hidden md:block"></div>
      </div>
      <div class="flex flex-col lg:items-center gap-6 text-lg">
        <span v-for="content in item.content">{{content}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>