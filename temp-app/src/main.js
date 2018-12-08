// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from  'vue-resource'
import VueSidebarMenu from 'vue-sidebar-menu'
import VueGridLayout from 'vue-grid-layout'
import VueGallery from 'vue-gallery'
import App from './App'
import Test from './components/test'
import Users from './components/users'
import Dashboard from './components/dashboard'
import Photo from './components/photo'
// Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueSidebarMenu)
Vue.use(VueGridLayout)
Vue.use(VueGallery)

// const Dashboard = { template: '<div>Dashboard Page</div>' }
const Charts = { template: '<div>Charts Page</div>' }
const Tables = { template: '<div>Tables Page</div>' }

const router = new VueRouter({
	routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/charts',
      name: 'Charts',
      component: Charts,
    },
    {
      path: '/tables',
      name: 'Tables',
      component: Tables,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo,
    },
  ]
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App),
	
});
