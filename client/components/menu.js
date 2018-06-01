const MenuComponent = {

  template: `
    <ul class="nav">
        <li class="nav-item">
            <router-link class="nav-link" to="/">Hem</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/products">Produkter</router-link>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Kategorier
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <category class="dropdown-item"
                v-for="item in categories"
                v-bind:item="item"
                v-bind:key="item._id">
                </category>
            </div>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/cart">Kundvagn</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/login">Login/Regristrera</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/admin">Adminsida</router-link>
        </li>
    </ul>`
}