<template>
  <html>
    <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="">
    </head>
    <div class="container">
    <h1 class="hello"> Welcome to the dashboard</h1>
      <div class="buttons mb-5">
        <button class="btn btn-red">Add campaign</button>

        <router-link to="/userview" class="btn btn-primary">
          Go to new view
        </router-link>

        <button class="btn btn-primary" v-on:click="loadData()">Load Data</button>
        </div>
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">User Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in this.$store.state.creatives" :key="item.id">
                        <th class="align-middle"> {{ item.id}} </th>
                        <th class="align-middle"> {{ item.name}} </th>
                        <th class="align-middle"> {{ item.username}} </th>
                        <th class="align-middle"> {{ item.email}} </th>
                        <th class="align-middle"> <div class="btn btn-danger" v-on:click="remove(item)">remove</div></th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

  </html>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
const campaignList = 'https://jsonplaceholder.typicode.com/users/'

export default {
  
  name: 'Dashboard',
  data () {
    return {
      number: 1
    }
  }, 
  created: function () {
    if (this.$store.state['creatives'].length === undefined) {
      console.log('hello')
      this.loadData()
    }
  },

  methods: {
    ...mapMutations('creatives', [
      'remove'
    ]),
    ...mapActions('creatives', [
      'loadData'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>
