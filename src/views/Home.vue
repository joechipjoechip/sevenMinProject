<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<template>

  <div class="home">

    <img alt="Vue logo" src="../assets/logo.png">

    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>

</template>


<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<script>

	// @ is an alias to /src
	import HelloWorld from '@/components/ComponentHelloWorld.vue';
	// import { Events } from '@/App.vue';

	export default {

		name: 'home',

		components: {
			HelloWorld
		},

		mounted() {
			// Events.$emit('change_bg', 'red');
		}

	}

</script>
