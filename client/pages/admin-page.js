const AdminPageComponent = {

    template: `
        <div id="adminPage" class="container">
            <div class="row">
               <h1 class="col-12">Admin</h1>
               </br>
               </br>
               </br>
               
               <admin-product class="col-6"></admin-product>
               <admin-new-cat class="col-6"></admin-new-cat>
               
            </div>
            <div class="row">
            <admin-order class="col-12"></admin-order>
            </div>
        </div>

      `
}