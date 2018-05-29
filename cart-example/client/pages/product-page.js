const ProductPageComponent = {

  props:["slice"],
  props:["search"],

  template: `
    <div class="row">
    <h1 v-if="!slice" class="col-12">Produktsida</h1>
    <div class="col-12 card-body">

      <product
        v-for="product in products"
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
        // this.products = response.data._rand(this.slice_rand,5);
        // this.products = response.data.random(0,Number(this.slice));
        // this.products = response.data.random(this.slice,3);
        // this.products = response.data.lastIndexOf(0,Number(this.slice));
        // this.products = response.data.splice(0,Number(this.slice));

        this.products = response.data.splice(- Number(this.slice));


        // this.products = response.data.splice(-3);

      } else if(this.search) {
        this.products = response.data.filter(this.search);

      } else {
      this.products = response.data;
    }
      //  Kod för att filtrera och söka vidare, ex för att viosa 3 första produkterna på första sidan
      //      this.products = response.data.splice(0,1);

    }).catch((error) => {
      console.error(error);
    });
  },
  data(){
    return{
      products: []
    }
  }
}