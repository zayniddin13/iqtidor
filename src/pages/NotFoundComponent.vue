<template>
  <div
    class="w-full min-h-screen h-full bg-notFoundBg bg-center bg-no-repeat bg-cover overflow-hidden"
  >
    <div>
      <img
        src="@/images/iqtidorLogo.svg"
        alt=""
        class="mx-auto mt-10 mb-0 w-[222px] h-[52px] max-[520px]:mb-16"
      />
    </div>
    <img
      src="@/images/OBJECTS.png"
      alt=""
      class="mx-auto h-[400px] max-[600px]:w-full max-[600px]:h-auto"
    />
    <i18n-t
      keypath="noData.noData"
      tag="p"
      class="text-xl max-[600px]:text-lg max-[420px]:text-base font-bold leading-tight text-primaryBlue mt-16 max-[590px]: text-center"
    >
      <template #noData-mainPage>
        <router-link to="/" class="text-main-blue">{{
          $t("noData.noData-mainPage")
        }}</router-link>
      </template>
      <template #connect>
        <a href="tel: +998983002200" class="text-main-blue">{{
          $t("noData.connect")
        }}</a>
      </template>
    </i18n-t>
  </div>
</template>
<script></script>
