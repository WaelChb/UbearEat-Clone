<template>
    <div class="restaurant--raw">
        <h2 class="title"><u>Nos Restaurants :</u> </h2>
        <div class="wrapper--card">
            <restaurant-card v-for="(card, index) in three_restaurant" :info_restaurant="card"  :key="index" />
        </div>
    </div>
  
</template>

<script>

import RestaurantCard from './RestaurantCard.vue';
export default {
    name :"RestaurantRaw",
    components:{
        RestaurantCard,
    },
    props:{
        three_restaurant: Array
    }

}


</script>

<style lang="scss">
.restaurant--raw{
    .title{
        font-size: 2rem;
    }



    .wrapper--card{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        

    }

}

</style>