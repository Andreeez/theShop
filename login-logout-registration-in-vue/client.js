Vue.component('registration', RegistrationComponent);
Vue.component('login', LoginComponent);

const http = axios; // using axios 3rd party XHR/REST lib

let app = new Vue({
  el: "#app"
});
