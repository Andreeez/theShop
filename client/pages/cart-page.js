const CartPageComponent = {

    template: `
      <div class="row">
        <div class="col-12 card-body">
        <h1>Kundvagn</h1>
        <cart class="col-12"></cart>
            <div class="col-12">
                <label for="first-name">Förnamn:</label>
                <input name="first-name" v-model="firstName"></input>
                <label for="last-name">Efternamn:</label>
                <input name="last-name" v-model="lastName"></input>
                <label for="adress">Adress:</label>
                <input name="adress" v-model="adress"></input>
                <label for="phonenumber">Telefonnummer:</label>
                <input name="first-name" v-model="phoneNumber"></input>
                <label for="customer-email">Email:</label>
                <input name="customer-email" v-model="customerEmail"></input>
                <button v-on:click="pay">Betala</button>
            </div>
        </div>
      </div>
    `
    ,
  

    data(){
        return{
            firstName: '',
            lastName: '',
            adress: '',
            phoneNumber: '',
            customerEmail: ''
        }
    },

    methods: {
        
        pay: () =>{
            console.log('pay');

            http.post('/rest/pay', {
                firstName: this.firstName,
                lastName: this.lastName,
                adress: this.adress,
                phoneNumber: this.phoneNumber
              }).then(response => {
                console.log(response);

              }).catch(error => {
                console.error(error)
              });
            }
          }    
    }

  