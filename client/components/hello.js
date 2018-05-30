const HelloComponent = {

  template: `
    <div class="card-body">
      <h1>{{title}}</h1>
      <p>{{description}}</p>
    </div>
  `,
  data(){
    return{
      title: "Den magnifika Skidbutiken",
      description: "Den bästa skidshopen för de bästa skidåkarna"
    }
  }

}