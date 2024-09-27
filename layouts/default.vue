<script setup>
import ZaloIcon from "~/components/icons/ZaloIcon.vue";

const meta = await queryContent('/meta').findOne()
const {header, footer, site} = meta
const {banner} = header


async function toZalo() {
  await navigateTo(`https://zalo.me/${site.zalo}`, {
    external: true
  })
}
</script>

<template>
  <div class="tracking-wider relative">
    <div class="fixed bottom-4 right-4 z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer" @click="toZalo">
      <ZaloIcon width="70px" height="70px"/>
    </div>
    <header>
      <div
          class="flex flex-col sm:flex-row justify-between items-center xl:px-64 px-3 py-3 h-auto gap-3 sm:gap-0 bg-sky-800 text-white text-xs sm:text-sm font-semibold">
        <NuxtLink to="/">
          <span>{{ header?.topLeftContent }}</span>
        </NuxtLink>
        <div class="flex items-center gap-2">
          <Icon name="heroicons:phone-solid"/>
          <span>{{ header?.topRightContent }}</span>
        </div>
      </div>
      <div class="flex flex-col items-center sm:flex-row gap-6 sm:gap-0 justify-between sm:py-10 py-5 xl:px-72 px-3">
        <span class="text-2xl font-bold text-sky-900">{{ site?.namePage }}</span>
        <div class="flex gap-6">
          <div v-for="item in site.menu" class="flex items-center gap-1 cursor-pointer">
            <Icon :name="item.icon" class="bg-sky-700" size="20"/>
            <NuxtLink :to="item.to">
              <span class="text-sky-900 hover:text-gray-500 font-semibold">{{ item.name }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="md:h-[20rem] lg:h-[30rem] xl:h-[40rem] h-[15rem] overflow-hidden flex items-center justify-center relative">
        <div class="absolute flex flex-col items-center xl:gap-6 gap-3">
          <span v-for="item in banner.content" class="text-white xl:text-5xl md:text-2xl lg:text-3xl text-lg font-semibold">{{item}}</span>
        </div>
        <NuxtImg :src="banner?.image" class="w-full"/>
      </div>
    </header>
    <main class="px-3 py-10">
      <slot/>
    </main>
    <div class="flex justify-center py-5 bg-zinc-700">
      <span class="text-white text-md">{{footer.main}}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>