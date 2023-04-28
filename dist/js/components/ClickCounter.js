app.component('click-counter', {
    // nombre compuesto click counter unido con un guion
    data() {
        return {
            counter: 0,
        }
    },
    template:
        /*html*/
        `<button class= 'btn btn-primary' v-on:click= 'counter++'> {{ counter }}</button>`
})


//TERCERA FORMA