<!-- Principe : -->
<!-- Ce component fait beaucoup de choses : -->
<!-- _ il surveille le currentTime de la video pour déclencher des vérifications selon celui-ci -->
<!-- __ quand il doit déclencher des choses, c'est souvent : -->
<!-- ___ mettre à jour le $store.state (les "actualChoices actualCallToActions" etc..) -->
<!-- ___ parfois des .play() ou des .pause() ou des $store.$emit() selon les spécificités des différents éléments d'intéractions -->

<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>

	<video 
		class="video-player"
		:class="{ cohabitationCta: this.$store.state.actualCallToActions.length !== 0 }"
		:src="videoUrl"
		controls 
		autoplay
		playsinline
		@durationchange="onDurationChange" 
		@timeupdate="onTimeUpdate" 
		@playing="onPlaying" 
		@pause="onPause"
		@onStart="onStart"
	>
	</video>

</template>

<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->

<script>

export default {

	name: "ComponentVideo",

	methods: {

		onDurationChange() {
			// console.log('yeet' , event);
		},

		onStart() {
			console.log('wsh le onStart triggered');
		},

		onTimeUpdate( event ) {

			this.currentTime = event.target.currentTime;

			this.$store.state.currentTime = event.target.currentTime;
			
			this.checkStartingVideo();

			this.compareTimeCodes();

			this.checkCallToAction();

		},

		onPlaying() {
			console.log('play triggered');

		},

		onPause() {
			console.log('pause triggered');
		},	

		playAfterCta( event ) {

			console.log('wesh le play a distance, ', event);
			this.$el.play();
			
		},
		
		checkCallToAction() {

			// si cette scene a des callToAction
			if (this.callToActions) {

				// on itère
				this.callToActions.forEach( oneCallToAction => {
	
					// dès qu'un calltoaction doit être déclenché
					if( this.currentTime >= oneCallToAction.timeCode ) {
	
						// si celui ci n'a pas déjà été déclenché
						if ( !this.alreadySentCta[oneCallToAction.id] ) {
	
							// on pause la video
							this.$el.pause();
							
							// console.log('store cta by comitting : ', this.$store.state.actualCallToActions);
	
							// on met le calltoaction dans le store.actualCallToAction[]
							this.$store.commit('addCallToActions', oneCallToAction);
	
							// on stock l'id de ce calltoaction comme ayant été déjà déclenché (pour ne le faire qu'une fois)
							this.alreadySentCta[oneCallToAction.id] = true;
	
						}
	
					}
	
				});

			}
		
		},

		checkStartingVideo() {

			// console.log("actualChoices avant : ", this.$store.state.actualChoices.length);

			if (this.currentTime > 0 && this.currentTime <= this.minTimeCode) {

				if ( this.$store.state.actualChoices.length > 0 ) {
					
					this.$store.commit('resetChoices');

					this.alreadySentChoice = {};
					this.alreadySentCta = {};
					// console.log("actualChoices après : ", this.$store.state.actualChoices.length);
					
				}

			}
		},

		compareTimeCodes() {

			this.choices.forEach( oneChoice => {
				
	
				if ( this.currentTime >= oneChoice.choiceTimeCode ) {
				
					// console.log('comparing : ', oneChoice.choiceTimeCode, ' and ', this.currentTime);
			
					if ( !this.alreadySentChoice[oneChoice.id] ) {

						this.$store.commit('addChoice', oneChoice);

						this.alreadySentChoice[oneChoice.id] = true
						
					}

				}

			});
		}

	},

	created() {
		// 
	},

	mounted() {

		this.alreadySentChoice = {};
		this.alreadySentCta = {};

		this.route = this.$route.params.videoId;

		this.choices = this.$store.state.storyMap.videos[this.route].components.choices;

		this.minTimeCode = 999;

		this.choices.forEach(choice => {

			if (choice.choiceTimeCode < this.minTimeCode) {
				this.minTimeCode = choice.choiceTimeCode;
			}

		});

		this.callToActions = this.$store.state.storyMap.videos[this.route].components.callToAction;

	},

	data() {
		return {
			videoUrl: `/assets/videos/${this.$store.state.storyMap.videos[this.$route.params.videoId].self.url}`
		}
	}

};
</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">

	.video-player {

		width: 100%;

		transition: width .7s;

		&.cohabitationCta {
			width: 80%;
			margin-right: 50px;
		}

	}

</style>
