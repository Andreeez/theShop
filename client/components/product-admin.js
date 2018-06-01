const ProductAdminComponent = {
    template: `
      <div class="card-body">
        <h2>Skapa en produkt</h2>
        <form @submit.prevent="submit">
            <label>Produktnamn
                <input type="text" v-model="name" :disabled="loading" required />
            </label>
            <label>Beskrivning
                <input type="text" v-model="description" :disabled="loading" />
            </label>
            <label>Kategori
                <input type="number" v-model="category" :disabled="loading" />
            </label>
            <label>Pris
                <input type="text" v-model="price" :disabled="loading" />
            </label>
            <label>Artikelnummer
                <input type="text" v-model="artnr" :disabled="loading" placeholder="t ex abc123"/>
            </label>
            <label>Momssats
                <input type="text" v-model="vat" :disabled="loading"/>
            </label>
            <label>Bild
                <input type="text" v-model="image" :disabled="loading" placeholder="images/bildnamn" />
            </label>
          <button type="submit" :disabled="loading">Spara produkt</button>
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
        price: 0,
        vat: 0.25,
        artnr: '',
        image: '',
        message: '',
        loading: false

      };
    },

    methods: {
      submit() { // save a product
        this.loading = true;
        http.post('/rest/products', {
            name: this.name,
            description: this.description,
            category: this.category,
            price: this.price,
            vat: this.vat,
            artnr: this.artnr,
            image: this.image

        }).then(response => {
          console.log(response);
          this.loading = false;
          if(response.data.name) {
            this.message = 'Product complete';
          } else {
            this.message = 'Product not saved';
          }
        }).catch(error => {
          this.loading = false;
          this.message = 'Product  not saved';
        });
      }
    },

  }
  
  
  