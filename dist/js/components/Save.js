app.component('save', {
   

    props: {
        name: {
            type: String,
            default: "recipe name"
        },
        
    },

    template:
        /*html*/
        `
        <div class="modal fade" id="modalSave" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bkg-grey">
                
                <div class="modal-body">
                    <p>La receta {{name}}, ha sido guardada</p> 
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>

                </div>
                </div>
            </div>
        </div>
        `
})


 