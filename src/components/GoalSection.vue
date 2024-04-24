<template>
  <div class="conteiner max-md:block flex justify-between gap-8 pb-16">
    <div>
      <ul class="max-md:mb-4">
        <li>
          <i18n-t
            keypath="goal.today"
            tag="p"
            class="text-3xl max-[990px]:text-2xl font-bold leading-tight text-primaryBlue/70 min-[450px]:whitespace-nowrap mt-2"
          >
            <template #today_title>
              <a href="#" class="text-primaryBlue font-bold">{{
                $t("goal.today_title")
              }}</a>
            </template>
          </i18n-t>
        </li>
        <li>
          <i18n-t
            keypath="goal.tommorow"
            tag="p"
            class="text-3xl max-[990px]:text-2xl font-bold leading-tight text-primaryBlue/70 min-[450px]:whitespace-nowrap mt-2"
          >
            <template #tommorow_title>
              <a href="#" class="text-primaryBlue font-bold">{{
                $t("goal.tommorow_title")
              }}</a>
            </template>
          </i18n-t>
        </li>
        <li>
          <i18n-t
            keypath="goal.talent"
            tag="p"
            class="text-3xl max-[990px]:text-2xl font-bold leading-tight text-primaryBlue/70 min-[450px]:whitespace-nowrap mt-2"
          >
            <template #talent_title>
              <span href="#" class="text-primaryBlue font-bold">{{
                $t("goal.talent_title")
              }}</span>
            </template>
          </i18n-t>
        </li>
      </ul>
    </div>
    <div class="text-grey-3 font-normal text-lg leading-5 tracking-[0.38px]">
      {{ $t("goal.goal-about") }}
    </div>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
</script>
