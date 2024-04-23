<template>
  <div v-if="fetchDatas">
    <Transition>
      <div>
        <CourseMainSection :slug="routes" />
        <CoursesSection :id="fetchDatas.id" />
        <ProgramsOfCourse :id="fetchDatas.id" />
        <CompletedSection :id="fetchDatas.id" />
        <TeachersSection :slug="routes" />
        <SignUpCourse id="apply" />
        <graduateComponent />
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { storeInstance } from "../instance/index";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import CButton from "../components/ui/Button.vue";
import CoursesSection from "../components/courseSection.vue";
import ProgramsOfCourse from "../components/programsOfCourse.vue";
import CompletedSection from "../components/CompletedSection.vue";
import TeachersSection from "../components/TeachersSection.vue";
import SignUpCourse from "../components/SignUpCourse.vue";
import graduateComponent from "../components/graduateComponent.vue";
import CourseMainSection from "../components/CourseMainSec.vue";
const route = useRoute();
const fetchDatas = ref(null);
const routes = ref(null);
const loading = ref(false);
const courseName = ref("");
const firstWord = ref("");
const secondWord = ref("");
const fetchDataFromApi = async () => {
  routes.value = route.params.slug;
  try {
    loading.value = true;
    const response = await storeInstance.get(`/detail/${route.params.slug}/`);

    fetchDatas.value = response.data;
    console.log(fetchDatas.value.id);
    courseName.value = fetchDatas.value.title.split(" ");
    firstWord.value = courseName.value[0];
    secondWord.value = courseName.value.slice(1).join(" ");
  } catch (error) {
    console.log(error);
  } finally {
  }
};
onMounted(() => {
  fetchDataFromApi();
});
</script>
