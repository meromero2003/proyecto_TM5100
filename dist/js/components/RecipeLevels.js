app.component('recipe-levels', {
    props: {
        name: {
            type: String,
        },
        id: {
            type: Number,
        }
    },
    methods: {
        onClickLevels() {
            // console.log(this.id);

            this.$emit('selectedlevels', this.id);
        }
    },
    template:
        /*html*/
        `
        <li class="list-group-item" v-on:click="onClickLevels"><a class="list-link"><i
        class="fa-solid fa-egg me-3" ></i>{{name}}</a> </li>
            
        `
})