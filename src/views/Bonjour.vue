<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>

  <div class="pageBonjour">

    <h1># B O N J O U R</h1>

    <p>hey :</p>

    <router-link to="/about">About</router-link>

    <ComponentA class="component" msg="salut, moi c'est le component A"/>

  </div>

</template>

<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->

<script>

	import ComponentA from '@/components/ComponentA.vue';
	import { Events } from '@/App.vue';

	export default {

		name: 'bonjour',

		components: {
			ComponentA
		},

		mounted() {
			// 
		}
		
	}

</script>

<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">

	body {
		background-color: greenyellow;
	}

	// .bonjour {
	// 	position: relative;
	// 	width: 80%;
	// 	display: block;
	// 	margin: 0 auto;
	// 	padding: 10px;
	// 	top: 0;

	// 	border: solid 1px orange;
	// }
	
</style>

