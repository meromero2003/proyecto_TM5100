const app = Vue.createApp({
    data(){
        return{
            title: "Grillthrilling",
            image: "./images/header.jpg",
            likes: 15,
            recipes: [
                {id: 101,image: "./images/header.jpg", name: "Satay sweet potato vegan curry", category: "Lunch", time: "20 mins", level: "Easy", likes:98 },
                {id: 102,image: "./images/header.jpg", name: "Satay sweet potato vegan curry", category: "Desserts", time: "20 mins", level: "Easy", likes:129 },
                {id: 103,image: "./images/header.jpg", name: "Satay sweet potato vegan curry", category: "Fast Food", time: "20 mins", level: "Easy", likes:67 },
                {id: 104,image: "./images/header.jpg", name: "Satay sweet potato vegan curry", category: "Breackfast", time: "20 mins", level: "Easy", likes:16 }
            ]
        }//especificamos como se llaman las propiedades y que valores tienen
        //donde agregamos los datos (propiedades) que tienen un RETURN
    }
});