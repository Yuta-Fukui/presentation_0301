import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index.vue'
import check from '@/pages/check.vue'
import fight from '@/pages/fight.vue'
import hoge from '@/pages/hoge.vue'
import val from '@/pages/val.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/check',
      name: 'check',
      component: check
    },
    {
      path: '/fight',
      name: 'check',
      component: fight
    },
    {
      path: '/hoge',
      name: 'check',
      component: hoge
    },
    {
      path: '/val',
      name: 'check',
      component: val

    }
  ]
})
