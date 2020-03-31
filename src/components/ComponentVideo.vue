<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>

	<video 
		class="video-player"
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

		playAfterCta( event ) {

			console.log('wesh le play a distance, ', event);
			this.$el.play();
		},

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
		
		checkCallToAction() {

			if (this.callToActions) {

				this.callToActions.forEach( oneCallToAction => {
	
					if( this.currentTime >= oneCallToAction.timeCode ) {
	
						if ( !this.alreadySentCta[oneCallToAction.id] ) {
	
							this.$el.pause();
							
							console.log('store cta by comitting : ', this.$store.state.actualCallToActions);
	
							// mettre le call to action dans le store
							this.$store.commit('addCallToActions', oneCallToAction);
		
	
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
        border: solid 2px red;
    }

</style>
