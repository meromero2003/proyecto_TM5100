app.component('login', {
   

    methods: {
        onClickLoginBtn(){
            this.$emit('login')            
            console.log("login")
        }
        
        
    },

    template:
        /*html*/
        `
        <div class="modal fade" id="modalLogin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bkg-grey">
                
                <div class="modal-body">
                    Has iniciado sesión correctamente
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" v-on:click='onClickLoginBtn'><a href="./index.html">Close</a></button>
                </div>
                </div>
            </div>
        </div>
        `
})


 