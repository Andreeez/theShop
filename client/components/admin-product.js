const AdminProductComponent = {
    template: `
        <div class="container">
        <div class="row">
            <div class="col-4">
            <h2>Skapa Produkt</h2>
            <form @submit.prevent="submit">
                <label>Namn</br>
                    <input type="text" v-model="name" :disabled="loading" required />
                </label>
                <br/>
                <label>Beskrivning</br>
                    <input type="text" v-model="description" :disabled="loading" />
                </label>
                <br/>
                <label>Artikel Nummer</br>
                    <input type="text" v-model="artnr" :disabled="loading" placeholder="abc123" />
                </label>
                <br/>
                <label>Pris</br>
                    <input type="text" v-model="price" :disabled="loading" />
                </label>
                <br/>
                <label>Momssats</br>
                    <input type="text" v-model="vat" :disabled="loading" />
                </label>
                <br/>
                <label>Bild</br>
                    <input type="text" v-model="image" :disabled="loading" placeholder="filename.ext"/>
                </label>
                <br/>
                <label>Kategori</br>
                    <select v-model="categories" class="custom-select">
                        <option selected disabled>Välj en Kategori</option>
                        <admin-option
                        v-for="option in options"
                        v-bind:option="option">
                        </admin-option>
                    </select>
                </label>
                <br/>
                <button type="submit" :disabled="loading">Skapa</button>
                <br/>
                <span v-if="message">{{message}}</span>
            </form>
            </div>
        </div>    
        </div>
    `,

    async created()
    {
        let categories = await http.get('/rest/category');
        if(categories.data)
        {
            this.categories = categories.data;
            this.options = categories.data;
        }
    },
    data() {
        return {
            name: '',
            description: '',
            categories: [],
            image: '',
            price: 0,
            vat: 0.25,
            artnr: '',
            message: '',
            loading: false,
            options: []
        };
    },
    methods: {
        submit()
        { // skapa
            this.categories = [this.categories];
            console.log(this.name);
            console.log(this.description);
            console.log(this.categories);
            console.log(this.image);
            console.log(this.price);
            console.log(this.vat);
            console.log(this.artnr);
            this.loading = true;
            http.post('/rest/products',
            {
                name: this.name,
                description: this.description,
                categories: this.categories,
                image: 'images/' + this.image,
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