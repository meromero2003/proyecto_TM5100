app.component('recipe-occasions', {
    props: {
        name: {
            type: String,
        },
        id: {
            type: Number,
        }
    },
    methods: {
        onClickOccasions() {
            // console.log(this.id);

            this.$emit('selectedoccasions', this.id);
        }
    },
    template:
        /*html*/
        `
        <li class="list-group-item" v-on:click="onClickOccasions"><a class="list-link"><i
        class="fa-solid fa-egg me-3" ></i>{{name}}</a> </li>
            
        `
})