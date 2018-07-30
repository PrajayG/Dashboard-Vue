import Vue from 'vue'
import Router from 'vue-router'
import Component1 from '@/components/Component1'
import Component2 from '@/components/Component2'
import Dashboard from '@/components/Dashboard'
import UserView from '@/components/UserView'
import SelectedUser from '@/components/SelectedUser'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Component1',
      component: Component1
    },
    {
      path: '/second',
      name: 'Component2',
      component: Component2
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/userview',
      name: 'userview',
      component: UserView
    },
    {
      path: '/selecteduser/:id',
      name: 'selecteduser',
      component: SelectedUser
    }
  ]
})
