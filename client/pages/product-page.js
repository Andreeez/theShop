const ProductPageComponent = {

  props:["slice"],
  // props:["search"],


  
  template: `
    <div class="row">
        <div v-if="!slice"><input type="text" v-model="search" placeholder="Sök produkter"/></div>
        <h1 v-if="!slice" class="col-12">Produktsida</h1>
        <product v-for="product in filteredProducts" v-bind:item="product" v-bind:key="product._id"></product>
    </div>
  `    
  // <search 
  // v-if="!slice"
  // ></search>
 
  //  v-for="product in products"

  ,


  created(){
    http.get('/rest/products').then((response) => {
      if(this.slice){
        // this.products = response.data._rand(this.slice_rand,5);
        // this.products = response.data.random(0,Number(this.slice));
        // this.products = response.data.random(this.slice,3);
        // this.products = response.data.lastIndexOf(0,Number(this.slice));
        // this.products = response.data.splice(0,Number(this.slice));

        this.products = response.data.splice(- Number(this.slice));
        // this.products = response.data.splice(-3);

      } 
      // else if(this.search) {
      //   this.products = response.data.filter(this.search);

      // } 
      else {
      this.products = response.data;
    }
      //  Kod för att filtrera och söka vidare, ex för att viosa 3 första produkterna på första sidan
      //      this.products = response.data.splice(0,1);

    }).catch((error) => {
      console.error(error);
    });
  },
  // data(){
  //   return{
  //     products: []
  //   }
  // },

  computed: {
    filteredProducts: function(){
      return this.products.filter((product)=>{
        return product.name.match(this.search);
      });
    } 
  },
  
data() {
  return {
      products: [],
      search: ""
    };
  }
};