<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>


	<div>

		<div v-for="cta in ctas" :key="cta.id">

			<div v-on:click="manaClick">

				<p v-if="cta.text">{{cta.text}}</p>

				<img v-if="cta.media" :src="'/assets/images/' + cta.media" />
				
			</div>


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

			this.$store.commit('addMana', 12);
			this.checkManaAmount();

		},

		checkManaAmount() {

			if (this.$store.state.mana > 150) {

				// refais play
				this.$emit("playAfterCta", "weshhh");
				// 
				this.$store.commit('resetCallToActions');

			}

		}

	},

	updated() {

		// this.ctas = this.$store.state.actualCallToActions;
		// console.log('updated : component call to action.vue ', this.ctas);
	},

	mounted() {

		// this.ctas = this.$store.state.actualCallToActions;

	},

	data() {
		return {
			ctas: this.$store.state.actualCallToActions,
			imagePath: `/assets/images/`
		}
	}
};
</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">


</style>
