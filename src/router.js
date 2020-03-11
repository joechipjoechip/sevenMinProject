import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({

	mode: 'history',
	base: process.env.BASE_URL,
	routes: [

		// HOME
		{
			path: '/',
			name: 'home',
			component: () => import('./views/Home.vue'),
			// some params for this specific route here
			meta: {}
		},

		// ABOUT
		{
			path: '/about',
			name: 'about',
			
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			// component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
			component: () => import('./views/About.vue'),
			// some params for this specific route here
			meta: {}
		},

		// BONJOUR
		{
			path: '/bonjour',
			name: 'bonjour',
			component: () => import('./views/Bonjour.vue'),
			// some params for this specific route here
			meta: {}
		},

		// GO
		{
			path: '/go',
			name: 'go',
			component: () => import('./views/Go.vue'),
			// some params for this specific route here
			meta: {}
		}

	]
	
});
