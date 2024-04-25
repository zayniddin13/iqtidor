<template>
  <Transition name="fade" mode="out-in">
    <div class="content">
      <MainComponent />
      <GoalSection />
      <CoursesSection id="courses" />
      <MentorsSection />
      <SignUPCourse id="apply" />
      <SocialComponent />
      <GraduateComponent />
    </div>
  </Transition>
</template>
<script setup>
import MainComponent from "../components/MainComponent.vue";
import GoalSection from "../components/GoalSection.vue";
import CoursesSection from "../components/CoursesSection.vue";
import MentorsSection from "../components/MentorsSection.vue";
import SignUPCourse from "../components/SignUpCourse.vue";
import SocialComponent from "../components/SocialComponent.vue";
import GraduateComponent from "../components/graduateComponent.vue";
</script>
