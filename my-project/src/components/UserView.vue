<template>
  <html>
    <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    
    <div class="container">
        <h1 class="hello"> This is the user view - but the data is still the same</h1>
            <router-link :to="{ path: 'dashboard', params: { visited: true }}" class="btn btn-primary mb-5">
                Go back
            </router-link>
            <button class="btn btn-primary" v-on:click="loadData()">Load Data</button>
        <div class="container">
            <div class="card-deck" >
                <div class="card m-2 w-50" v-for="item in this.$store.state.creatives" :key="item.id" style="width: 100px;">
                    <img class="card-img-top" src="https://picsum.photos/286/180" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <p class="card-text"> {{ item.id}} </p>
                        <p class="card-text">{{ item.company.catchPhrase}}</p>
                    </div>
                    <div class="card-footer">
                        <!-- <div class="btn" :to="'/selecteduser/' + item.id"> CLICK ME</div>
                        :to="'/selecteduser/' + item.id" -->
                         <router-link :to="'/selecteduser/' + item.id" class="btn btn-primary"> Explore Profile</router-link>
                         <!-- <router-link :to="{path: 'selecteduser', params: { id: 23 }}" class="btn btn-primary"> Explore Profile</router-link> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
  </html>
</template>

<script>
import axios from 'axios'
const campaignList = 'https://jsonplaceholder.typicode.com/users/'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
  
  name: 'UserView',
  data () {
    return {
      number: 1
    }
  },
  created: function () {
    // axios.get(campaignList).then(response => {
    //   this.$store.state.creatives = response.data //puts the json response into an array of objects 
    // })
  },
  methods: {
    ...mapMutations([
      'selectUser'
    ]),
    ...mapActions([
        'loadData'
    ])

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .card-deck .card {
    min-width: 200px;
    max-width: 200px;
} 


</style>
