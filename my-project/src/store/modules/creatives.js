import axios from 'axios';

const state =  {
    creatives: [],
    selectedUser: []
}

const mutations = {
    // mutations are the only way to change data in the store, they take one required argument, the store and an optional
    // second argument. This second argument can also be an object so you can pass multiple parameters through using object 
    // notation
    remove(state, id) {
      this.state.creatives.splice(this.state.creatives.indexOf(id), 1)
    },

    loadData(state, data) {
      this.state.creatives = data
    },

    selectUser(state, id) {
      this.state.selectedUser.push(id)
    }
  }
  
  
const actions =  {
    loadData(context) {
      const userList = "https://jsonplaceholder.typicode.com/users/"
      axios.get(userList).then(response => {
        context.commit('loadData', response.data)
      })
    }
  }

export default { 
    namespaced: true,
    state, 
    actions,
    mutations,
}

