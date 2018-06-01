const CategoryMenuComponent = {
    template: `
        <ul class="row nav darker col-11">
            <category v-for="category in categories" v-bind:category="category"></category>
        </ul>
    `,

    created() {
        http.get('/rest/products').then((response) => {
            this.categories = [];
            response.data.forEach(element =>
            {
                if(this.categories.includes(element.category) == false)
                {
                    this.categories.push(element.category);
                }
            });
            console.log('categories: ' + this.categories);
        }).catch((error) => {
            console.error(error);
        });
    },
    data() {
        return {
            categories: []
        }
    }
}