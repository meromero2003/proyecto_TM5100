app.component('search-btn',{

    methods: {
        onClickKeyWordBtn(){
            this.$emit('selectedkeyword');
            // console.log("keyword button")
        }
    },
    
    template: 
    /*html*/

    `
    <button class="btn  search" v-on:keyword="onClickKeyWordBtn"><i class="fa-solid fa-magnifying-glass" style="color:white;"></i></button>
    `
    

})
