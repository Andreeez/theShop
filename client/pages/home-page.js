const HomePageComponent = {

    template: `
    
      <div id="startPage" class="row">
      <h1 class="col-12">Välkommen till den magnifika skidshoppen!</h1>
      <p class="col-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Proin enim libero, cursus at eros quis, faucibus fermentum erat.
        In semper dui at libero varius, nec pharetra augue viverra.
         In pharetra ultricies massa eget blandit. Pellentesque pellentesque rhoncus faucibus.
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <h2 class="col-12">Info</h2>
      <p class="col-10">
      In semper dui at libero varius, nec pharetra augue viverra.
      In pharetra ultricies massa eget blandit. Pellentesque pellentesque rhoncus faucibus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

</br>
</br>
</br>
</br>


        <h1 class="col-12">Nyheter</h1>
        <product-page v-bind:slice="3"></product-page>

      </div>
     
    `
  }
  // <hello class="col-12"></hello>
