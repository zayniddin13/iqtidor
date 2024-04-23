<template>
  <div
    :class="props.open ? 'w-[80%] z-20' : 'w-0 opacity-0 -z-10'"
    class="fixed left-0 top-0 h-screen bg-white transition-all duration-300"
  >
    <div class="conteiner">
      <div
        class="barHeader flex items-center justify-between py-6 border-b border-b-main-grey"
      >
        <h2 class="text-primaryBlue text-4xl font-medium leading-tight">
          Menu
        </h2>
        <div
          @click="closeModal"
          class="py-2 px-2 flex items-center justify-center rounded-lg bg-main-grey transition-all duration-300 cursor-pointer"
        >
          <span class="icon-close text-2xl"></span>
        </div>
      </div>
      <div class="manuBody">
        <ul>
          <li
            @click="navigateToPageTwo"
            class="flex gap-2 items-center my-8 cursor-pointer"
          >
            <img src="../../../public/images/kurslar.svg" alt="kurslar" />
            <span class="text-2xl text-primaryBlue font-medium leading-snug">{{
              $t("navbar.courses")
            }}</span>
          </li>
          <router-link to="/about-page">
            <li @click="closeModal" class="flex gap-2 items-center my-8">
              <img src="../../../public/images/kurslar.svg" alt="kurslar" />
              <span
                class="text-2xl text-primaryBlue font-medium leading-snug"
                >{{ $t("navbar.about") }}</span
              >
            </li></router-link
          >
        </ul>
      </div>
      <div class="footer flex gap-4 absolute bottom-0">
        <div v-for="(item, index) in langs" :key="index">
          <div
            @click="changeLang(item.id)"
            :class="props.active == item.id ? 'bg-main-grey' : ''"
            class="py-2 px-2 flex items-center justify-center rounded-lg transition-all duration-300 cursor-pointer"
          >
            <span class="text-xl font-thin">{{ item.lang }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref, defineEmits } from "vue";
const props = defineProps<{
  open?: boolean;
  active?: string;
}>();
const langs = [
  { lang: "O'zb", id: "uz" },
  { lang: "Рус", id: "ru" },
  { lang: "Eng", id: "en" },
];
const emit = defineEmits(["value", "close"]);
function changeLang(value) {
  emit("value", [false, value]);
}

function closeModal(a) {
  emit("close", [false]);
}
import VueScrollTo from "vue-scrollto";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const scrollToInnerComponent = () => {
  VueScrollTo.scrollTo("#courses", {
    easing: "ease-in-out",
  });
};
async function navigateToPageTwo() {
  emit("close", [false]);
  if (route.path == "/") {
    scrollToInnerComponent();
  } else if (route.path == "/about-page") {
    scrollToInnerComponent();
  } else {
    await router.push({ path: "/" });
    scrollToInnerComponent();
  }
}
</script>
