<template>

    <div class="home">
        <div class="header">
            <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="">
            <div class="wrapper">

                <input v-model="user_search_restaurant" type="text" placeholder="Rechercher">
                <div class="search">
                    <router-link v-for="(restaurant, i) in search" :key="i" :to="{ name: 'Restaurant', params: { name: restaurant.name }}">
                        <div class="container--restaurant">
                        <div class="wrapper--img">
                            <img :src="restaurant.image" alt="">
                        </div>
                        <p>{{ restaurant.name }}</p>
                    </div>
                    </router-link>

                </div>
            </div>
        </div>
        <div class="bannier"></div>
        <RestaurantRaw v-for="(data, i) in data_restaurant" :key="i" :three_restaurant="data" />
    </div>




</template>

<script>
    import BDD from '../BDD.js'
    import {
        onMounted,
        ref,
        watch
    } from 'vue'

    import RestaurantRaw from '../components/RestaurantRaw.vue'
    export default {
        name: 'HomeView',
        components: {

            RestaurantRaw
        },
        
            

        setup() {
            class Restaurant {
                constructor(name, note, image, drive_time) {
                    this.name = name;
                    this.note = note;
                    this.image = image;
                    this.drive_time = drive_time;
                }
            }

            let data_restaurant = ref([]);
            let all_restaurant = [];

            const makeDataRestaurant = () => {
                let three_restaurant = [];

                for (const restaurant of BDD) {
                    const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image,
                        restaurant.drive_time);
                    all_restaurant.push(new_restaurant);
                    if (three_restaurant.length === 2) {
                        three_restaurant.push(new_restaurant);

                        data_restaurant.value.push(three_restaurant);
                        three_restaurant = [];
                    } else {

                        three_restaurant.push(new_restaurant);

                    }


                }


            }

            //user recherche restau 

            let user_search_restaurant = ref('');
            let search = ref([]);

            watch(user_search_restaurant, (newValue) => {

                let regex = RegExp(newValue.toLowerCase());
                let new_search = all_restaurant.filter(restaurant => regex.test(restaurant.name.toLowerCase()));
                
                if (newValue == 0){
                    search.value = [];
                }
                else{
                    search.value = new_search;

                }


            })


            onMounted(makeDataRestaurant);
            return {
                data_restaurant,
                user_search_restaurant,
                search,


            }
        },
    }
</script>

<style lang="scss">
    .home {
        .header {
            height: 120px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            img {
                width: 200px;
            }

            .wrapper {
                position: relative;

                input {
                    background-color: #f6f6f6;
                    border: none;
                    height: 60px;
                    width: 400px;
                    outline: none;
                    padding-left: 20px;

                }
                .search{
                    position: absolute;
                    top: 100%;
                    width: 100%;
                    
                    background-color: #fff;
                    .container--restaurant{
                        text-decoration: none;
                         color: black;
  
                        display: flex;
                        align-items: center;
                        padding: 10px;
                        .wrapper--img{
                            
                            width: 50px;
                            height: 50px;
                            margin-right: 25px;
                            border-radius: 25%;
                            overflow: hidden;
                            img{
                                height: 100%;
                                width: auto;

                            }
                        }
                    }
                }
            }
        }

        .bannier {
            height: 200px;
            width: 100%;
            background-image: url("https://techcrunch.com/wp-content/uploads/2019/04/uber-eats-banner.jpg");
            background-size: cover;
            background-position: center center;






        }
    }
</style>