const app = Vue.createApp({
    data() {
        return {
            loading: true,
            all_recipes: [],
            selectedIndex: 0,
            topRecipes: [],
            hasRecipes: true,
            recipes: [
            

            ],
            categories: [],
            occasions: [],
            levels: [],
            recipe: {},
            search: {
                type: String
            }

        }
    },

    mounted: function () {
        this.all_recipes = this.recipes


        //Categories Options
        axios({
            method: 'get',
            url: 'http://localhost/prueba1/public/api/recipes/categories'
        })
            .then(
                (response) => {
                    // console.log(response.data.meals);
                    let items = response.data;
                    items.forEach((element, index) => {
                        this.categories.push({ id: element.id, name: element.category });
                    });
                    // console.log(this.categories)
                }
            )
            .catch(
                error => console.log(error)
            );

        //Occasions Options
        axios({
            method: 'get',
            url: 'http://localhost/prueba1/public/api/recipes/occasions'
        })
            .then(
                (response) => {
                    // console.log(response.data.meals);
                    let items = response.data;
                    items.forEach((element, index) => {
                        this.occasions.push({ id: element.id, name: element.occasion });
                    });
                    // console.log(this.occasions)
                }
            )
            .catch(
                error => console.log(error)
            );

        //Levels Options
        axios({
            method: 'get',
            url: 'http://localhost/prueba1/public/api/recipes/levels'
        })
            .then(
                (response) => {
                    // console.log(response.data.meals);
                    let items = response.data;
                    items.forEach((element, index) => {
                        this.levels.push({ id: element.id, name: element.level });
                    });
                    // console.log(this.levels)
                }
            )
            .catch(
                error => console.log(error)
            );

        // DEAULT RECIPES https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
        axios({

            method: 'get',
            url: 'http://localhost/prueba1/public/api/recipes/all'
        })
            .then(
                (response) => {
                    let items = response.data;
                    // console.log(items);

                    this.recipes = [];

                    if (items.length > 0) this.loading = false;

                    items.forEach(element => {
                        if (this.recipes.length < 24) {
                            this.recipes.push({
                                id: element.id,
                                name: element.name,
                                image: 'http://localhost/prueba1/public/storage/imgs/' + element.image,
                                category: element.category,
                                time: element.total_time + " mins",
                                level: element.level,
                                likes: element.likes,
                                ingredients: "NA",
                                instructions: "NA",
                            })
                        }
                    });
                }
            )
            .catch(
                error => console.log(error)
            );

        ///TOP RECIPES
        axios({

            method: 'get',
            url: 'http://localhost/prueba1/public/api/recipes/top10'
        })
            .then(
                (response) => {
                    let items = response.data;
                    // console.log(items);

                    items.forEach(element => {
                        if (this.topRecipes.length < 10) {

                            this.topRecipes.push({
                                id: element.id,
                                name: element.name,
                                image: 'http://localhost/prueba1/public/storage/imgs/' + element.image,
                                category: element.category,
                                time: element.total_time + " mins",
                                level: element.level,
                                likes: element.likes,
                                ingredients: "NA",
                                instructions: "NA",
                            })
                        }
                    });
                    // console.log(this.topRecipes);
                    // console.log(this.topRecipes[0].name);
                }
            )
            .catch(
                error => console.log(error)
            );

    },
    // mounted es para hacer la copia de respaldo en all recipes con la info de recipes

    methods: {


        onClickRecipeDetails(index) {

            // GET RECIPE DETAILS
            axios({

                method: 'get',
                url: 'http://localhost/prueba1/public/api/recipes/recipe/' + index
            })
                .then(
                    (response) => {
                        let item = response.data;
                        console.log(item);

                        this.recipe.id = item[0][0].id;
                        this.recipe.image = 'http://localhost/prueba1/public/storage/imgs/' + item[0][0].image;
                        this.recipe.name = item[0][0].name;
                        this.recipe.description = item[0][0].description;
                        this.recipe.category = item[0][0].category;
                        this.recipe.time = item[0][0].total_time;
                        this.recipe.level = item[0][0].level;
                        this.recipes.likes = item[0][0].likes;
                        this.recipe.instructions = item[0][0].preparation_instructions;

                        let ingredientsList="";
                        for (let i = 0; i <= item[1].length-1; i++) {
                            ingredientsList+= i +" "+ item[1][i].description+ "-"+ item[1][i].amount+ "-"+ item[1][i].measurement_unit;
                        }
                        this.recipe.ingredients= ingredientsList;

                        console.log(item[1].length-1)
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },

        onClickRecipeLike(index) {
            this.recipes[index].likes += 1;

        },

        onClickRecipeDislike(index) {
            if (this.recipes[index].likes > 0) this.recipes[index].likes -= 1;
        },

        onClickPrevRecipe(index) {
            this.selectedIndex--;
            if (this.selectedIndex < 0) {
                this.selectedIndex = this.recipes.length - 1
            }
        },

        onClickNextRecipe(index) {
            this.selectedIndex++;
            if (this.selectedIndex > this.recipes.length - 1) {
                this.selectedIndex = 0;
            }
        },

        onClickSelectedCategory(id) {
            axios({
                // GET ALL RECIPES BY CATEGORY FROM API
                method: 'get',
                url: 'http://localhost/prueba1/public/api/recipes/filterby/category/' + id
            })
                .then(
                    (response) => {
                        let items = response.data;
                        // console.log(items);
                        this.recipes = [];

                        items.forEach(element => {
                            this.recipes.push({
                                id: element.id,
                                name: element.name,
                                image: 'http://localhost/prueba1/public/storage/imgs/' + element.image,
                                category: element.category,
                                time: element.total_time + " mins",
                                level: element.level,
                                likes: element.likes,
                                ingredients: "NA",
                                instructions: "NA",
                            })
                        });
                    }
                )
                .catch(
                    error => console.log(error)
                )
        },

        onClickSelectedOcassions(id) {
            axios({
                // GET ALL RECIPES BY OCCASION FROM API
                method: 'get',
                url: 'http://localhost/prueba1/public/api/recipes/filterby/occasion/' + id
            })
                .then(
                    (response) => {
                        let items = response.data;
                        // console.log(items);
                        this.recipes = [];

                        items.forEach(element => {
                            this.recipes.push({
                                id: element.id,
                                name: element.name,
                                image: 'http://localhost/prueba1/public/storage/imgs/' + element.image,
                                category: element.category,
                                time: element.total_time + " mins",
                                level: element.level,
                                likes: element.likes,
                                ingredients: "NA",
                                instructions: "NA",
                            })
                        });
                    }
                )
                .catch(
                    error => console.log(error)
                )
        },

        onClickSelectedLevels(id) {
            axios({
                // GET ALL RECIPES BY OCCASION FROM API
                method: 'get',
                url: 'http://localhost/prueba1/public/api/recipes/filterby/level/' + id
            })
                .then(
                    (response) => {
                        let items = response.data;
                        // console.log(items);
                        this.recipes = [];

                        items.forEach(element => {
                            this.recipes.push({
                                id: element.id,
                                name: element.name,
                                image: 'http://localhost/prueba1/public/storage/imgs/' + element.image,
                                category: element.category,
                                time: element.total_time + " mins",
                                level: element.level,
                                likes: element.likes,
                                ingredients: "NA",
                                instructions: "NA",
                            })
                        });
                    }
                )
                .catch(
                    error => console.log(error)
                )
        },



        onClickSelectedKeyWord() {

            console.log("onClickKeyWord");
            let recipename = document.getElementById("recipeword").value;
            console.log(recipename);

            axios({
                // GET  RECIPES BY name FROM API
                method: 'get',
                url: 'http://localhost/prueba1/public/api/recipes/searchbyname/' + recipename
            })
                .then(
                    (response) => {
                        let items = response.data;
                        console.log(items);
                        this.recipes = [];

                        items.forEach(element => {
                            this.recipes.push({
                                id: element.id,
                                name: element.name,
                                image: 'http://localhost/prueba1/public/storage/imgs/' + element.image,
                                category: element.category,
                                time: element.total_time + " mins",
                                level: element.level,
                                likes: element.likes,
                                ingredients: "NA",
                                instructions: "NA",
                            })
                        });
                    }
                )
                .catch(
                    error => console.log(error)
                );


        }





    },
})


// propiedad global. con libreria agregada para comunicacion entre componentes
const emitter = mitt();
// hay que ingresar el objeto emitter en la aplicacion 
app.config.globalProperties.$test = emitter;