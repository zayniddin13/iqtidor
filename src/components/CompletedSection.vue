<template>
  <div v-if="fetchDatas">
    <div class="relative w-full pt-24 pb-20 max-[600px]:py-12 bg-primaryBlue">
      <div
        class="conteiner grid grid-cols-2 gap-16 max-[1050px]:gap-4 max-[900px]:block"
      >
        <div>
          <div class="title">
            <i18n-t
              keypath="titles.complete"
              tag="p"
              class="text-4xl max-[990px]:text-3xl max-[490px]:text-4xl font-bold leading-tight text-white max-[900px]:mb-4"
            >
              <template #complete-add>
                <span href="#" class="text-yellow-in-light">{{
                  $t("titles.complete-add")
                }}</span>
              </template>
            </i18n-t>
          </div>
          <div
            class="text-white text-justify leading-5 text-sm font-light !tracking-[1.26px]"
          >
            {{ fetchDatas.description }}
          </div>
        </div>
        <div
          v-if="fetchDatas.complete_sections"
          class="grid grid-cols-2 gap-16 max-[1050px]:gap-4 max-[900px]:mt-10 max-[600px]:block"
        >
          <div
            v-for="(item, index) in fetchDatas.complete_sections"
            :key="index"
            class="max-[600px]:mb-10 max-[600px]:flex max-[600px]:items-center gap-3"
          >
            <div class="relative z-10 mb-2">
              <img
                src="@/images/yellowCircle.png"
                alt=""
                class="absolute -z-10 bottom-0 left-2 animation-circle max-[440px]:w-[90px] max-[440px]:h-[50px]"
              />
              <p
                class="font-bold leading-[48px] text-6xl max-[440px]:text-4xl text-white"
              >
                0{{ index + 1 }}
              </p>
            </div>
            <div
              class="font-normal leading-6 text-xl max-[490px]:text-base text-white"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
      <img
        src="@/images/decorationCompleteLeftTop.png"
        alt="decoration"
        class="absolute top-0 left-0 max-h-[80%] max-[600px]:hidden"
      />
      <img
        src="@/images/decorationCompleteSecBottomRight.png"
        alt="decoration"
        class="absolute bottom-0 right-0 max-h-[80%] max-[600px]:hidden"
      />
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref, onMounted } from "vue";
import { storeInstance } from "../instance/index.js";
import Skeleton from "./ui/Skeleton.vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const props = defineProps({
  id: String || Number,
});
const fetchDatas = ref(null);
const loading = ref(true);
const fetchDataFromApi = async () => {
  if (props.id) {
    try {
      const response = await storeInstance.get(`/${props.id}/list/complete/`, {
        headers: {
          "Accept-Language": locale._value,
        },
      });
      fetchDatas.value = response.data.results[0];
      console.log(fetchDatas.value);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        loading.value = false;
      }, 500);
    }
  }
};

onMounted(() => {
  fetchDataFromApi();
});
</script>
<style scoped>
.animation-circle {
  display: block;
  animation-name: example;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes example {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
}
</style>
