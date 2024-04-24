<template>
  <div class="overflow-hidden">
    <div
      class="conteiner flex items-center justify-between gap-4 py-8 max-[780px]:block"
    >
      <div class="flex gap-3 items-center max-[780px]:mb-5">
        <img
          src="@/images/Instagram.png"
          alt=""
          class="max-[400px]:w-12 max-[400px]:h-12"
        />
        <div>
          <p
            class="text-base max-[400px]:text-sm font-normal leading-tight text-grey-3 mb-2"
          >
            {{ $t("socialSection.instagram") }}
          </p>
          <a
            class="text-3xl max-[400px]:text-2xl font-bold leading-7 text-primaryBlue"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            >@iqtidor_maktabi</a
          >
        </div>
      </div>
      <div class="flex gap-3 items-center">
        <img
          src="@/images/telegram.png"
          alt=""
          class="max-[400px]:w-12 max-[400px]:h-12"
        />
        <div>
          <p
            class="text-base max-[400px]:text-sm font-normal leading-tight text-grey-3 mb-2"
          >
            {{ $t("socialSection.telegram") }}
          </p>
          <a
            class="text-3xl max-[400px]:text-2xl font-bold leading-7 text-primaryBlue"
            href="https://web.telegram.org/k/"
            target="_blank"
            rel="noopener noreferrer"
            >@Iqtidor_academy</a
          >
        </div>
      </div>
    </div>
    <div class="max-w-[1360px] w-full mx-auto overflow-x-hidden">
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          class="rounded-lg relative group hover:cursor-pointer transition-all duration-300 max-w-[200px] max-h-[300px]"
          v-for="(item, index) in fetchDatas"
          :key="index"
          ><a :href="item.url" target="_blank" rel="noopener noreferrer">
            <div
              class="w-full h-full absolute opacity-0 flex group-hover:opacity-100 items-center justify-center bg-black-2/70 rounded-lg transition-all duration-300"
            >
              <img src="@/images/enter.svg" alt="" class="!w-8 !h-8" />
            </div>
            <img :src="item.post" alt="" class="rounded-lg" /></a
        ></swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "../../src/assets/style.css";
import { Pagination } from "swiper/modules";
import { parserInstance } from "../instance/index";
import { ref, onMounted } from "vue";

const components = { Swiper, SwiperSlide };
const modules = [Pagination];
const fetchDatas = ref(null);
const loading = ref(false);
const fetchDataFromApi = async () => {
  try {
    loading.value = true;
    const response = await parserInstance.get(`/list/`);
    fetchDatas.value = response.data.results;
  } catch (error) {
    console.log(error);
  } finally {
  }
};
onMounted(() => {
  fetchDataFromApi();
});
</script>
