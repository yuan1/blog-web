import Vue from "vue";
import Router from "vue-router";
import PageLayout from "@/layout/PageLayout";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: PageLayout,
      redirect: "/home",
      children: [
        {
          path: "home",
          component: () =>
            import(/* webpackChunkName: "home" */ "@/views/home/Index.vue")
        }
      ]
    }
  ]
});
