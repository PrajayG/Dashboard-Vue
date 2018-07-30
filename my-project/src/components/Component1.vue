<template>
  <html>
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    </head>
    <h1 class="hello"> Welcome to Your Vue.js App</h1>
    <p>{{msg}}</p>
    <router-link to="/dashboard" class="btn btn-primary">
      Go to dashboard
    </router-link>
  </html>
</template>

<script>
export default {
  name: 'Component1',
  data () {
    return {
      msg: 'Welcome to your '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  </style>
