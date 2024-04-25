<script setup>
import { storeInstance } from "../instance/index";
import { ref, onMounted, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import CButton from "../components/ui/Button.vue";
import CoursesSection from "../components/courseSection.vue";
import ProgramsOfCourse from "../components/programsOfCourse.vue";
import CompletedSection from "../components/CompletedSection.vue";
import TeachersSection from "../components/TeachersSection.vue";
import SignUpCourse from "../components/SignUpCourse.vue";
import graduateComponent from "../components/graduateComponent.vue";
import CourseMainSection from "../components/CourseMainSec.vue";
import Skeleton from "../components/ui/Skeleton.vue";
const route = useRoute();
const fetchDatas = ref(null);
const routes = ref(null);
const loading = ref(true);
const courseName = ref("");
const firstWord = ref("");
const secondWord = ref("");
const fetchDataFromApi = async () => {
  routes.value = route.params.slug;
  try {
    const response = await storeInstance.get(`/detail/${route.params.slug}/`);

    fetchDatas.value = response.data;
    console.log(fetchDatas.value.id);
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
};
onBeforeMount(() => {
  fetchDataFromApi();
});
</script>
<template>
  <div>
    <div v-if="fetchDatas && !loading">
      <Transition name="fade" mode="out-in" class="duration-700 transition-all">
        <div class="content">
          <CourseMainSection id="main-about" :slug="routes" />
          <CoursesSection :id="fetchDatas.id" />
          <ProgramsOfCourse :id="fetchDatas.id" />
          <CompletedSection :id="fetchDatas.id" />
          <TeachersSection :slug="routes" />
          <SignUpCourse id="apply" />
          <graduateComponent />
        </div>
      </Transition>
    </div>
    <Skeleton v-if="loading" />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
