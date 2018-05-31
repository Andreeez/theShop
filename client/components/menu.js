const MenuComponent = {

  template: `
    <ul class="nav">
        <li class="nav-item">
            <router-link class="nav-link" to="/">Hem</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/products">Produkter</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/cart">Kundvagn</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/login">Login/Regristrera</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/admin">Admin</router-link>
        </li>
    </ul>`
}