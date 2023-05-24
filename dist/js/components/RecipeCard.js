app.component('recipe-card', {
    //PROPIEDADES DINAMICAS
    props: {
        //similar al set y get
        image: {
            type: String
        },
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
            type: String,
            default: "recipe time"
        },
        level: {
            type: String,
            default: "recipe level"
        },
        likes: {
            type: Number,
            default: 10
        },
        index: {
            type: String
        }
    },
    data() {
        return {
            addLikes: this.likes
        }
    },

    methods: {
        onClickLike() {
            // console.log("Like");
            this.addLikes++;
        },
        onClickDislike() {
            // console.log("dislike");
            if(this.addLikes>0) this.addLikes--;

        },
        onClickViewRecipe() {
            this.$emit('recipedetails', this.index);
            // permite mostrar los datos que ya tiene el card, sin tener que ahcer mas comunicaciones
        },
        
    },

    template:
        /*html*/
        `<div class="card-recipe">
            <img v-bind:src="image" class="card-img-top" alt="featured-recipe">
            <div class="card-body d-flex">
                <h4 class="align-self-center flex-grow-1  mb-0 p-3 fw-bold fst-italic">
                    {{nombre}}</h4>
                <a class="align-self-center me-2 arrow-link" href="./recipe_details.html">
                    <i class="icon-link fa-solid fa-circle-chevron-right me-1"></i>
                </a>
            </div>

            <ul class="list-group list-group-flush">
                <p class="list-group-item p"><i class="fa-solid fa-clock me-3"></i>{{time}}
                </p>
                <p class="list-group-item p"><i class="fa-solid fa-utensils me-3"></i>{{category}}
                </p>
                <p class="list-group-item p"><i class="fa-solid fa-square-check me-3"></i>{{level}}
                </p>
            </ul>
        </div>`
        
})


