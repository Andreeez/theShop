const SearchComponent = {
    template: `
      <div class="card-body">
      
          <label>Search
            <input placeholder="sök produkt" v-model="searchItem" type="text" />
          </label>
          Du sökte efter : {{searchItem}}
    
          <div v-if="searchItem" v-for="product in filteredProducts">
                <h2>{{product.name}}</h2>
                <p>{{product.price}}</p>
          </div> 
       </div>
    `,
    
    created(){
      http.get('/rest/products').then((response) => {
        this.products = response.data;
        
        //  Kod för att filtrera och söka vidare, ex för att viosa 3 första produkterna på första sidan
         // this.products = response.data.splice(0,2);
  
      }).catch((error) => {
        console.error(error);
      });
    },
    data(){
      return{
        products: [],
        searchItem: ''
      }
    },
    computed: {
      filteredProducts: function(){
        return this.products.filter((product)=> {
          return product.name.match(this.searchItem);
        });
      }
    }
}