<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>

    <div>

        <div v-for="choice in choices" :key="choice.id">

			<ComponentOneChoice :choiceInfos="choice" />
	
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

	created() {
		// 
	},

	mounted() {

		// de base, les choices sont : 
		this.choices = this.$store.state.actualChoices;

	},

	updated() {

		// à chaque fois que le $store.state.actualChoices est touché : 
		this.choices = this.$store.state.actualChoices;
		// console.log('component choice manager : updated : ', this.choices);


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
