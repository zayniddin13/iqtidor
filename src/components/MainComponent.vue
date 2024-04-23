<template>
  <div class="relative">
    <div class="conteiner">
      <div class="pl-24 max-[1023px]:pl-0 relative max-[1080px]:pl-0 pb-5">
        <div class="relative mb-12">
          <i18n-t
            keypath="mainCopmponent.agree_with"
            tag="p"
            class="text-7xl max-[990px]:text-5xl max-[490px]:text-4xl font-bold leading-tight text-primaryBlue mt-24 max-[590px]:mt-8"
          >
            <template #agree_with_title>
              <a href="#" class="text-main-blue font-bold">{{
                $t("mainCopmponent.agree_with_title")
              }}</a>
            </template>
          </i18n-t>
          <img
            class="absolute top-12 left-[670px] max-[1023px]:left-[620px] max-[990px]:left-[400px] max-[990px]:top-6 max-[710px]:hidden"
            src="../../public/images/mainLineRight.svg
      "
            alt=""
          />
          <div class="flex">
            <img
              class="mt-20 max-[990px]:w-[300px] max-[620px]:w-[150px] max-[420px]:w-[100px] max-[490px]:mt-14 max-[390px]:hidden"
              src="../../public/images/mainLineLeft.svg
      "
              alt=""
            />
            <h1
              class="text-7xl max-[990px]:text-5xl max-[490px]:text-4xl font-bold leading-tight text-primaryBlue mt-8 -ml-14 max-[1023px]:-ml-24 max-[990px]:-ml-16 max-[990px]:mt-14 max-[590px]:-ml-8 max-[490px]:mt-8 max-[390px]:ml-0"
            >
              {{ $t("mainCopmponent.this") }}
              <span
                class="rounded-xl py-2.5 px-4 bg-main-blue font-bold text-white"
                >IQTIDOR</span
              >
            </h1>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="w-full">
            <p class="text-lg font-medium leading-snug text-primaryBlue">
              {{ $t("mainCopmponent.aboutYourself") }}
            </p>
            <div class="max-[460px]:block text-center flex gap-4 mt-5">
              <div class="max-[460px]:mb-6">
                <CButton
                  @click="scrollToApplyComponent"
                  variant="secondary"
                  :title="$t('navbar.apply')"
                />
              </div>
              <router-link to="/checking-certificate">
                <CButton
                  variant="bgWhiteTestWhite"
                  :title="$t('mainCopmponent.checking')"
                />
              </router-link>
            </div>
          </div>
          <div>
            <img
              class="w-full animation max-[710px]:hidden"
              src="../../public/images/raketaImg.png"
              alt="raketa"
            />
          </div>
        </div>
      </div>
      <div
        class="w-[150px] h-[150px] bg-main-blue/90 absolute top-[200px] left-0 -z-20"
        style="filter: blur(200px)"
      ></div>
      <div
        class="w-[150px] h-[150px] bg-main-blue/90 absolute top-0 right-40 -z-20"
        style="filter: blur(200px)"
      ></div>
      <div
        class="w-[150px] h-[150px] bg-main-blue/90 absolute bottom-0 right-0 -z-20"
        style="filter: blur(200px)"
      ></div>
    </div>
  </div>
</template>
<script setup>
import CButton from "./ui/Button.vue";
import { useI18n } from "vue-i18n";
import VueScrollTo from "vue-scrollto";
const scrollToApplyComponent = () => {
  VueScrollTo.scrollTo("#apply", {
    easing: "ease-in-out",
  });
};
</script>
<style scoped>
.animation {
  animation-name: scale;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes scale {
  from {
    scale: 100%;
  }
  to {
    scale: 90%;
  }
}
</style>
