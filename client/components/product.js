const ProductComponent = {

    props: ['item'],


    template: `
    <div class="card-body">
        <img class="productPicture" v-bind:src="item.image"/>
        <h2>{{item.name}}</h2>
        <p>{{item.description}}</p>
        <p>{{item.price}}kr</p>
        <button class="card-button" v-on:click="addToCart">Lägg till</button>
    </div>
  `,


    data() {
        return {
            _id: '',
            message: '',
            loading: false,
        };
    },

    methods: {
        addToCart() { // register
            this.loading = true;
            http.post('/rest/cart', {
                product: this.item._id,
                amount: 1,
            }).then(response => {
                console.log(response);
                this.loading = false;
                if (response.data.msg) {
                    this.message = 'Lade till i varukorgen';
                } else {
                    this.message = 'Error 1';
                }
            }).catch(error => {
                this.loading = false;
                this.message = 'Error 2';
            });
        }
    },

}
