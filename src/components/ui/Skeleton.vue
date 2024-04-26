<template>
  <div
    id="animation-container"
    class="max-w-[1360px] w-full mx-auto h-full"
  ></div>
</template>
<script setup>
import { onMounted } from "vue";
import lottie from "lottie-web";
import jsonData from "../../components/ui/skeletonAnimation.json";

onMounted(() => {
  const container = document.getElementById("animation-container"); // Animatsiya uchun container
  lottie.loadAnimation({
    container: container,
    renderer: "svg", // Renderer turi (HTML/SVG)
    loop: true, // Animatsiyani doimiy qilish
    autoplay: true, // Animatsiyani avtomatik ravishda boshlash
    animationData: jsonData, // JSON ma'lumotlari
  });
});
</script>
