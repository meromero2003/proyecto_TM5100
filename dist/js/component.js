const app = Vue.createApp({
    data() {
        return {
            loading: true,
            all_recipes: [],
            selectedIndex: 0,
            topRecipes: [],
            savedRecipes: [],
            likedRecipes: [],
            userInfo: [],
            hasRecipes: true,
            recipes: [],
            categories: [],
            occasions: [],
            levels: [],
            recipe: {},
            variableUserId: "",
            variableAccess:"",
            search: {
                type: String
            },
            username:localStorage.getItem("username"),
            useremail:localStorage.getItem("useremail"),
            usercountry:localStorage.getItem("usercountry"),
            userlastname:localStorage.getItem("userlastname"),

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
                                occasion: element.occasion,
                                time: element.total_time + " mins",
                                preptime: element.preparation_time + " mins",
                                cooktime: element.cooking_time + " mins",
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
                                occasion: element.occasion,
                                time: element.total_time + " mins",
                                preptime: element.preparation_time + " mins",
                                cooktime: element.cooking_time + " mins",
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

        ///SAVED RECIPES
        axios({

            method: 'get',
            url: 'http://localhost/prueba1/public/api/users/savedrecipes/'+ localStorage.getItem('userid')
        })
            .then(
                (response) => {
                    let items = response.data;
                    // console.log(items);

                    items.forEach(element => {

                            this.savedRecipes.push({
                                id: element.id,
                                name: element.name,
                                image: 'http://localhost/prueba1/public/storage/imgs/' + element.image,
                                category: element.category,
                                occasion: element.occasion,
                                time: element.total_time + " mins",
                                preptime: element.preparation_time + " mins",
                                cooktime: element.cooking_time + " mins",
                                level: element.level,
                                likes: element.likes,
                                ingredients: "NA",
                                instructions: "NA",
                            })
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
                        // console.log(item);

                        this.recipe.id = index;
                        this.recipe.image = 'http://localhost/prueba1/public/storage/imgs/' + item[0][0].image;
                        this.recipe.name = item[0][0].name;
                        this.recipe.description = item[0][0].description;
                        this.recipe.category = item[0][0].category;
                        this.recipe.occasion = item[0][0].occasion;
                        this.recipe.time = item[0][0].total_time;
                        this.recipe.preptime = item[0][0].preparation_time;
                        this.recipe.cooktime = item[0][0].cooking_time;
                        this.recipe.level = item[0][0].level;
                        this.recipe.likes = item[0][0].likes;
                        this.recipe.instructions = item[0][0].preparation_instructions;

                        let ingredientsList = "";
                        for (let i = 0; i <= item[1].length - 1; i++) {
                            ingredientsList += i + " " + item[1][i].description + "-" + item[1][i].amount + "-" + item[1][i].measurement_unit;
                        }
                        this.recipe.ingredients = ingredientsList;

                        let relatedRecipes = [];

                        relatedRecipes[0] = item[2][0];
                        relatedRecipes[0].image='http://localhost/prueba1/public/storage/imgs/' + item[2][0].image;
                        relatedRecipes[0].time=item[2][0].total_time + " mins";
                        
                        relatedRecipes[1] = item[2][1];
                        relatedRecipes[1].image='http://localhost/prueba1/public/storage/imgs/' + item[2][1].image;
                        relatedRecipes[1].time=item[2][1].total_time + " mins";
                        
                        relatedRecipes[2] = item[2][2];
                        relatedRecipes[2].image='http://localhost/prueba1/public/storage/imgs/' + item[2][2].image;
                        relatedRecipes[2].time=item[2][2].total_time + " mins";
                        
                        relatedRecipes[3] = item[2][3];
                        relatedRecipes[3].image='http://localhost/prueba1/public/storage/imgs/' + item[2][3].image;
                        relatedRecipes[3].time=item[2][3].total_time + " mins";
                        
                        this.recipe.related = relatedRecipes;


                        // console.log(this.recipe.id)
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },

        onClickLogin() {
            // LOGIN
            event.preventDefault();
            console.log("login");
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            console.log(email);
            console.log(password);

            axios({

                method: 'post',
                url: 'http://prueba1.test/api/users/login?email=' + email + '&password=' + password
            })
                .then(
                    (response) => {
                        let item = response.data;
                        console.log(item);
                        if(item.user.profiles_id==2){

                            accessToken=item.accessToken;
                            localStorage.setItem('access',item.accessToken);
                            localStorage.setItem('userid',item.user.id);
                            localStorage.setItem('username',item.user.name);
                            localStorage.setItem('useremail',item.user.email);
                            localStorage.setItem('usercountry',item.user.country);
                            localStorage.setItem('userlastname',item.user.last_name);
                            
                            this.variableUserId=localStorage.getItem('userid')
                            console.log("variable user id "+this.variableUserId)
                            window.location.href = './index.html'
                            

                        }else{
                            accessToken=item.accessToken;
                            localStorage.setItem('access',item.accessToken);
                            localStorage.setItem('userid',item.user.id);
                            
                            this.variableUserId=localStorage.getItem('userid')
                            console.log("variable user id "+this.variableUserId)
                            window.location.href = 'http://localhost/prueba1/public/recipes'

                        }

                    }
                )
                .catch(
                    error => console.log(error)
                );
        },

        onClickLogout() {
            // LOGIN
            event.preventDefault();
            console.log("logout");
            //            
            axios({
                method: 'get',
                url: 'http://localhost/prueba1/public/api/users/logout',
                headers:{'Authorization' : `Bearer ${localStorage.getItem('access')}`}
              }).then(
                  (response) => {
                    console.log(response)
                    window.location.href='./login.html'
                  }
              ).catch(
                  error => console.log(error)
              );
        },

        onClickRegister() {
            // LOGIN
            event.preventDefault();
            console.log("register");
            let name = document.getElementById("name").value;
            let lastName = document.getElementById("lastName").value;
            let country = document.getElementById("country").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            // console.log(name);
            // console.log(lastName);
            // console.log(country);
            // console.log(email);
            // console.log(password);

            axios({

                method: 'post',
                url: 'http://localhost/prueba1/public/api/users/register?name=' + name + '&last_name=' + lastName + '&country=' + country + '&email=' + email + '&password=' + password
            })
                .then(
                    (response) => {
                        let item = response.data;
                        console.log(item);
                        let token =
                            window.location.href = './login.html'

                    }
                )
                .catch(
                    error => console.log(error)
                );
        },

        onClickRecipeLike(recipeId) {
            event.preventDefault();
            console.log(recipeId, localStorage.getItem('userid'));


            axios({

                method: 'get',
                url: 'http://localhost/prueba1/public/api/users/likes/' + localStorage.getItem('userid') + '/' + recipeId
            })
                .then(
                    (response) => {
                        let item = response.data;
                        console.log(item);
                        
                        // window.location.href = './index.html'

                    }
                )
                .catch(
                    error => console.log(error)
                );
        },

        onClickRecipeSave(recipeId) {
            event.preventDefault();
            console.log(recipeId, localStorage.getItem('userid'));


            axios({

                method: 'get',
                url: 'http://localhost/prueba1/public/api/users/saverecipe/' + localStorage.getItem('userid') + '/' + recipeId
            })
                .then(
                    (response) => {
                        let item = response.data;
                        console.log(item);
                        
                        // window.location.href = './index.html'

                    }
                )
                .catch(
                    error => console.log(error)
                );
        },

        onClickRecoverPassword() {
            event.preventDefault();
            let email = document.getElementById("email").value;
            console.log(email);


            axios({

                method: 'post',
                url: 'http://localhost/prueba1/public/api/users/recoverpassword?email=' + email
            })
                .then(
                    (response) => {
                        let item = response.data;
                        console.log(item);
                        
                        // window.location.href = './index.html'

                    }
                )
                .catch(
                    error => console.log(error)
                );
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
                                occasion: element.occasion,
                                time: element.total_time + " mins",
                                preptime: element.preparation_time + " mins",
                                cooktime: element.cooking_time + " mins",
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
                                occasion: element.occasion,
                                time: element.total_time + " mins",
                                preptime: element.preparation_time + " mins",
                                cooktime: element.cooking_time + " mins",
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
                                occasion: element.occasion,
                                time: element.total_time + " mins",
                                preptime: element.preparation_time + " mins",
                                cooktime: element.cooking_time + " mins",
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
            event.preventDefault();
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
                                occasion: element.occasion,
                                time: element.total_time + " mins",
                                preptime: element.preparation_time + " mins",
                                cooktime: element.cooking_time + " mins",
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