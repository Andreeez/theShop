const CategoryComponent = {
    
    props: ['category'],
    
    template: `
        <li class="nav-item">
            <a href="#" class="nav-link router-link-active">{{category}}</a>
        </li>
    `
}