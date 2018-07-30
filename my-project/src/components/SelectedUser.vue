


<template>
  <html>
    <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    
    <div class="container">
        <h1 class="hello"> This is the user view - but the data is still the same</h1>
            <router-link :to="{ path: '/userview', params: { visited: true }}" class="btn btn-primary mb-5">
                Go back
            </router-link>
            <button class="btn btn-primary" v-on:click="loadData()">Load Data</button>
        <div class="container"> 
            <div class="jumbotron">
              <img src="https://picsum.photos/750/200" alt="">
            <h1 class="display-4"> {{ this.user.name }} </h1>
            <p class="lead">{{ this.user.username}}</p>
            <hr class="my-4">
            <p>{{ this.user.website}}</p>
            <p>{{ this.user.company.name}}</p>
            <p>{{ this.user.email}}</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" v-bind:href="this.user.website" role="button">Go to website</a>
            </p>
            </div>
        </div>
    </div>
  </html>
</template>

<script>

import { mapMutations } from 'vuex'
import { mapActions} from 'vuex'



export default {
  props: ['id'], // Don't know if this is actually needed. Works without.
  name: 'UserView',
  data () {
    return {
      creativeId: this.$route.params.id,
      user: ''
    }
  },
  created: function () {
      for (var i = 0; i < this.$store.state.creatives.length; i++) {
        console.log(this.$store.state.creatives[i].id)
        if (this.creativeId == this.$store.state.creatives[i].id) {
          this.user = this.$store.state.creatives[i]
        }
      }
    // axios.get(campaignList).then(response => {
    //   this.$store.state.creatives = response.data //puts the json response into an array of objects 
    // })
  },
  methods: {
    ...mapMutations([
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
