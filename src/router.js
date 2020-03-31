import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Scene from './views/Scene.vue'

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


		// VIDEO
		{
			path: '/scene/:videoId',
			name: 'scene',
			component: Scene,
			// some params for this specific route here
			meta: {}
		}

	]
	
});
