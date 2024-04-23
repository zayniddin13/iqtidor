<template>
  <div
    :class="[{ '!border-red-600': error }, styles]"
    class="flex items-center bg-gray-50 border border-main-grey h-10 rounded-[5px] focus-within:border-yellow-in-light transition-all duration-300 ease-in-out pr-2 py-2 max-w-[450px] w-full"
  >
    <slot name="prefix"></slot>
    <input
      class="px-4 py-3 outline-none focus:outline-none placeholder:text-gray-150 bg-transparent w-full ring-0 focus:ring-0 active:ring-0 focus:border-none border-none placeholder:text-grey-2 text-sm font-normal text-primaryBlue"
      :class="inputClass"
      v-bind="{ type, placeholder, minLength, maxLength, id, autoFocus }"
      :value="modelValue"
      autocomplete="new-password"
      @input="inputHandler"
      @blur="emit('on-blur')"
      @focus="emit('on-focus')"
      @focusout="emit('focus-out')"
      @keyup="emit('key-down')"
      @keyup.enter="emit('enter')"
    />
    <slot name="suffix"></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
interface Props {
  type: string;
  placeholder: string;
  modelValue: string | number;
  maxLength?: number;
  minLength?: number;
  id?: string;
  inputClass?: string;
  error?: boolean;
  autoFocus?: any;
  ref?: any;
  styles?: any;
}
defineProps<Props>();
const emit = defineEmits<{
  (e: "update:modelValue", val: Event): void;
  (e: "on-focus"): void;
  (e: "on-blur"): void;
  (e: "focus-out"): void;
  (e: "key-up"): void;
  (e: "key-down"): void;
  (e: "enter"): void;
}>();
const inputHandler = (event: any) => {
  emit("update:modelValue", event.target?.value);
};
</script>
