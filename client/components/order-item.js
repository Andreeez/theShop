const OrderItemComponent = {

    props: ['order'],
  
    template: `
        <tr>
            <td>{{order.customer}}</td>
            <td>{{order._id}}</td>
            <td>{{order.result.amount}}</td>
        </tr>

    `
  }

