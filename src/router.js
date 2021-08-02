import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    base: './',
    routes: [
        {
            path: "/",
            redirect: "/menu/one"
        },{
            path: "/menu",
            name: "menu",
            component: () => import(/* webpackChunkName: "group-menu" */'./layouts/menuLayout/index'),
            children: [{
                path: "one",
                name: "首页",
                component: () => import(/* webpackChunkName: "group-menu" */'./view/two')
            }]
        }
    ]
});