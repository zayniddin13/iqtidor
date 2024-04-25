<template>
  <div>
    <div
      v-if="fetchDatas"
      class="mainSection conteiner flex gap-20 max-[1060px]:gap-10 justify-between my-16"
    >
      <img
        class="w-[500px] h-[420px] max-[950px]:w-[400px] max-[950px]:h-[320px] max-[850px]:hidden block toRight"
        :src="fetchDatas.image"
        alt=""
      />
      <div class="toLeft max-w-[600px]">
        <div
          class="title text-yellow-in-light text-7xl max-[1000px]:text-6xl max-[700px]:text-4xl max-[430px]:text-3xl font-bold leading-tight mb-6"
        >
          <span class="text-primaryBlue">{{ firstWord }}</span>
          {{ secondWord }}
        </div>
        <img
          class="w-[500px] h-[420px] max-[850px]:w-full max-[850px]:h-full max-[850px]:max-w-[500px] max-[850px]:max-h-[420px] max-[850px]:block hidden object-contain"
          :src="fetchDatas.image"
          alt=""
        />
        <div
          class="text-xl font-normal leading-tight text-justify text-grey-3 mb-6"
        >
          {{ fetchDatas.description }}
        </div>
        <CButton variant="secondary" :title="$t('button.apply')" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, defineProps } from "vue";
import { storeInstance } from "../instance/index.js";
const props = defineProps({
  slug: String,
});
const fetchDatas = ref(null);
const loading = ref(true);
const courseName = ref("");
const firstWord = ref("");
const secondWord = ref("");
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const fetchDataFromApi = async () => {
  console.log(props.slug);
  if (props.slug) {
    try {
      const response = await storeInstance.get(`/detail/${props.slug}`, {
        headers: {
          "Accept-Language": locale._value,
        },
      });
      fetchDatas.value = response.data;
      courseName.value = fetchDatas.value.title.split(" ");
      firstWord.value = courseName.value[0];
      secondWord.value = courseName.value.slice(1).join(" ");
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
