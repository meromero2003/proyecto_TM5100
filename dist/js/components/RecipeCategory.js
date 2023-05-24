app.component('recipe-category-button', {
    props: {
        name: {
            type: String,
        }
    },
    methods: {
        onClickCategoryButton() {
            console.log(this.name);

            this.$emit('selectedcategory', this.name);
        }
    },
    template:
        /*html*/
        `
        <li class="list-group-item"><a class="list-link" href="#"><i
        class="fa-solid fa-egg me-3"></i>{{name}}</a> </li>
            
        `
})