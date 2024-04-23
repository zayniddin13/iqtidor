<template>
  <div class="conteiner mt-16">
    <div
      class="title font-bold leading-7 text-3xl max-[390px]:text-2xl text-primaryBlue mb-3"
    >
      {{ $t("titles.verification") }}
    </div>
    <div class="bg-white rounded-lg p-5 flex gap-24">
      <div class="pl-10 max-[520px]:pl-0">
        <img src="@/images/checked.svg" alt="checked" />
        <i18n-t
          keypath="sertificat.correct-certificat"
          tag="p"
          class="font-bold leading-7 text-3xl max-[450px]:text-2xl text-primaryBlue pt-5 mb-3"
        >
          <template #certificat-id>
            <span class="font-bold">{{ value }}</span>
          </template>
        </i18n-t>
        <p class="pb-6 text-grey-3 font-normal leading-6 text-xl">
          <i18n-t
            keypath="sertificat.checked-name"
            tag="p"
            class="pb-6 text-grey-3 font-normal leading-6 text-xl"
          >
            <template #name> {{ fullName }} </template>
          </i18n-t>
        </p>
        <img src="@/images/sertificate.png" alt="sertificate" />
        <CButton
          variant="primary"
          :title="$t('button.checking-again')"
          styles="mt-6 !bg-main-grey hover:!bg-primaryBlue"
          @click="mainDisplay"
        />
      </div>
      <div class="max-[700px]:hidden">
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
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  value: String || Number,
  fullName: String,
});
const emit = defineEmits(["mainDisplay"]);
function mainDisplay(params) {
  emit("mainDisplay");
}
</script>
