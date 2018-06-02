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
        <tr>
            <td>Totalsumma:</td>
            <td>{{total}}kr</td>
        </tr>
      </table>
    </div>
  `,
    created() {
        // ladda in litta data
        this.loading = true;
        http.get('/rest/cart').then(response => {
            if(!response.data.items)
            {
                console.log('no items');
                response.data.items = [];
                this.items = response.data.items;
            }
            else
            {
                console.log(response.data.items);
                this.items = response.data.items;
                this.items.forEach(item => {
                    let tempTot = item.product.price * item.amount;
                    this.total += tempTot;
                    console.log(this.total);
                });
            }
            this.loading = false;
        }).catch(e => {
            console.error(e);
            this.loading = false;
        });
    },
    data() {
        return {
            loading: false,
            items: [],
            title: "Varukorg",
            total: 0
        }
    }
}