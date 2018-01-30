import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/margin0auto',
            name: 'HelloWorld',
            component: resolve => require(['../views/Margin0Auto'], resolve)
        },
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
})
