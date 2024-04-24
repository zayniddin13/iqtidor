<template>
  <div
    v-if="fetchDatas"
    class="conteiner max-[510px]:mt-40 max-[400px]:mt-60 toRight"
  >
    <div class="title font-bold leading-7 text-2xl text-primaryBlue mb-8">
      {{ $t("titles.whatAwaitsyou") }}
    </div>
    <div class="grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
      <div
        v-for="(item, index) in fetchDatas"
        :key="index"
        class="rounded-xl bg-white w-full p-5 flex items-center"
      >
        <img :src="item.icon" alt="" />
        <p class="font-bold leading-7 text-blue-2 text-xl max-[430px]:text-lg">
          {{ item.title }}
        </p>
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
  id: String || Number,
});
const fetchDatas = ref(null);
const ID = ref(null);
const loading = ref(false);
const fetchDataFromApi = async () => {
  if (props.id) {
    console.log(props.id);
    try {
      loading.value = true;
      const response = await storeInstance.get(`/${props.id}/list/section/`, {
        headers: {
          "Accept-Language": locale._value,
        },
      });
      fetchDatas.value = response.data.results;
      console.log(fetchDatas.value);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
};

onMounted(() => {
  fetchDataFromApi();
});
</script>
