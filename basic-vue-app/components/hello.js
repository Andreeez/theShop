const HelloComponent = {

  template: `
    <div>
      <h2>{{title}}</h2>
      <p>{{description}}</p>
    </div>
  `,
  data(){
    return{
      title: "Welcome to The Magazine Store",
      description: "The greatest mag store on the east side"
    }
  }

}