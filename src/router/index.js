import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/home";
// import feedback from "../components/feedback";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
    // , {
    //   path: '/feedback',
    //   name: 'feedback',
    //   component: feedback
    // },
  ]
})
