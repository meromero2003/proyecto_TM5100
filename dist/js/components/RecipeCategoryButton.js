app.component('recipe-category-button', {
    props:{
        name:{
            type:String,
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
        `<button class="btn btn-dark" >{{name}}</button>`
})