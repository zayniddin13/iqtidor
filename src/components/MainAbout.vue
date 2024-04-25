<template>
  <div class="relative z-5 overflow-x-hidden mb-16 overflow-y-hidden">
    <div id="main-about" class="conteiner relative">
      <div
        class="flex justify-between items-center gap-20 mt-14 max-[880px]:block relative"
      >
        <div class="max-[880px]:mb-5 toRight max-w-[670px]">
          <i18n-t
            keypath="mainAbout.title"
            tag="p"
            class="text-7xl max-[990px]:text-5xl max-[490px]:text-4xl font-bold leading-tight text-primaryBlue mb-5"
          >
            <template #title-addition>
              <a href="#" class="text-yellow-in-light font-bold">{{
                $t("mainAbout.title-addition")
              }}</a>
            </template>
          </i18n-t>
          <p class="text-grey-3 text-xl font-normal leading-7">
            {{ $t("mainAbout.first-cont") }}
          </p>
        </div>
        <div class="w-full toLeft">
          <img src="@/images/Iqtidor.svg" alt="" />
        </div>
      </div>
      <div
        class="flex justify-between items-center gap-20 max-[1100px]:mt-6 max-[880px]:block relative"
      >
        <img
          src="@/images/mainAboutLeft.png"
          alt=""
          class="w-[590px] h-[520px] max-[1100px]:w-[490px] max-[1100px]:h-[470px] max-[980px]:w-[390px] max-[980px]:h-[370px] max-[880px]:w-full max-[880px]:max-w-[590px] max-[880px]:h-[520px] toRight"
        />
        <div class="toLeft max-w-[600px]">
          <p
            class="text-grey-3 text-xl max-[720px]:text-base max-[720px]:font-thin font-normal leading-7"
          >
            {{ $t("mainAbout.second-cont") }}
          </p>
        </div>
        <img
          src="@/images/circle-inAbout.png"
          alt=""
          class="absolute bottom-0 rotation right-0 -z-10 max-[880px]:left-8 max-[880px]:top-0 max-[600px]:hidden"
        />
      </div>
      <img
        src="@/images/about-img.svg"
        alt=""
        class="absolute aboutImg top-10 left-8 -z-10 max-[600px]:hidden"
      />
    </div>
    <img
      src="@/images/aboutRaketa.png"
      alt=""
      class="absolute animation right-0 top-60 max-[670px]:hidden w-[250px] h-[309px]"
    />
  </div>
</template>
<style>
.aboutImg {
  animation-name: toBottom;
  animation-delay: 2;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-direction: alternate;
}
.rotation {
  animation-name: rotate;
  animation-duration: 5s;
  animation-iteration-count: infinite;
}
@keyframes toBottom {
  from {
    top: -100%;
  }
  to {
    top: 40px;
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.toRight {
  animation-name: toRight;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-direction: alternate;
}
@keyframes toRight {
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
}
.toLeft {
  animation-name: toLeft;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-direction: alternate;
}
@keyframes toLeft {
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
}
</style>
