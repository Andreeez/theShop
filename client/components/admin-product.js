const AdminProductComponent = {
    template: `
        <div class="card-body">
            <h2>Skapa Produkt</h2>
            <form @submit.prevent="submit">
                <label>Namn
                    <input type="text" v-model="name" :disabled="loading" required />
                </label>
                <label>Beskrivning
                    <input type="text" v-model="description" :disabled="loading" />
                </label>
                <label>Artikel Nummer
                    <input type="text" v-model="artnr" :disabled="loading" placeholder="abc123" />
                </label>
                <label>Pris
                    <input type="text" v-model="price" :disabled="loading" />
                </label>
                <label>Momssats
                    <input type="text" v-model="vat" :disabled="loading" />
                </label>
                <label>Kategori
                    <input type="text" v-model="category" :disabled="loading" />
                    <!-- drop down? -->
                </label>
                <button type="submit" :disabled="loading">Skapa</button>
                <br/>
                <span v-if="message">{{message}}</span>
            </form>
        </div>
    `,
    data() {
        return {
            name: '',
            description: '',
            category: '',
            image: '',
            price: 0,
            vat: 0.25,
            artnr: '',
            message: '',
            loading: false
        };
    },
    methods: {
        submit()
        { // skapa
            this.loading = true;
            http.post('/rest/products',
            {
                name: this.name,
                description: this.description,
                category: this.category,
                image: this.image,
                price: this.price,
                vat: this.vat,
                artnr: this.artnr,
            }).then(response =>
            {
                console.log(response);
                this.loading = false;
                if(response.data.name)
                {
                    this.message = 'Creation of product complete';
                }
                else
                {
                    this.message = 'Failed creation of product due to response';
                }
            }).catch(error =>
            {
                this.loading = false;
                this.message = 'Failed creation of product due to error';
            });
        }
    }
}


