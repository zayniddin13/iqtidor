<template>
  <div v-if="fetchDatas">
    <div class="bg-primaryBlue py-16 relative">
      <img
        src="../../public/images/GroupLeft.png"
        alt=""
        class="absolute top-0 left-0"
      />
      <img
        src="../../public/images/GroupRight.png"
        alt=""
        class="absolute bottom-10 right-0"
      />
      <div>
        <div class="title font-bold leading-7 text-3xl text-white mb-8">
          {{ $t("mentors.title") }}
        </div>
        <Vue3Marquee :width="100" :pause-on-hover="true" duration="60">
          <div
            v-for="(item, index) in fetchDatas"
            :key="index"
            class="h-[246px] w-[195px] rounded-xl relative group transition-all duration-300 marquee-item ml-7"
          >
            <div
              class="h-full w-full absolute top-0 left-0 bg-grey-4/50 rounded-xl transition-all duration-300 group-hover:opacity-0"
            ></div>
            <img
              :src="item.image"
              alt="imgesd"
              class="w-[300px] h-full object-cover rounded-xl"
            />
            <div
              class="transition-all duration-300 absolute bottom-0 z-10 left-5 opacity-0 group-hover:opacity-100 group-hover:bottom-5"
            >
              <p
                class="text-yellow-in-light text-sm max-[450px]:text-xs font-normal"
              >
                {{ item.position.title }}
              </p>
              <h2
                class="text-lg max-[450px]:text-base font-bold text-white max-[450px]:leading-4 leading-5"
              >
                {{ item.full_name }}
              </h2>
            </div>
          </div>
        </Vue3Marquee>
        <Vue3Marquee
          :width="100"
          :pause-on-hover="true"
          duration="60"
          direction="reverse"
          class="mt-8"
        >
          <div
            v-for="(item, index) in fetchDatas"
            :key="index"
            class="h-[246px] w-[195px] rounded-xl relative group transition-all duration-300 marquee-item ml-7"
          >
            <div
              class="h-full w-full absolute top-0 left-0 bg-grey-4/50 rounded-xl transition-all duration-300 group-hover:opacity-0"
            ></div>
            <img
              :src="item.image"
              alt="imgesd"
              class="w-[300px] h-full object-cover rounded-xl"
            />
            <div
              class="transition-all duration-300 absolute bottom-0 z-10 left-5 opacity-0 group-hover:opacity-100 group-hover:bottom-5"
            >
              <p
                class="text-yellow-in-light text-sm max-[450px]:text-xs font-normal"
              >
                {{ item.position.title }}
              </p>
              <h2
                class="text-lg max-[450px]:text-base font-bold text-white max-[450px]:leading-4 leading-5"
              >
                {{ item.full_name }}
              </h2>
            </div>
          </div>
        </Vue3Marquee>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, reactive } from "vue";
import { mentorInstance } from "../instance/index.js";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const loading = ref(false);
const fetchDatas = ref(null);
const fetchDataFromApi = async () => {
  console.log(locale.value);
  try {
    loading.value = true;
    const response = await mentorInstance.get(`/list/`, {
      headers: {
        "Accept-Language": locale._value,
      },
    });

    console.log(response.data.results);
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
