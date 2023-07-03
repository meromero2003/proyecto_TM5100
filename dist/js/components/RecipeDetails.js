app.component('recipe-details', {

    data() {
        return {
            counter: 0,
            search:""
        }
    },

    props: {
        category: {
            type: String,
            default: "recipe category"
        },
        name: {
            type: String,
            default: "recipe name"
        },
        description: {
            type: String,
            default: "recipe description"
        },
        time: {
            type: Number,
            default: 10
        },
        level: {
            type: String,
            default: "recipe level"
        },
        image: {
            type: String,
        },
        ingredients: {
            type: String,
        },
        instructions: {
            type: String,
        },
        likes: {
            type: Number,
            default: 10
        },

    },

    // comunicacion entre componentes para hacer comunicacion directa, Sirve para mostrar info, comunicar informacion ya definida.
    // no involucra modificaciones (estas se hacen en component.js)

    data() {
        return {
            addLikes: this.likes
        }
    },

    methods: {

        onClickLike() {
            this.addLikes++;
        },
        onClickDislike() {
            if (this.addLikes > 0) this.addLikes--;

        },
    },

    template:
        /*html*/
        `
        <div class="modal fade" id="modalDetails" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">

            <div class="modal-dialog modal-xl">

                <div class="modal-content bkg-grey">
              
                    <div class="modal-body">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="row">
                    <!--/////////////////////////////////RECIPE////////////////////////////////////-->

                            <div class="col mb-3 bkg-red border-top">
                                <div class="row g-0">
                                    <div class="card-body col">
                                        <h2 class="h2-card">{{name}}</h2>
                                        <p class="card-text">{{description}}</p>
                                    </div>
                                    <div class="col-md-4 container-xxl my-4 me-3">
                                        <img v-bind:src="image" class="card-img-top" alt="featured-recipe">                                    <div class="row mt-3">
                                            <button type="button" class="col btn btn-outline-warning" disabled>
                                                <i><span class="fs-6">{{this.addLikes}}</span></i>
                                            </button>
                                            <button type="button" class="col btn btn-outline-warning" v-on:click="onClickLike()">
                                                <i class="fa fa-thumbs-up"><span class="fs-6"></span></i>
                                            </button>
                                            <button type="button" class="col btn btn-outline-warning" v-on:click="onClickDislike()">
                                                <i class="fa fa-thumbs-down"><span class="fs-6"></span></i>
                                            </button>

                                            <button type="button" class="col btn btn-outline-warning" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#modalSave">
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
                            <section class="col container border-top">
                            <div>
                                <h2 class="mx-auto mb-3 display-4 fw-bold fst-italic display-5 "> Detalles de la Receta </h2>
                                <div class="row">
                                    <p class="col list-group-item p"><i class="fa-solid fa-clock me-3"></i>{{time}}mins
                                    </p>
                                    <p class="col list-group-item p"><i class="fa-solid fa-utensils me-3"></i>{{category}}
                                    </p>
                                    <p class="col list-group-item p"><i class="fa-solid fa-square-check me-3"></i>{{level}}
                                    </p>
                                </div>
                            </div>

                            <div class="row mb-5 mt-5">
                                <h4 class="orange border-bottom "> Lista de Ingredientes </h4>
                                <div class="my-4 text-center">
                                    <div class=" mx-auto gy-5">

                                        <label class="form-check-label">{{ingredients}}</label>

                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <h4 class="orange border-bottom "> Instrucciones para la Receta</h4>
                                <div class="my-4 text-center">
                                    <div class=" mx-auto gy-5">

                                            <li class="list-group-item">{{instructions}}</li>
                                            
                                       
                                    </div>
                                </div>

                            </div>


                            </section>
                            </div>


                            <div>
                            <h4 class="orange border-bottom "> Recetas Relacionadas </h4>
                            <div class="row">
                                    <p class="col list-group-item p"><i class="fa-solid fa-clock me-3"></i>{{time}}mins
                                    </p>
                                    <p class="col list-group-item p"><i class="fa-solid fa-utensils me-3"></i>{{category}}
                                    </p>
                                    <p class="col list-group-item p"><i class="fa-solid fa-square-check me-3"></i>{{level}}
                                    </p>
                                </div>
                            </div>

                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>

               
                </div>
            </div>
        `
})


    // <div v -if= "recipes.lenght>1" >
    // <button type="button" class="btn btn-dark" v-on:click="onClickNext()">Next</button>
    // <button type="button" class="btn btn-dark" v-on:click="onClickPrev()">Prev</button>
    // </div >