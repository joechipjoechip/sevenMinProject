<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>

    <div>

        <div v-for="choice in choices" :key="choice.id">
  		
			<!-- <ComponentOnechoice hey="{{choice.text}}" /> -->
				<a :href="choice.route">{{choice.text}}</a>
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

	computed: {
		
		// updateChoices() {
		// 	this.choices = this.$store.state.actualChoices;
		// }

	},

	created() {
		// 
	},

	mounted() {

		// console.log('- - - - -depuis le choice manager : mounted : ', this.$store.state.actualChoices);
		this.choices = this.$store.state.actualChoices;

	},

	updated() {

		console.log('- - - - -depuis le choice manager : updated : ', this.$store.state.actualChoices);
		this.choices = this.$store.state.actualChoices;


	},

	data() {
		return {
			choices: this.choices
		}
	},


		
};

</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">


</style>
