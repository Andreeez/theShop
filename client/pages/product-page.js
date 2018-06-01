const ProductPageComponent = {

    props: ["slice"],

    template: `
    <div class="row">
        <category-menu v-if="!slice"></category-menu>
        <div v-if="!slice"><input type="text" v-model="search" placeholder="Sök produkter"/></div>
        <h1 v-if="!slice" class="col-12">Produktsida</h1>
        <product v-for="product in filteredProducts" v-bind:item="product" v-bind:key="product._id"></product>
    </div>
    `,

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
            console.log("derp");
            return this.products.filter((product) =>
            {
                return product.name.match(this.search);
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