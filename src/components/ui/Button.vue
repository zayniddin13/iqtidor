<template>
  <button
    :disabled="isDisabled ? true : false"
    :class="[
      {
        'cursor-not-allowed opacity-50 hover:!bg-primaryBlue active:scale-100 hover:text-white':
          isDisabled,
      },
      styles,
      variants[variant],
    ]"
    class="inline-flex items-center"
  >
    <slot name="preffix"></slot>
    <p class="titleStyle">{{ title }}</p>
    <slot name="suffix"></slot>
  </button>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  title?: string;
  variant?: string;
  styles?: string;
  resHidden: String;
  type: String;
  isDisabled: Boolean;
}>();
const variants = {
  primary:
    "text-primaryBlue border font-SFui  bg-white px-7 py-2.5 rounded-lg cursor-pointer transition-all duration-300 hover:bg-primaryBlue hover:text-white hover:border-primaryBlue shadow-md active:scale-90 leading-5 font-semibold text-base",
  secondary:
    "text-white border font-SFui border-transparent bg-primaryBlue px-7 py-2.5 rounded-lg  cursor-pointer transition-all duration-300 hover:bg-white hover:text-primaryBlue  shadow-md active:scale-90 leading-5 font-semibold text-base",
  bgWhiteTestWhite:
    "text-white border font-SFui border-transparent bg-main-blue px-7 py-2.5 rounded-lg  cursor-pointer transition-all duration-300 hover:bg-white hover:text-primaryBlue  shadow-md active:scale-90 leading-5 font-semibold text-base",
};
</script>
