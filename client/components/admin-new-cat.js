const AdminNewCatComponent = {
    template: `
        <form @submit.prevent="submit">
            <label>Ny Kategori
                <input type="text" v-model="newCategory" :disabled="loading" required />
            </label>
            <br/>
            <button type="submit" :disabled="loading">Lägg till</button>
            <br/>
            <span v-if="message">{{message}}</span>
        </form>
    `,

    data() {
        return {
            newCategory: '',
            loading: false,
            message: ''
        };
    },
    methods: {
        submit()
        { // skapa
            console.log(this.newCategory);
            this.loading = true;
            http.post('/rest/category',
            {
                name: this.newCategory
            }).then(response =>
            {
                console.log(response);
                this.loading = false;
                if(response.data.name)
                {
                    this.message = 'Creation of category complete';
                }
                else
                {
                    this.message = 'Failed creation of category due to response';
                }
            }).catch(error =>
            {
                this.loading = false;
                this.message = 'Failed creation of category due to error';
            });
        }
    }
}