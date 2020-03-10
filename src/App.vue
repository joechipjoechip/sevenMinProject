<!-- ° ° ° ° ° ° ° ° ° G L O B A L  L A Y O U T ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° G L O B A L  L A Y O U T ° ° ° ° ° ° ° ° ° -->

<template>

  <div id="app">

    <div id="nav">
      <p>ici c'est App.vue avec le div#app à la bien</p>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
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

  	import { pageEnter, pageLeave, pageOptions } from '@/PagesMethods.js';

	export default {

		methods: {
			pageEnter, 
			pageLeave
		},

		data: function () {
			return {
				transitionDuration: pageOptions.routerTransitionDuration
			}
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
  background-color: rebeccapurple;
}

#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'Abhaya Libre', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  font-size: 25px;
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
