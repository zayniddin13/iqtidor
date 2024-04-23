<template>
  <div
    class="max-w-[450px] bg-white rounded-2xl p-4 fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-50 text-center"
  >
    <img
      src="@/images/succesfull.svg"
      alt="succesfull"
      class="mb-2 text-center mx-auto"
    />
    <h2 class="font-medium text-xl leading-4 text-primaryBlue">
      {{ $t("succes-modal.title") }}
    </h2>
    <p class="text-sm font-light leading-normal text-blue-4 mb-6">
      {{ $t("succes-modal.about") }}
    </p>
    <CButton
      @click="closeModal"
      variant="secondary"
      :title="$t('succes-modal.go-back')"
    />
  </div>
</template>
<script setup>
import CButton from "../ui/Button.vue";
import { defineEmits } from "vue";
const emit = defineEmits(["value"]);
function closeModal() {
  emit("value");
}
</script>
