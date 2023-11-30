<template>
  <router-link to="/">

    <div id="return">Retour home </div>
  </router-link>
  <div>
    <img :src="restaurant.image">
  </div>
  <p>{{ restaurant.name }}</p>
  <p>note du resto {{ restaurant.note }}</p>
  <p>temps de livraison  {{ restaurant.drive_time }}</p>
</template>

<script>
import BDD from '../BDD';

import { useRoute } from 'vue-router'


export default {
    name: 'RestaurantPage',
    setup (){
      const route = useRoute()
      const restaurant = BDD.find((restaurant) => restaurant.name === route.params.name )
      
      return {
        restaurant
      }
    
    }

}
</script>

<style lang="scss" scoped>
#return{
  margin: 25px 45px;
  font-weight: 400px;
  text-decoration: none;
  color: black;
  
  &:hover {
    font-weight: 900;
    cursor: pointer;
  }
}

</style>