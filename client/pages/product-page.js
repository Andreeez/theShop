const ProductPageComponent = {

    props: ["slice"],

    template: `
    <div class="row">
        <div v-if="!slice"><input type="text" v-model="search" placeholder="Sök produkter"/></div>
        <h1 v-if="!slice" class="col-12">Produktsida</h1>
        <product v-for="product in categoryFilteredProducts" v-bind:item="product" v-bind:key="product._id"></product>
    </div>
    `,

// <product v-for="product in filteredProducts" v-bind:item="product" v-bind:key="product._id"></product>

    created() {
        http.get('/rest/products').then((response) =>
        {
            if (this.slice)
            {
                this.products = response.data.splice(- Number(this.slice));
            }
            else
            {
                this.products = response.data;
            }
        }).catch((error) =>
        {
            console.error(error);
        });
    },
    computed: {
        filteredProducts: function ()
        {
            return this.products.filter((product) =>
            {
                return product.name.match(this.search);
            });
        },

        categoryFilteredProducts: function()
        {
            return this.filteredProducts.filter((product)=>
            {
                if(!this.$route.params.category)
                {
                    return true;
                }
                for(let category of product.categories)
                {
                    if(category.name == this.$route.params.category)
                    {
                        return true;
                    }
                }
            });
        }
    },

    data() {
        return {
            products: [],
            search: "",
            category: null
        };
    }
};