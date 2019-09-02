import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import user from '@/components/user'
import song from '@/components/song'
import singer from '@/components/singer'
import nave from '@/components/nave'
import addSinger from '@/components/addSinger'
import load from '@/components/load'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:load,
      name:load
    },
    {
      path: '/nave',
      component:nave,
      children:[
        {
          path: '/nave',
          redirect:{
            name: 'index',
          },
          component: index
        },
        {
          path: '/index',
          name: 'index',
          component: index
        },
        {
          path: '/user',
          name: 'user',
          component: user
        },
        {
          path: '/song',
          name: 'song',
          component: song
        },
        {
          path: '/addSinger',
          name: 'addSinger',
          component: addSinger
        },
        {
          path: '/singer',
          name: 'singer',
          component: singer
        }]
    }
  ]
})
