<template>
  <div class="relative z-10">
    <div
      :class="
        open
          ? 'fixed h-screen w-screen z-25 bg-primaryBlue/80 top-0 left-0'
          : ''
      "
    ></div>
    <MenuBarComponent
      :open="open"
      @value="changeLang"
      @close="closeModal"
      :active="currentLocale"
    />
    <div
      :class="open ? '-z-10' : 'z-30'"
      class="relative max-[820px]:flex items-center hidden conteiner py-8 border-b border-b-main-grey bg-white"
    >
      <span @click="openModal" class="icon-burger"></span>
      <div class="w-full flex items-center justify-center">
        <img
          class="text-center"
          src="../../public/images/iqtidorLogo.svg"
          alt=""
        />
      </div>
    </div>
    <div
      class="max-[820px]:hidden conteiner py-8 flex items-center justify-between border-b border-b-main-grey"
    >
      <div class="nav-left flex items-end gap-8 max-[850px]:gap-2">
        <router-link to="/" class="nav-brend">
          <img src="../../public/images/iqtidorLogo.svg" alt="" />
        </router-link>
        <CButton
          @click="navigateToPageTwo"
          class="group"
          variant="primary"
          :title="t('navbar.courses')"
          ><template #preffix>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              class="svg mr-2 max-[900px]:hidden"
            >
              <path
                opacity="0.4"
                d="M16.0755 2H19.4615C20.8637 2 22 3.14585 22 4.55996V7.97452C22 9.38864 20.8637 10.5345 19.4615 10.5345H16.0755C14.6732 10.5345 13.537 9.38864 13.537 7.97452V4.55996C13.537 3.14585 14.6732 2 16.0755 2Z"
                fill="#23415D"
                class="svg transition-all duration-300"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
                fill="#23415D"
                class="svg transition-all duration-300"
              />
            </svg> </template
        ></CButton>
      </div>
      <div class="nav-right flex items-center gap-6 max-[1080px]:gap-2">
        <router-link
          to="/about-page"
          class="group text-sm font-semibold text-secondaryBlue leading-5 transition-all duration-300 cursor-pointer"
        >
          {{ t("navbar.about") }}
          <div
            class="h-[3px] rounded-lg bg-yellow-in-light w-0 transition-all duration-300 group-hover:w-full mx-auto"
          ></div>
        </router-link>
        <div class="h-6 w-[1px] bg-main-grey"></div>
        <div class="group">
          <a
            href="tel: +998983002200"
            class="flex items-center gap-2 group-hover:cursor-pointer transition-all duration-300"
          >
            <img src="../../public/images/phoneImg.svg" alt="" />
            <span
              class="font-semibold text-secondaryBlue leading-5 text-base max-[1000px]:hidden"
              >+998 98 300 22 00</span
            >
          </a>
          <div
            class="h-[3px] rounded-lg bg-yellow-in-light w-0 transition-all duration-300 group-hover:w-full mx-auto"
          ></div>
        </div>
        <FlagDropDown
          @value="changeLocale"
          styles="max-[1100px]:hidden flex"
          :title="t('language.lang')"
          :options="languages"
        >
          <template #preffix><img :src="t('language.flag')" /></template>
          <template #suffix
            ><span
              class="icon-to-bottom text-grey-2 text-[8px]"
            ></span></template
        ></FlagDropDown>
        <FlagDropDown
          @value="changeLocale"
          styles="min-[1100px]:!hidden"
          :title="t('language.shortLang')"
          :options="languages"
        >
          <template #preffix><img :src="t('language.flag')" /></template>
          <template #suffix
            ><span
              class="icon-to-bottom text-grey-2 text-[8px]"
            ></span></template
        ></FlagDropDown>

        <CButton
          variant="secondary"
          :title="t('navbar.apply')"
          @click="navigateToAplly"
          styles="max-[830px]:!p-2.5"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import CButton from "./ui/Button.vue";
import FlagDropDown from "./ui/FlagDropDown.vue";
import MenuBarComponent from "./ui/MenuBarComponent.vue";

import { useI18n } from "vue-i18n";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

function toggleSHowing() {
  show.value = !show.value;
}
const route = useRoute();
onMounted(() => {
  console.log(route.name);
});
const toggleLanguages = ref(false);
const toggleLoginModal = ref(false);

const currentLocale = ref(localStorage.getItem("locale"));

const changeLocale = (value) => {
  localStorage.setItem("locale", value[0]);
  currentLocale.value = value[0];
  locale.value = value[0];
};

const { t, locale } = useI18n();

// modalka

const openLoginModal = () => {
  toggleLoginModal.value = true;
  document.body.classList.add("overflow-hidden");
};
const languages = [
  {
    flag: "../../public/images/uzbek.svg ",
    lang: "O'zbekcha",
    shortLang: "uz",
  },
  {
    flag: "../../public/images/rus.svg ",
    lang: "Русский",
    shortLang: "ru",
  },
  {
    flag: "../../public/images/english.svg ",
    lang: "English",
    shortLang: "en",
  },
];
const flag = ref("/images/rusFlag.svg");
const lang = ref("Русский");
const shortLung = ref("ru");

const open = ref(false);
function openModal() {
  open.value = true;
  document.getElementById("body").style.overflowY = "hidden";
}
function closeModal(value) {
  open.value = value[0];
  document.getElementById("body").style.overflowY = "scroll";
}
function changeLang(value) {
  open.value = value[0];
  console.log(value[1]);
  localStorage.setItem("locale", value[1]);
  currentLocale.value = value[1];
  locale.value = value[1];
  document.getElementById("body").style.overflowY = "scroll";
}
import VueScrollTo from "vue-scrollto";

const router = useRouter();
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
const scrollToApplyComponent = () => {
  VueScrollTo.scrollTo("#apply", {
    easing: "ease-in-out",
  });
};

const navigateToAplly = async () => {
  if (route.path == "/about-page") {
    console.log(route.path);
    await router.push({ path: "/" });
    scrollToApplyComponent();
  } else {
    scrollToApplyComponent();
  }
};
</script>

<style scoped>
.group:hover .svg {
  fill: white;
}
</style>
