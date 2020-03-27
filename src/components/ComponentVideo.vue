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

		getVideoUrl() {
			// let param = this.$store.state.storyMap.videos[this.$route.params.videoId].self.url;
			// let videos = require.context('./../assets/', false, /\.mp4$/);

			// let result = videos('./' + param + '.mp4');

			// return  result;

		},

		onDurationChange() {

		},

		onTimeUpdate() {

		},

		onPlaying() {
			console.log('play triggered');
		},

		onPause() {
			console.log('pause triggered');
		}

	},

	created() {
		// 
	},

	mounted() {
		
	},

	data() {
		return {
			videoUrl: `/assets/videos/${this.$store.state.storyMap.videos[this.$route.params.videoId].self.url}`
		}
	},
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
