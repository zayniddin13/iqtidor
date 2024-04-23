<template>
  <div>
    <div v-if="mainDisplay" class="conteiner mt-16">
      <div class="title font-bold leading-7 text-3xl text-primaryBlue mb-3">
        {{ $t("titles.verification") }}
      </div>
      <div class="bg-white rounded-lg p-5 flex gap-24">
        <div class="pl-10 max-[600px]:pl-0 relative">
          <p
            class="font-semibold leading-4 all-small-caps tracking-[2.76px] text-6xl text-blue-2 pt-16 max-[600px]:pt-6 max-[480px]:text-5xl max-[420px]:text-4xl pb-6"
          >
            {{ $t("titles.certificat") }}
          </p>
          <p class="pb-6 text-grey-3 font-normal leading-6 text-xl">
            {{ $t("sertificat.checking-about") }}
          </p>
          <p class="text-sm font-semibold leading-5 text-primaryBlue mb-2">
            {{ $t("sertificat.certificat-code") }}
          </p>
          <CInput
            placeholder="Kodni kiting"
            styles="max-[420px]:w-[90%]"
            v-model="value"
            @input="inputValue(value)"
          />
          <vue-recaptcha
            class="mt-5 mb-8 mx-auto relative max-[420px]:w-[90px] max-[420px]:-left-32"
            ref="recaptcha"
            :sitekey="siteKey"
            @verify="verifyMethod"
            @expired="expiredMethod"
          />
          <CButton
            @click="fetchDataFromApi"
            :isDisabled="captchaToken ? false : true"
            variant="secondary"
            title="Tekshirish"
            styles="mt-6"
          />
        </div>
        <div class="max-[760px]:hidden">
          <img
            src="../../public/images/teachersSecDecImg.svg"
            alt=""
            class="w-[240px] h-[255px]"
          />
        </div>
      </div>
    </div>
    <validSertificat
      v-if="correctDisplay"
      :value="value"
      :fullName="fetchDatas.full_name"
      @mainDisplay="checkAgain"
    />
    <NoValidSertificate
      v-if="errorDisplay"
      @mainDisplay="checkAgain"
      :value="value"
    />
  </div>
</template>
<script setup>
import { ref, defineEmits } from "vue";
import CInput from "./ui/Input.vue";
import CButton from "./ui/Button.vue";
import { VueRecaptcha } from "vue-recaptcha";
import { certificateInstance } from "../instance/index.js";
import validSertificat from "./validSertificat.vue";
import NoValidSertificate from "./NoValidSertificate.vue";
const captchaToken = ref(null);
const siteKey = "6LcSNMQpAAAAAHh3IcJboaWCsZZ-ZN0w4Bj8PIWQ";
function verifyMethod(response) {
  captchaToken.value = response;
}
function expiredMethod() {
  captchaToken.value = null;
}
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const mainDisplay = ref(true);
const correctDisplay = ref(false);
const errorDisplay = ref(false);
const response = ref();
const isDisabled = ref(true);
const value = ref("");
const fetchDatas = ref(null);
const loading = ref(false);
const fetchDataFromApi = async () => {
  if (captchaToken.value) {
    try {
      loading.value = true;
      const response = await certificateInstance.get(`/${value.value}`);
      fetchDatas.value = response.data;
      mainDisplay.value = false;
      correctDisplay.value = true;
    } catch (error) {
      mainDisplay.value = false;
      errorDisplay.value = true;
    } finally {
    }
  }
};
function checkAgain() {
  mainDisplay.value = true;
  correctDisplay.value = false;
  errorDisplay.value = false;
}
</script>
