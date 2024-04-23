<template>
  <div class="conteiner mt-16">
    <div
      class="title font-bold leading-7 text-3xl max-[380px]:text-2xl text-primaryBlue mb-3"
    >
      {{ $t("titles.verification") }}
    </div>
    <div class="bg-white rounded-lg p-5 flex gap-24">
      <div class="pl-10 max-[600px]:p-0">
        <img src="@/images/incorrect.svg" alt="incorrect" />
        <i18n-t
          keypath="sertificat.incorrect-sertificat"
          tag="p"
          class="font-bold leading-7 text-3xl max-[480px]:text-2xl text-primaryBlue pt-8 mb-3"
        >
          <template #certificat-id>
            <span class="font-bold">{{ value }}</span>
          </template>
        </i18n-t>
        <CButton
          variant="primary"
          :title="$t('button.checking-again')"
          styles="mt-6 !bg-main-grey hover:!bg-primaryBlue"
          @click="mainDisplay"
        />
      </div>
      <div class="max-[720px]:hidden">
        <img
          src="../../public/images/teachersSecDecImg.svg"
          alt=""
          class="w-[240px] h-[255px]"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import CButton from "./ui/Button.vue";
import { defineEmits, defineProps } from "vue";
const props = defineProps({
  value: String || Number,
});
const emit = defineEmits(["mainDisplay"]);
function mainDisplay(params) {
  emit("mainDisplay");
}
</script>
