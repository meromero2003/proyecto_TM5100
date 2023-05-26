app.component('recipe-details', {
    // nombre compuesto click counter unido con un guion
    data() {
        return {
            counter: 0,
        }
    },

    props: {
        name: {
            type: String,
        },
        image: {
            type: String,
        },
        ingredients: {
            type: String,
        },
        instructions: {
            type: String,
        }
    },

    // comunicacion entre componentes para hacer comunicacion directa, Sirve para mostrar info, comunicar informacion ya definida.
    // no involucra modificaciones (estas se hacen en component.js)

    methods: {
        onClickPrev() {
            this.$emit('prevrecipe', this.index)
        },
        onClickNext() {
            this.$emit('nextrecipe', this.index)
        }
    },

    template:
        /*html*/
        `
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">

                <div class="modal-content bkg-grey">
                
                    <div class="modal-header">
                    </div>
                    
                    <div class="modal-body">
                    <!--/////////////////////////////////RECIPE////////////////////////////////////-->
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                            <div class="mb-3 bkg-red border-top">
                            <div class="row g-0">
                                <div class="card-body col">
                                    <h2 class="h2-card">{{name}}</h2>
                                    <p class="card-text">Morbi id mi eget arcu ullamcorper luctus. In in tellus porttitor erat sagittis
                                        tincidunt vel vitae felis. Aenean rhoncus diam eget lacus imperdiet, a luctus libero varius. Nunc
                                        eget erat vitae neque finibus consequat euismod quis turpis. Cras eu metus convallis, placerat mi
                                        nec, fringilla arcu. In porttitor gravida est quis vestibulum. Ut diam neque, volutpat quis risus
                                        eu, maximus ultricies dolor. Aenean mattis, ex et venenatis egestas, tortor libero scelerisque sem,
                                        sed iaculis enim quam nec enim. In elit mauris, maximus sed ante ut, porta dignissim ex. Vivamus
                                        dapibus tortor et diam laoreet tincidunt sed et felis.</p>
                                </div>
                                <div class="col-md-4 container-xxl my-4 me-3">
                                <img v-bind:src="image" class="card-img-top" alt="featured-recipe">                                    <div class="row mt-3">
                                        <button type="button" class="col btn btn-outline-warning">
                                            <i class="fa fa-thumbs-up"><span class="fs-6">3478</span></i>
                                        </button>
                                        <button type="button" class="col btn btn-outline-warning">
                                            <i class="fa fa-thumbs-down"><span class="fs-6">9987</span></i>
                                        </button>

                                        <button type="button" class="col btn btn-outline-warning">
                                            <i> 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                            </svg>

                                            </i>
                                        </button>

                                        <button type="button" class="col btn btn-outline-warning">
                                            <i> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                                            </svg></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>


                            <!--/////////////////////////////////RECIPE////////////////////////////////////-->

                            <!--/////////////////////////////////////////DETAILS//////////////////////////////////////////-->
                            <section class="container border-top">
                            <div>
                                <h2 class="mx-auto mb-3 display-4 fw-bold fst-italic display-5 "> Detalles de la Receta </h2>
                            </div>

                            <div class="row mb-5 mt-5">
                                <h4 class="orange border-bottom "> Lista de Ingredientes </h4>
                                <div class="my-4 text-center">
                                    <div class=" mx-auto gy-5">

                                        <div class="row ">
                                            <li class="list-group-item col-6 col-sm-3">
                                                <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
                                                <label class="form-check-label" for="firstCheckbox">{{ingredients}}</label>
                                            </li>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <h4 class="orange border-bottom "> Instrucciones para la Receta</h4>
                                <div class="my-4 text-center">
                                    <div class=" mx-auto gy-5">

                                        <div class="row list-group-numbered">

                                            <li class="list-group-item col-4">{{instructions}}</li>
                                            
                                        </div>
                                    </div>
                                </div>

                            </div>


                            </section>

<!--/////////////////////////////////RECIPE////////////////////////////////////-->
                    </div>

                    <div class="modal-footer">
                            <button type="button" class="btn btn-dark" v-on:click="onClickNext()">Next</button>
                            <button type="button" class="btn btn-dark" v-on:click="onClickPrev()">Prev</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                        >Close</button>
                    </div>
                </div>
            </div>
        </div>`
})


    // <div v -if= "recipes.lenght>1" >
    // <button type="button" class="btn btn-dark" v-on:click="onClickNext()">Next</button>
    // <button type="button" class="btn btn-dark" v-on:click="onClickPrev()">Prev</button>
    // </div >