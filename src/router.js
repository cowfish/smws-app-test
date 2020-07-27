import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
   {
      path: "/distilleries",
      name: "distilleries",
      component: () => import("./components/DistilleriesList")
    },
   {
      path: "/",
      alias: "/whiskies",
      name: "whiskies",
      component: () => import("./components/WhiskiesList")
   }

  ]
});
