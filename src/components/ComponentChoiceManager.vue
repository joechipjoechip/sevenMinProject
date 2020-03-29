<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>

    <div>

        <div v-for="choice in choices" :key="choice.text">

			<!-- <ComponentOnechoice hey="{{choice.text}}" /> -->
				<p>{{choice.text}}</p>
			<!-- </ComponentOneChoice> -->
			
		</div>

    </div>
 
</template>

<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->

<script>

import ComponentOneChoice from "@/components/ComponentOneChoice";


export default {

	name: 'ComponentChoiceManager',
    components: {
      ComponentOneChoice
    },

	methods: {

	},

	created() {
		// 
	},

	mounted() {

	},

	data() {
		return {
			choices: this.$store.state.actualChoices
		}
	},
};

</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">


</style>
