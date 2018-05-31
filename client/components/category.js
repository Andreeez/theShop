const CategoryComponent = {
    
    props: ['category'],
    
    template: `
        <li class="nav-item">
            <button class="nav-link router-link-active" v-on:click="updateCategory">{{category}}</button>
        </li>
    `,

    methods: {
        updateCategory: function(derp) {
            this.$parent.$parent.category = derp.target.textContent;
            console.log(this.$parent.$parent.category);
            // console.log(derp.target.textContent);
        }
    }
}