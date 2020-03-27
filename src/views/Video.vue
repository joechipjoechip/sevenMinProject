<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<template>

  <div class="video-big-container">

      <ComponentVideo />

  </div>

</template>


<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<script>

	import ComponentVideo from '@/components/ComponentVideo';

	export default {

		components: {
			ComponentVideo
        },

        beforeMount() {
            
        },

		mounted() {
            // Events.$emit('change_bg', 'red');
            
            // console.log('hey la video : ', this.$route.params);

		}

	}

</script>

<style lang="scss">

    .video-big-container {
        width: 70%;
        margin: 0 auto;
        display: block;

        border: solid 1px orange;
    }
    
</style>
