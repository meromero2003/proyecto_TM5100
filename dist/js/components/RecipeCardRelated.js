app.component('recipe-cardRelated', {
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
        occasion: {
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
        preptime: {
            type: String,
            default: "recipe time"
        },
        cooktime: {
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
            type: Number
        },
        related: {
            type: Object,
            
        },
        
    },
    data() {
        return {
            addLikes: this.likes
        }
    },

    methods: {
     
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
                <h5 class="align-self-center flex-grow-1  mb-0 p-3 fw-bold fst-italic">
                    {{name}}</h5>
                
            </div>

            <ul class="list-group list-group-flush">
                <p class="list-group-item p"><i class="fa-solid fa-clock me-3"></i>{{time}}</p>
                <p class="list-group-item p"><i class="fa-solid fa-utensils me-3"></i>{{category}}</p>
                <p class="list-group-item p"><i class='fas fa-glass-cheers me-3' style='color: white'></i>{{occasion}}</p>
                <p class="list-group-item p"><i class="fa-solid fa-square-check me-3"></i>{{level}}</p>
            </ul>
        </div>`
        
})


