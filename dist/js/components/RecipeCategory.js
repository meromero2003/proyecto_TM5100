app.component('recipe-category', {
    props: {
        name: {
            type: String,
        }
    },
    methods: {
        onClickCategory() {
            // console.log(this.name);

            this.$emit('selectedcategory', this.name);
        }
    },
    template:
        /*html*/
        `
        <li class="list-group-item" v-on:click="onClickCategory"><a class="list-link"><i
        class="fa-solid fa-egg me-3" ></i>{{name}}</a> </li>
            
        `
})