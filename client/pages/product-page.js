const ProductPageComponent = {

  props:["slice"],
  // props:["search"],


  
  template: `
    <div class="row">
    <h1 v-if="!slice" class="col-12">Produktsida</h1>
    <div v-if="!slice"><input type="text" v-model="search" placeholder="Sök produkter"/></div>

    <div class="col-12 card-body">

      <product
        v-for="product in filteredProducts"
        v-bind:item="product"
        v-bind:key="product._id"
        ></product>  
        </div>

    </div>
  `    
  ,


  created(){
    http.get('/rest/products').then((response) => {
      if(this.slice){
        this.products = response.data.splice(- Number(this.slice));
      } 
      else {
      this.products = response.data;
    }

    }).catch((error) => {
      console.error(error);
    });
  },

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