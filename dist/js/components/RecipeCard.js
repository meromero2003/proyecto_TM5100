app.component('recipe-card', {
    //PROPIEDADES DINAMICAS
    props: {
        //similar al set y get
        image: {
            type: String
        },
        name: {
            type: String,
            default: "recipe name"
        },
        time: {
            type: String,
            default: "recipe time"
        },
        portions: {
            type: String,
            default: "recipe portions"
        },
        level: {
            type: String,
            default: "recipe level"
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
                <h3 class="card-title">{{ name }}</h5>
                <p>{{ time }}</p>
                <p>{{ portions }}</p>
                <p>{{ level }}</p>

                <button class="btn btn-primary">View Recipe</button>
            </div>
        </div>`
})


