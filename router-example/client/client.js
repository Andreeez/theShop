// page components (whole views)
Vue.component('home-page', HomePageComponent);
Vue.component('product-page', ProductPageComponent);

// "normal" components (partials)
Vue.component('nav-menu', MenuComponent);
Vue.component('hello', HelloComponent);

// Configure the router:
// about the VueRouter: https://www.liquidlight.co.uk/blog/article/building-a-vue-v2-js-app-using-vue-router/
const router = new VueRouter({
  mode: 'history', // html5 popstate, alternatively: 'hash'
  base: '/', // set the correct base
  routes: [ // our frontend routes
    { path: '/', component: HomePageComponent },
    { path: '/products', component: ProductPageComponent }
  ]
});

// the app
let app = new Vue({
  el: "#app",
  router // add the router to the app
});
