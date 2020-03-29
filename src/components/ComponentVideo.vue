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
// import { lettersRoll, timedGoNext } from "@/ComponentsMethods.js";

export default {

	name: "ComponentVideo",

	// props: {
	// 	videoUrl: String
	// },

	methods: {

		

		onDurationChange(event) {
			console.log('yeet' , event)
		},

		onStart() {
			console.log('wsh le onStart triggered');
		},

		onTimeUpdate( event ) {

			this.currentTime = event.target.currentTime;

			this.$store.state.currentTime = event.target.currentTime;

			// checker si la video est arrivé a la fin
			// if ( this.currentTime < 0.5 ) {
				
			// 	this.alreadySentChoice = {};

			// }

			//console.log('---> ', event.target.played);


			this.compareTimeCodes();

		},

		onPlaying() {
			console.log('play triggered');

			// vérifier si la vidéo a déjà été jouée entièrement une fois

			// si oui : 

		},

		onPause() {
			console.log('pause triggered');
		},

	

		compareTimeCodes() {

			this.choices.forEach( oneChoice => {
				
	
				if ( this.currentTime > oneChoice.choiceTimeCode ) {
					console.log(' on est dans le if');
				
					// console.log('comparing : ', oneChoice.choiceTimeCode, ' and ', this.currentTime);
			
					if ( !this.alreadySentChoice[oneChoice.id] ) {

						this.$emit('activateChoice', oneChoice);

						this.alreadySentChoice[oneChoice.id] = true;
						
					}

				} else {

					console.log(' on est dans le else');

					this.alreadySentChoice[oneChoice.id] = false;

					// this.$store.state.actualChoices.filter( choice => choice.id === oneChoice.id)[0]

				}

			});
		}

	},

	created() {
		// 
	},

	mounted() {

		this.alreadySentChoice = {};

		this.route = this.$route.params.videoId;

		this.choices = this.$store.state.storyMap.videos[this.route].components.choices;
		

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
