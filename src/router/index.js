import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import NotFoundComponent from "../pages/NotFoundComponent.vue";
import CoursePage from "../pages/CoursePage.vue";
import CoursesSection from "../components/CoursesSection.vue";
import CheckingCertificat from "../components/CheckingCertificat.vue";
import validSertificat from "../components/validSertificat.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        layout: "default",
      },
      component: Main,
    },
    {
      path: "/about-page",
      name: "about-page",
      meta: {
        layout: "default",
      },
      component: AboutPage,
    },
    {
      path: "/:courses",
      name: "courses",
      meta: {
        layout: "default",
      },
      component: CoursesSection,
    },
    {
      path: "/detail/:slug",
      name: "CoursePage",
      meta: {
        layout: "default",
      },
      component: CoursePage,
    },
    {
      path: "/checking-certificate",
      name: "CheckingCertificat",
      meta: {
        layout: "default",
      },
      component: CheckingCertificat,
    },
    {
      path: "/valid-sertificate",
      name: "ValidSertificate",
      meta: {
        layout: "default",
      },
      component: validSertificat,
    },
    {
      path: "/:path(.*)",
      name: "NotFoundComponent",
      meta: {
        layout: "empty",
      },
      component: NotFoundComponent,
    },
  ],
});

export default router;
