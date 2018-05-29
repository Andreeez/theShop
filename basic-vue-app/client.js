Vue.component('product', ProductComponent);
Vue.component('hello', HelloComponent);

const http = axios; // using axios 3rd party XHR/REST lib

let app = new Vue({
  el: "#app",
  created(){
    // ladda in litta data
    http.get('/rest/products').then(response => {
      this.products = response.data;
    }).catch(e => {
      console.error(e);
    });
  },
  data(){
    return {
      brand: "The Magazine Store",
      products: []
    }
  }
});
