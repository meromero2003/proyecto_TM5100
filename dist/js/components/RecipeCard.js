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
        }
    },

    // nombre compuesto click counter unido con un guion
    data() {
        return {
            counter: 0,
        }
    },
    template:
        /*html*/
        `<div class="card">
            <img v-bind:src="image" class="card-img-top" alt="featured-recipe">
            <div class="card-body">
                <p>{{ category }}</p>
                <h5 class="card-title">{{ name }}</h5>
                <p>{{ description }}</p>
                <p>{{ time }}</p>
                <p>{{ level }}</p>
                <p>{{ likes }}</p>

                <button class="btn btn-danger">Like</button>
                <button class="btn btn-dark">Dislike</button>
                <button class="btn btn-primary">View Recipe</button>
                <!-- v-on:click="onClickLike"// evento al que llama en el main js -->
            </div>
        </div>`
})


