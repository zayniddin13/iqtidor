<template>
  <div class="!px-16 mt-16 relative">
    <div class="title mb-11 font-bold leading-5 text-primaryBlue text-3xl">
      {{ $t("titles.partners") }}
    </div>
    <div class="overflow-hidden">
      <div class="swipers relative">
        <div class="swiper-wrapper items-center gap-4 relative">
          <div
            class="swiper-slide group transition-all duration-300 hover:scale-105 cursor-pointer gap-3 rounded-2xl !bg-transparent !w-[250px] h-full"
            v-for="(item, index) in fetchDatas"
            :key="index"
          >
            <a :href="item.url" target="_blank">
              <img
                :src="item.logo"
                alt=""
                class="!w-full h-full object-contain"
            /></a>
          </div>
        </div>
      </div>
      <swiper-button-next
        class="swiper-button-next-custom absolute rounded-full -rotate-180 !top-[70%] -translate-y-1/2 z-50 !right-2 max-[1100px]:!right-16 max-[800px]:!right-14 max-[650px]:hidden max-[1100px]:!translate-x-full border-2 border-primaryBlue py-4 px-3 flex items-center justify-center transition-all duration-300 hover:border-yellow-in-light hover:bg-yellow-in-light/20 cursor-pointer group min-[970px]:hidden"
      >
        <span
          class="icon-left text-primaryBlue group-hover:text-yellow-in-light"
        ></span>
      </swiper-button-next>
      <swiper-button-prev
        class="swiper-button-prev-custom absolute rounded-full top-[70%] -translate-y-1/2 z-50 !left-2 max-[1100px]:!left-16 max-[800px]:!left-14 max-[650px]:hidden max-[1100px]:!-translate-x-full border-2 border-primaryBlue hover:border-yellow-in-light py-4 px-3 flex items-center justify-center transition-all duration-300 hover:bg-yellow-in-light/20 cursor-pointer group min-[970px]:hidden"
        ><span
          class="icon-left text-primaryBlue group-hover:text-yellow-in-light"
        ></span
      ></swiper-button-prev>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { homeInstance } from ".././instance/index";
import Swiper from "swiper/bundle";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const fetchDatas = ref(null);
const loading = ref(false);
const fetchDataFromApi = async () => {
  try {
    loading.value = true;
    const response = await homeInstance.get(`/company/list/`, {
      headers: {
        "Accept-Language": locale._value,
      },
    });
    console.log(response.data.results);
    fetchDatas.value = response.data.results;
  } catch (error) {
    console.log(error);
  } finally {
  }
};
onMounted(() => {
  fetchDataFromApi();
  const swiper = new Swiper(".swipers", {
    slidesPerView: 3,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
      },
      // 768 pikseldan katta o'lchamda
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // 1024 pikseldan katta o'lchamda
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});
</script>
