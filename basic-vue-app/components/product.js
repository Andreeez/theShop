const ProductComponent = {

  props: ['item'],

  template: `
    <div>
      <h2>{{item.name}}</h2>
      <div>{{item.price}}kr</div>
      <p v-html="item.description"></p>
    </div>
  `

}
