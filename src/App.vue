<!-- ° ° ° ° ° ° ° ° ° G L O B A L  L A Y O U T ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° G L O B A L  L A Y O U T ° ° ° ° ° ° ° ° ° -->

<template>

  <div id="app">

    <div id="nav">
      <p>ici c'est App.vue avec le div#app à la bien</p>
      <router-link to="/">Home</router-link> |
      <router-link :to="{'name': 'about'}">About</router-link> |
      <router-link to="/bonjour">Bonjour</router-link> |
      <router-link to="/go">Go</router-link>
    </div>

    <transition 
		appear 
		name="transitionRouter" 
		mode="out-in" 
		v-on:enter="pageEnter" 
		v-on:leave="pageLeave">

		<router-view/>

    </transition>

  </div>

</template>

<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->

<script>

	import { pageEnter, pageLeave, changeBg, pageOptions } from '@/PagesMethods.js';
	import layoutMethods from '@/LayoutMethods.js';

	import Vue from 'vue';
	export const Events = new Vue();



	export default {

		components: {
			Events
		},

		methods: {
			pageEnter, 
			pageLeave,
			changeBg(color) { 
				// console.log(layoutMethods);
				layoutMethods.changeBg({color, el: this.$el});

				console.log('hey', this.$route);
			}
		},

		data: function () {
			return {
				transitionDuration: pageOptions.routerTransitionDuration
			}
		},

		watch: {

			'$route' (to, from) {
				console.log('- - - - - - - hey le watch', to);
				console.log('- - - - - - - hey le watch', from);
			}

		},

		mounted() {
			console.log('ici le mounted');
			Events.$on("change_bg", this.changeBg);
		},

		beforeDestroy() {
			Events.$off("change_bg", this.changeBg);
		}

	}

</script>

<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style lang="scss">

	@import url('https://fonts.googleapis.com/css?family=Abhaya+Libre:400,800');

	body {
		margin: 0;
		padding: 0;
	}

	#app {
		// font-family: 'Avenir', Helvetica, Arial, sans-serif;
		font-family: 'Abhaya Libre', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: black;
		font-size: 25px;

		transition: background-color .7s;
	}

	#nav {
		padding: 30px;

		p {
			font-size: 12px;	
		}

		a {

			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {

				color: #42b983;

			}

		}

	}

	.router-link-exact-active {
		display: inline-block;
	}

</style>
