<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>

  <div class="ComponentGo">

    <div class="container">

      <p>components/ComponentGo.vue est là en jaune</p>

      <ComponentLettersRoll class="test" />

        <h1>{{ title }}</h1>

        <input type="text" v-on:input="changeTitle" />

        <ComponentA class="component" msg="heyhey" />

    </div>
    
  </div>

</template>

<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->

<script>

	import ComponentA from '@/components/ComponentA.vue';
	import ComponentLettersRoll from '@/components/ComponentLettersRoll.vue';

	import { lettersRoll, timedGoNext } from '@/ComponentsMethods.js';

	export default {
		name: 'ComponentGo',
		props: {
			msg: String
		},

		components: {
			ComponentA,
			ComponentLettersRoll
		},
		
		methods: {

			lettersRoll,

			changeTitle: function(e) {
			this.title = e.target.value;
			}

		},

		mounted: function() {

			// timedGoNext('bonjour', 3);

		},

		data () {
			return {
				monLorem: this.$store.state.metaData.lorem,
				title: 'Hi, i\'m the title'
			}
		}
	}

</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">

	.ComponentGo {
		border: solid 15px yellow;
	}

</style>
