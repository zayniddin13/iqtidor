<template>
  <div class="relative pt-16 pb-24 w-full bg-primaryBlue mt-12">
    <div
      class="px-12 conteiner flex gap-10 relative z-10 max-[940px]:flex-wrap"
    >
      <div>
        <img src="@/images/footerLogo.svg" alt="" class="mb-8" />
        <p class="text-base font-normal leading-6 text-white mb-9">
          Iqtidor IT Academy © “IQ NTM” 2023 | {{ $t("footer.prevented") }}
        </p>
        <div class="flex gap-4 items-center">
          <a
            v-for="(item, index) in fetchDatas"
            :key="index"
            class="max-w-7 max-h-7 tooltip"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="item.icon"
              :alt="item.title"
              style="fill: yellow !imoprtant"
              class="fill-white hover:fill-yellow-in-light text-white text-xs transition-all duration-300"
              :class="!item.icon ? 'hidden' : ''"
            />
            <span class="tooltiptext">{{ item.title }}</span></a
          >
        </div>
      </div>
      <div>
        <div
          class="flex gap-7 items-center text-white text-base font-bold leading-6 mb-8"
        >
          <p
            @click="navigateToAplly"
            class="transition-all duration-300 hover:text-yellow-in-light cursor-pointer"
          >
            {{ $t("footer.aboutAcademy") }}
          </p>
          <p
            @click="navigateToPageTwo"
            class="transition-all duration-300 hover:text-yellow-in-light cursor-pointer"
          >
            {{ $t("footer.courses") }}
          </p>
        </div>
        <p class="text-lg leading-5 font-normal text-grey-5">
          {{ $t("footer.aboutUs") }}
        </p>
      </div>
      <div>
        <div v-for="(item, index) in getDatas" :key="index">
          <a
            :href="item.url"
            target="_blank"
            class="flex items-center gap-2 group mb-7 relative transition-all duration-300"
          >
            <img :src="item.icon" alt="location" />
            <span
              class="text-lg max-[380px]:text-base leading-5 font-medium text-white whitespace-nowrap max-[480px]:whitespace-break-spaces relative"
            >
              {{ item.title }}
              <div
                class="absolute bottom-0 left-0 w-0 transition-all duration-300 group-hover:w-full h-[1px] bg-white"
              ></div>
            </span>
          </a>
        </div>
        <div class="flex gap-3 items-center mt-10">
          <p class="text-lg font-normal leading-6 text-white whitespace-nowrap">
            {{ $t("footer.developedBy") }}
          </p>
          <a href="https://uic.group/" target="_blank" rel="noopener noreferrer"
            ><uicLogo
          /></a>
        </div>
      </div>
    </div>
    <img
      src="@/images/footerDecoration1.png"
      class="absolute left-0 bottom-0 -z-0"
      alt=""
    />
    <img
      src="@/images/footerDecoration2.png"
      class="absolute top-0 right-0 -z-0"
      alt=""
    />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { homeInstance } from ".././instance/index.js";
import uicLogo from "../../src/components/ui/uicLogo.vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const fetchDatas = ref(null);
const getDatas = ref(null);
const loading = ref(false);
const fetchDataFromApi = async () => {
  try {
    loading.value = true;
    const response = await homeInstance.get(`/social/media/list/`);
    const response2 = await homeInstance.get("/information/list/");
    console.log(response2.data);
    getDatas.value = response2.data;
    fetchDatas.value = response.data.results;
  } catch (error) {
    console.log(error);
  } finally {
  }
};
onMounted(() => {
  fetchDataFromApi();
});
import VueScrollTo from "vue-scrollto";

const router = useRouter();
const scrollToApplyComponent = () => {
  VueScrollTo.scrollTo("#main-about", {
    easing: "ease-in-out",
  });
};

const navigateToAplly = async () => {
  if (route.path !== "/about-page") {
    console.log(route.path);
    await router.push({ path: "/about-page" });
    scrollToApplyComponent();
  } else {
    scrollToApplyComponent();
  }
};
const scrollToInnerComponent = () => {
  VueScrollTo.scrollTo("#courses", {
    easing: "ease-in-out",
  });
};

const navigateToPageTwo = async () => {
  if (route.path == "/") {
    scrollToInnerComponent();
  } else if (route.path == "/about-page") {
    scrollToInnerComponent();
  } else {
    await router.push({ path: "/" });
    scrollToInnerComponent();
  }
};
</script>
<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  padding: 4px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 120%;
  left: 50%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
