const CartComponent = {
  template: `
    <div class="card-body">
      <h1>{{title}}</h1>
      <table>
        <tr>
          <th>vara</th>
          <th>pris</th>
          <th>moms</th>
          <th>antal</th>
        </tr>
        <cart-item v-if="!loading"
          v-for="item in items"
          v-bind:item="item"
          v-bind:key="item._id">
        </cart-item>
      </table>
    </div>
  `,
  created(){
    // ladda in litta data
    this.loading = true;
    http.get('/rest/cart').then(response => {
      console.log('items', response.data.items)
      this.items = response.data.items;
      this.loading = false;
    }).catch(e => {
      console.error(e);
      this.loading = false;
    });
  },
  data(){
    return{
      loading: false,
      items: [],
      title: "Varukorg"
    }
  }
}