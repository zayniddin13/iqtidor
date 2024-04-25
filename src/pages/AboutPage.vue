<template>
  <Transition name="fade" mode="out-in">
    <div class="content">
      <MainAbout id="main-about" />
      <CoursesSection id="courses" />
      <MentorsSection />
      <graduateComponent />
    </div>
  </Transition>
</template>
<script setup>
import MainAbout from "../components/MainAbout.vue";
import CoursesSection from "../components/CoursesSection.vue";
import MentorsSection from "../components/MentorsSection.vue";
import graduateComponent from "../components/graduateComponent.vue";
</script>
