const HomePageComponent = {

    template: `
      <div class="row">
        <hello class="col-12"></hello>
        <h1 class="col-12">Nyheter</h1>
        <product-page v-bind:slice="3"></product-page>
      </div>
    `
  }