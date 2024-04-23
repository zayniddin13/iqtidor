<template>
  <div class="conteiner mt-16">
    <div class="title mb-8 font-bold leading-5 text-primaryBlue text-2xl">
      {{ $t("titles.coursePrograms") }}
    </div>
    <div
      v-for="(item, index) in fetchDatas"
      :key="index"
      class="w-full py-7 px-5 max-[700px]:p-2 bg-white rounded-xl mb-4"
      @click="openParagh(item.title)"
    >
      <div
        :class="
          item.program_sections.length !== 0
            ? 'group hover:cursor-pointer transition-all duration-300'
            : ''
        "
        class="flex justify-between items-center"
      >
        <div class="flex items-center gap-11 max-[600px]:gap-3">
          <span
            :class="{
              'text-yellow-in-light':
                openIndex == item.title && item.program_sections.length !== 0,
            }"
            class="font-bold text-blue-2 text-5xl leading-normal transition-all duration-300 group-hover:text-yellow-in-light max-[600px]:text-3xl max-[450px]:text-xl"
            >{{ index + 1 }}</span
          >
          <div class="h-11 max-[600px]:h-7 w-[2px] bg-blue-2/20"></div>
          <p
            :class="{
              'text-yellow-in-light':
                openIndex == item.title && item.program_sections.length !== 0,
            }"
            class="text-primaryBlue font-semiBold font-normal text-2xl transition-all duration-300 group-hover:text-yellow-in-light max-[600px]:text-lg max-[450px]:text-base"
          >
            {{ item.title }}
          </p>
        </div>
        <div
          v-if="item.program_sections.length !== 0"
          :class="{ 'bg-yellow-in-light/80': openIndex == item.title }"
          class="rounded-md bg-grey-7 p-5 max-[700px]:p-3 transition-all duration-300 group-hover:bg-yellow-in-light/80"
        >
          <span
            class="icon-to-bottom font-thin text-blue-5 relative block transition-all duration-300 max-[600px]:text-[8px]"
            :class="openIndex == item.title ? 'rotate-180' : ''"
          ></span>
        </div>
      </div>
      <div v-if="item.program_sections.length !== 0">
        <div
          :class="
            openIndex == item.title
              ? 'opacity-100 h-auto p-7'
              : 'opacity-0 h-0 p-0'
          "
          class="rounded-xl border border-main-grey bg-[#FCFDFF] transition-all duration-300"
        >
          <ul>
            <li
              v-for="(el, index) in item.program_sections"
              :key="index"
              class="flex items-center gap-2 mb-2"
              :class="openIndex == item.title ? 'block' : 'hidden'"
            >
              <img src="@/images/circle.svg" alt="" />
              <span
                class="font-normal leading-normal text-blue-2 rounded-3xl"
                >{{ el.title }}</span
              >
            </li>
          </ul>
        </div>
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
const openIndex = ref("");
function openParagh(index) {
  if (openIndex.value !== index) {
    openIndex.value = index;
  } else {
    openIndex.value = "";
  }
}
const fetchDatas = ref(null);
const ID = ref(null);
const loading = ref(false);
const fetchDataFromApi = async () => {
  if (props.id) {
    try {
      loading.value = true;
      const response = await storeInstance.get(`/${props.id}/list/program/`, {
        headers: {
          "Accept-Language": locale._value,
        },
      });
      fetchDatas.value = response.data.results;
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
