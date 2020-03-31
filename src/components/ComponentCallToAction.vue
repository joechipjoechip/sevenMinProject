<!-- Principe : -->
<!-- Quand le store.state.actualCalToActions[] contient qqch -->
<!-- ce qqch génère automatiquement l'apparition du template ci-dessous -->
<!-- ce qqch étant un array, on itère (v-for) sur celui-ci pour afficher tous les éléments qui le composent -->


<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>

	<div>

		<div v-for="cta in ctas" :key="cta.id">

			<div v-if="cta" v-on:click="manaClick">

				<p v-if="cta.text">{{cta.text}}</p>

				<img v-if="cta.media" :src="imagePath + cta.media" />
				
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

			// on met à jour le $store.state.mana
			this.$store.commit('addMana', 12);

			// on check si le mana est suffisant
			this.checkManaAmount();

		},

		checkManaAmount() {

			// quand le mana est suffisant
			if (this.$store.state.mana > 150) {

				// on refait play de la vidéo qui avait été .pause() dans le ComponentVideo ( lors du remplissage de $store.state.actualCallToActions[] )
				// grâce à un event qui est écouté par un v-on sur l'instanciation du ComponentCallToAction dans la Scene.vue
				// (et dont le handler déclenchera un .play() sur la vidéo)
				this.$emit("playAfterCta", "weshhh");


				// et ici, pour l'instant, on vide totalement le $store.state.actualCallToActions
				// mais cette logique est amenée à se complexifier puisque potentiellement plusieurs cta pourraient apparaitre
				// et les règles de play/pause et de click sur les cta pourraient être différentes
				this.$store.commit('resetCallToActions');

			}

		}

	},

	updated() {
		// this.ctas = this.$store.state.actualCallToActions;
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
