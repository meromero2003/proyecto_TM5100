app.component('recipe-category', {
    props: {
        name: {
            type: String,
        }
    },
    methods: {
        onClickCategory() {
            console.log(this.name);

            this.$emit('selectedcategory', this.name);
        }
    },
    template:
        /*html*/
        `
        <li class="list-group-item"><a class="list-link" href="#"><i
        class="fa-solid fa-egg me-3" v-on:click="onClickCategory"></i>{{name}}</a> </li>
            
        `
})