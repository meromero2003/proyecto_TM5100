app.component('recipe-category', {
    props: {
        name: {
            type: String,
        },
        id: {
            type: Number,
        }
    },
    methods: {
        onClickCategory() {
            // console.log(this.id);

            this.$emit('selectedcategory', this.id);
        }
    },
    template:
        /*html*/
        `
        <li class="list-group-item" v-on:click="onClickCategory"><a class="list-link"><i
        class="fa-solid fa-egg me-3" ></i>{{name}}</a> </li>
            
        `
})