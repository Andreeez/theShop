const CartPageComponent = {

    template: `
    <div id="cartStyle" class="container">
      <div class="row">
        
            <div class="col-6" c>
                <label for="first-name">Förnamn:</label><br/>
                <input name="first-name" v-model="firstName"></input>
                <br/>
                <label for="last-name">Efternamn:</label><br/>
                <input name="last-name" v-model="lastName"></input>
                <br/>
                <label for="adress">Adress:</label><br/>
                <input name="adress" v-model="adress"></input>
                <br/>
                <label for="phonenumber">Telefonnummer:</label><br/>
                <input name="first-name" v-model="phoneNumber"></input>
                <br/>
                <label for="customer-email">Email:</label><br/>
                <input name="customer-email" v-model="customerEmail"></input>
                <br/><br/>
                
            </div>
            <div class="col-6 ">
            
            <cart class="col-6"></cart>
            <button v-on:click="pay">Betala</button>
            <button v-on:click="tom">Töm Varukorg</button>
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
                phoneNumber: this.phoneNumber,
              
            }).then(response => {
                console.log(response);
                alert("Grattis din order är lagd");

            }).catch(error => {
                console.error(error)
            });
        },

        tom: () =>{
            http.delete('/rest/cart', async (req, res) => {
                let tempcart = await Cart.findOne({ _id: req.session.cart });

            });
        }
    }    
}