import Vue from 'vue'
import Router from 'vue-router'
import Index from './index.vue'
import Child from './index-child.vue'

Vue.use(Router)
 const router = new Router({
    routes:[
        {
            path:'/index',
            name: 'index',
            component:Index,
            children:[
                {
                    path:'child',
                    name:'child',
                    component:Child
                }
            ]
        }
    ]
})
export default router;