import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './test2.vue'
import Users from './pages/Users.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import MainLayout from './layouts/MainLayout.vue'

Vue.use(VueRouter);

const routes = [
    // { path: '/users/:teamId', component: Users}
    { path: '/', component: Home},
    { 
        path: '/', 
        component: MainLayout,
            children: [
                {
                    path: 'about',
                    component: About,
                    name: 'About',
                    meta: {description: 'About me.'}
                },
                {
                    path: 'contact',
                    component: Contact,
                    name: 'Contact',
                    meta: {description: 'Contact to me.'}
                }
        ]
    },
    
];

const router = new VueRouter({
    routes, //routes: routes
    mode: 'history'
});

new Vue({
    el: '#root',
    router, //router: router
    render: h => h(App)
})
