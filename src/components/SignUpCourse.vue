<template>
  <div id="apply" class="conteiner py-16">
    <div
      :class="error ? 'right-10' : '-right-[100%]'"
      class="fixed z-50 top-10 px-4 py-3 rounded-md bg-yellow-in-light border-yellow-in-light text-white text-sm font-medium transition-all duration-500"
    >
      {{ errorName }}
      <div
        :class="{ animation: error }"
        class="absolute left-0 bottom-0 h-1 rounded-sm bg-yellow-100"
      ></div>
    </div>
    <div
      class="pt-14 pb-11 px-8 bg-white flex max-[900px]:block gap-10 rounded-xl"
    >
      <div>
        <h2
          class="font-bold leading-tight text-4xl text-primaryBlue mb-10 max-[900px]:text-center"
        >
          {{ $t("signUpCourse.title") }}
        </h2>
        <img
          src="@/images/signup.svg"
          alt="fns"
          class="max-[900px]:text-center mx-auto max-[900px]:mb-5 w-full"
        />
      </div>
      <div>
        <div class="grid grid-cols-4 gap-3 max-[670px]:grid-cols-2">
          <div v-for="(item, index) in fetchDatas" :key="index">
            <div
              @click="setActive(item.id)"
              :class="{
                ' border-red-600': courseError,
                'bg-yellow-in-light/10 border-yellow-in-light':
                  activeIndex == item.id,
              }"
              class="p-3 rounded-[5px] border border-main-grey border-solid h-[115px] transition-all duration-300 hover:cursor-pointer group hover:border-yellow-in-light hover:bg-yellow-in-light/10"
            >
              <div class="header flex justify-between">
                <img :src="item.icon" alt="" class="w-9 h-9" />
                <div
                  :class="{
                    ' bg-yellow-in-light border-yellow-in-light':
                      activeIndex == item.id,
                  }"
                  class="border-main-grey bg-white border border-solid rounded-[2px] w-4 h-4 flex items-center justify-center transition-all duration-300 group-hover:border-yellow-in-light"
                >
                  <span class="icon-checkmark text-xs text-white" />
                </div>
              </div>
              <p class="text-xs font-normal leading-5 text-primaryBlue mt-6">
                {{ item.title }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center gap-3 mt-9 max-[670px]:block">
          <div class="w-full max-[670px]:mb-5">
            <h2 class="text-base font-semibold leading-5 text-black-1 mb-2">
              {{ $t("signUpCourse.fullName") }}
            </h2>
            <CInput
              :styles="{ 'border-red-600': nameError }"
              @click="nameStart"
              v-model="fullName"
              :placeholder="$t('signUpCourse.placeholder')"
              maxLength="40"
            />
          </div>
          <div class="w-full max-[670px]:mb-4">
            <h2 class="text-base font-semibold leading-5 text-black-1 mb-2">
              {{ $t("signUpCourse.phoneNumber") }}
            </h2>
            <div
              :class="{ 'border-red-600': numberError }"
              class="flex items-center bg-gray-50 border border-main-grey h-10 rounded-[5px] focus-within:border-yellow-in-light transition-all duration-300 ease-in-out pr-2 py-2 max-w-[450px] w-full"
            >
              <MaskInput
                class="px-4 py-3 outline-none focus:outline-none placeholder:text-gray-150 bg-transparent w-full ring-0 focus:ring-0 active:ring-0 focus:border-none border-none placeholder:text-grey-2 text-sm font-normal text-primaryBlue"
                id="basic"
                v-model="value"
                variant="filled"
                mask="+998 ## ### ## ##"
                placeholder="+998 99-999 99 99"
              />
            </div>
          </div>
        </div>
        <div
          class="flex items-center justify-between gap-2 my-5 max-[450px]:block"
        >
          <div
            @click="toggleAgree"
            class="agreement flex gap-1 items-center cursor-pointer max-[450px]:mb-4"
          >
            <div
              :class="
                agree
                  ? ' bg-main-blue border-main-blue'
                  : 'bg-white border-main-grey'
              "
              class="border border-solid rounded-[2px] w-4 h-4 flex items-center justify-center"
            >
              <span class="icon-checkmark text-xs text-white" />
            </div>
            <p
              :class="{ 'text-red-600': !agreement }"
              class="text-sm font-medium leading-4 text-primaryBlue tracking-[.5px] max-[670px]:font-thin"
            >
              {{ $t("signUpCourse.agreement") }}
            </p>
          </div>

          <CButton
            :isDisabled="!agree"
            @click="postAplication"
            variant="secondary"
            :title="$t('signUpCourse.sending')"
          />
        </div>
      </div>
    </div>
    <div
      @click="closeSuccesModal"
      :class="succesPost ? 'block' : 'hidden'"
      class="fixed left-0 top-0 w-screen h-screen bg-primaryBlue/90 z-40"
    ></div>
    <SuccessModal
      @value="closeSuccesModal"
      :class="succesPost ? 'block' : 'hidden'"
    />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { storeInstance } from "../instance/index.js";
import { useI18n } from "vue-i18n";
import CInput from "../components/ui/Input.vue";
import CButton from "../components/ui/Button.vue";
import SuccessModal from "../components/modals/Success.vue";
const currentLocale = ref(localStorage.getItem("locale"));
const value = ref(null);
const error = ref(false);
const { t, locale } = useI18n();
const loading = ref(false);
const fetchDatas = ref(null);
const activeIndex = ref(null);
const agree = ref(false);
const agreement = ref(true);
const fullName = ref(null);
const courseError = ref(false);
const nameError = ref(false);
const numberError = ref(false);
function toggleAgree() {
  console.log("salom");
  agree.value = !agree.value;
  agreement.value = true;
}
function nameStart(params) {
  nameError.value = false;
}
function numberStart(params) {
  numberError.value = false;
}
const setActive = (index) => {
  courseError.value = false;
  if (activeIndex.value !== index) {
    activeIndex.value = index;
  } else {
    activeIndex.value = null;
  }
};
const errorName = ref("");
const succesPost = ref(false);
function closeSuccesModal() {
  succesPost.value = false;
  document.getElementById("body").style.overflowY = "scroll";
  fullName.value = null;
  value.value = null;
  activeIndex.value = null;
  agree.value = false;
}
const postAplication = async () => {
  if (
    agree.value == true &&
    (fullName.value == null || value.value == null || activeIndex.value == null)
  ) {
    errorName.value = t("signUpCourse.complete");
    error.value = true;
    setTimeout(() => {
      error.value = false;
    }, 3000);
    nameError.value = true;
    numberError.value = true;
    courseError.value = true;
    agreement.value = false;
  } else {
    if (value.value) {
      let number = value.value.split(" ").join("");

      try {
        loading.value = true;
        const response = await storeInstance.post(`/create/application/`, {
          full_name: fullName.value,
          phone_number: number,
          course: activeIndex.value,
        });
        succesPost.value = true;
        document.getElementById("body").style.overflowY = "hidden";
        nameError.value = false;
        numberError.value = false;
        courseError.value = false;
        agreement.value = true;
      } catch (a) {
        console.log(a.response.data);
        errorName.value = t("signUpCourse.complete");
        error.value = true;
        setTimeout(() => {
          error.value = false;
        }, 3000);
        let errorCont = ref(null);
        for (const key in a.response.data) {
          if (Object.hasOwnProperty.call(a.response.data, key)) {
            errorCont.value = `${key}`;
            if (errorCont.value == "full_name") {
              nameError.value = true;
            } else if (errorCont.value == "phone_number") {
              numberError.value = true;
            } else if (errorCont.value == "course") {
              courseError.value = true;
            }
          }
        }
      } finally {
      }
    }
  }
};
const fetchDataFromApi = async () => {
  try {
    loading.value = true;
    const response = await storeInstance.get(`/list/`, {
      headers: {
        "Accept-Language": locale._value,
      },
    });
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
<style scoped>
.animation {
  animation-name: example;
  animation-duration: 3.5s;
}

@keyframes example {
  from {
    width: 100%;
  }
  to {
    width: 0px;
  }
}
</style>
