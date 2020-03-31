<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>


	<div>

		<div v-for="cta in ctas" :key="cta.id">

			<p v-on:click="manaClick">{{cta.text}}</p>

		</div>


	</div>

	
</template>

<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->

<script>

export default {

	name: "ComponentCallToAction",

	methods: {
		// methodes des actions reçu (mana, arme, etc...)
		manaClick() {
			
			// this.mana += 10;
			// this.$store.state.mana
			this.$store.commit('addMana', 12);

			this.checkManaAmount();
		},

		checkManaAmount() {

			if (this.$store.state.mana > 150) {
				// refais play

				this.$emit("playAfterCta", "weshhh");

				// console.log('ok pour le $emit');

				// debugger;

				// console.log('on fait un play manuel');

				// debugger;

				// this.$parent.$children[0].$el.play()

			}

		}

	},

	created() {
		// les animations à l'affichage ?
	},

	beforeUpdate() {

		// this.callToActions = this.$store.state.actualCallToActions;

		// console.log('component cta : beforeUpdate : ', this.callToActions);
	},

	mounted() {

		// this.call = this.$store.state.actualChoices;
		// this.callToActions = this.$store.state.actualCallToActions;
		// console.log('component cta : mouted : ', this.callToActions);

	},

	data() {
		return {
			ctas: this.$store.state.actualCallToActions
		}
	}
};
</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">


</style>
