const OrderAdminComponent = {
    template: `
      <div class="card-body">
        <h2>Visa order</h2>
        <table>
        <tr>
          <th>Kundid:</th>
          <th>Orderid:</th>
          <th>Totalsumma</th>
        </tr>
        <order-item v-if="!loading"
              v-for="order in orders"
              v-bind:order="order"
              v-bind:key="order._id">
              </order-item>
      </table>
      </div>
    `,

    created(){
        // ladda in litta data
        this.loading = true;
        http.get('/rest/order').then(response => {
          console.log(response.data)
          this.orders = response.data;
          this.loading = false;
        }).catch(e => {
          console.error(e);
          this.loading = false;
        });
      },
      data(){
        return{
          loading: false,
          orders: [],
         
        }
      }

  }
  
  
  