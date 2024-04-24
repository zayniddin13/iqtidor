<template>
  <div class="relative">
    <div
      @click="toggeOpen"
      ref="target"
      :class="styles"
      class="flex items-center bg-white border border-secandryGrey rounded-xl focus-within:border-yellow-in-light transition-all duration-300 ease-in-out py-0 px-2 max-w-[180px] border-bottom cursor-pointer hover:border-yellow-in-light"
    >
      <slot name="preffix"></slot>
      <input
        type="text"
        readonly
        :value="props.title"
        class="outline-none focus:outline-none font-poppins font-normal test-base leading-6 text-secondaryBlue bg-transparent w-full ring-0 focus:ring-0 active:ring-0 focus:border-none border-none px-3 max-[500px]:px-2 py-1 max-[500px]:py-1 max-[1100px]:max-w-[60px] cursor-pointer"
        :class="props.inputClass"
      />
      <div
        class="transition-all duration-300"
        :class="openValue ? 'rotate-180' : ''"
      >
        <slot name="suffix"></slot>
      </div>
    </div>
    <div
      v-if="openValue"
      class="absolute z-40 top-14 left-0 bg-white w-full rounded-lg border border-collapse border-main-grey"
    >
      <div
        v-for="(item, index) in props.options"
        :key="index"
        @click="selectFunc(item.shortLang)"
        class="p-2.5 border-collapse rounded-lg transition-all duration-300 hover:bg-slate-300 cursor-pointer"
      >
        <div class="flex justify-between">
          <div class="flex items-center gap-2">
            <img :src="item.flag" alt="flag" />
            <div
              class="max-[1100px]:hidden block font-poppins font-normal test-base leading-6 text-secondaryBlue"
            >
              {{ item.lang }}
            </div>
            <div
              class="max-[1100px]:block hidden font-poppins font-normal test-base leading-6 text-secondaryBlue"
            >
              {{ item.shortLang }}
            </div>
          </div>
          <span
            :class="
              props.title == item.lang || props.title == item.shortLang
                ? 'icon-checkmark text-main-blue'
                : ''
            "
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
const openValue = ref(false);
const target = ref(null);
onClickOutside(target, (event) => (openValue.value = false));
let props = defineProps({
  placeholder: String,
  title: String | Number,
  id: String,
  inputClass: String,
  options: Array,
  styles: String,
});
function toggeOpen() {
  openValue.value = !openValue.value;
}
const emit = defineEmits(["value"]);
function selectFunc(value) {
  emit("value", [value]);
  open.value = false;
}
</script>
