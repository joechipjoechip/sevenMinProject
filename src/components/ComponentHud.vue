<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>

    <div> vie et mana</div>

</template>

<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->

<script>

export default {

	name: "ComponentHud",

	methods: {},

	created() {
		// 
	},

	mounted() {
        // this.$store.state.mana = this.$store.state.mana + 65;

    
        console.log(' ok le mounted');

        // this.$store.commit('addMana', 600);

        console.log("hey le mana ", this.$store.state.mana);

    
	},

	data() {
		return {
			// videoUrl: `/assets/videos/${this.$store.state.storyMap.videos[this.$route.params.videoId].self.url}`
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
