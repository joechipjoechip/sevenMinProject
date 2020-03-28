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

		onDurationChange() {

		},

		onTimeUpdate( event ) {

			this.$store.state.currentTime = event.target.currentTime;

			this.compareTimeCodes();
			// true
		},

		onPlaying() {
			console.log('play triggered');

		},

		onPause() {
			console.log('pause triggered');
		},

		compareTimeCodes() {

			this.choices.forEach( oneChoice => {
	
				if ( oneChoice.choiceTimeCode >= this.$store.state.currentTime ) {
				
					console.log('comparing : ', oneChoice.choiceTimeCode, ' and ', this.$store.state.currentTime);
					this.$emit('activateChoice', oneChoice);
				
				}

			});
		}

	},

	created() {
		// 
	},

	mounted() {

		// on stock la data de la video en cours dans le state :
		this.$store.state.actualVideoObj = this.$store.state.storyMap.videos[this.route];

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
