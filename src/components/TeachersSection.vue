<template>
  <div v-if="fetchDatas" class="conteiner mt-16">
    <div class="title mb-8 text-3xl font-bold leading-7 text-primaryBlue">
      {{ $t("titles.teachers") }}
    </div>
    <div
      v-for="(item, index) in fetchDatas"
      :key="index"
      class="w-full p-7 max-[420px]:p-3 rounded-xl bg-white shadow-xl"
    >
      <div
        class="flex justify-between items-center pb-5 max-[420px]:pb-3 border-b border-b-main-grey"
      >
        <div class="flex items-center gap-4 max-[420px]:gap-2">
          <div
            class="w-16 h-16 max-[500px]:w-10 max-[500px]:h-10 rounded-lg border border-main-grey"
          >
            <img
              :src="item.image"
              alt="teacher"
              class="w-16 h-16 rounded-lg max-[500px]:w-10 max-[500px]:h-10 object-cover"
            />
          </div>
          <div>
            <h2 class="font-bold text-blue-2 text-xl max-[420px]:text-lg">
              {{ item.full_name }}
            </h2>
            <p class="font-normal text-grey-2 text-sm">
              {{ item.position.title }}
            </p>
          </div>
        </div>
        <img
          src="@/images/teachersSecDecImg.svg"
          alt="dfed"
          class="max-[500px]:w-10 max-[500px]:h-10"
        />
      </div>
      <div
        v-if="item.description"
        class="pt-5 max-[420px]:pt-3 text-justify text-base leading-normal text-blue-2 !tracking-[0.5px] font-light"
      >
        {{ item.description }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref, onMounted } from "vue";
import { storeInstance } from "../instance/index.js";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const props = defineProps({
  slug: String || Number,
});
const fetchDatas = ref(null);
const loading = ref(true);
const fetchDataFromApi = async () => {
  console.log(props.slug);
  if (props.slug) {
    try {
      const response = await storeInstance.get(`/detail/${props.slug}`, {
        headers: {
          "Accept-Language": locale._value,
        },
      });
      fetchDatas.value = response.data.mentor;
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
