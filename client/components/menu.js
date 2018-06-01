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
        <router-link class="nav-link" to="/info">Info</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/admin">Adminsida</router-link>
      </li>

    </ul>`


    // <li class="nav-item">
    // <input name="search" v-model="search"></input>
    // <button v-onclick:search>Sök</button>

    // </li>


    // ,

    // data(){
    //   return{
    //       search: ''
    //   }
    // },
    
    // methods: {
      
    //   search: () =>{
    //       console.log('searc');
    
    //       http.post('/rest/search', {
          
    //         }).then(response => {
    //           console.log(response);
    
    //         }).catch(error => {
    //           console.error(error)
    //         });
    //       }
    //     }    
    
  
}



