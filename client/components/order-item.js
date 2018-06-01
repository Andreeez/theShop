const OrderItemComponent = {

    props: ['order'],
  
    template: `
        <tr>
            <td scope="row">{{order.customer}}</td>
            <td>{{order._id}}</td>
            <td>{{order.result.amount}}</td>
        </tr>

    `
  }

