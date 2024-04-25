<template>
  <div id="courses" class="conteiner relative z-10 pb-16">
    <div class="title font-bold leading-7 text-primaryBlue text-3xl mb-8">
      {{ $t("titles.courses") }}
    </div>
    <div
      class="grid grid-cols-5 max-[980px]:grid-cols-4 max-[680px]:grid-cols-3 max-[580px]:grid-cols-2 gap-6 max-[760px]:gap-2"
    >
      <div v-for="(item, index) in fetchDatas" :key="index">
        <router-link
          :to="`/detail/${item.slug}`"
          @click="scrollToMainComponent"
          class="relative group transition-all duration-300 rounded-xl border border-solid border-main-grey p-5 max-[580px]:p-2 bg-white flex flex-col justify-center text-center items-center h-[230px] hover:shadow-lg cursor-pointer"
        >
          <div
            class="outline-dashed bg-main-blue/35 outline-offset-4 outline-[2px] outline-blue-3 rounded-full max-[580px]:w-20 max-[580px]:h-20 w-24 h-24 flex justify-center items-center mb-5"
          >
            <img :src="item.icon" alt="" />
          </div>
          <div class="text-blue-2 text-center leading-5 font-semibold text-lg">
            {{ item.title }}
          </div>
          <div
            class="absolute bottom-0 w-[30%] group-hover:w-[80%] h-1 rounded-t-sm bg-yellow-in-light transition-all duration-300"
          ></div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { storeInstance } from "../instance/index.js";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const { t, locale } = useI18n();
const loading = ref(false);
const fetchDatas = ref(null);
const fetchDataFromApi = async () => {
  try {
    loading.value = true;
    const response = await storeInstance.get(`/list/`, {
      headers: {
        "Accept-Language": locale._value,
      },
    });
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
