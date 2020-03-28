<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<template>

  <div class="video-big-container">

        <ComponentVideo v-on:activateChoice="activateButton">
        </ComponentVideo>

        <ComponentOneChoice>
        </ComponentOneChoice>
 
  </div>

</template>


<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<script>

	import ComponentVideo from '@/components/ComponentVideo';
	import ComponentOneChoice from '@/components/ComponentOneChoice';

	export default {

        props: {
          //  choix: this.choices
        },

		components: {
			ComponentVideo, ComponentOneChoice
        },

        methods: { 
            // je récupère l'actualVideoObj et j'en dedeuis des activations ou pas de componentOneChoice
            choicesManager() {
                // this.activateChoice1 = this.videoObj;
            },

            activateButton( infos ) {
                console.log('activate mammamammennnn ', infos.route);
            }

        },

        beforeCreate() {

            
        },

        beforeMount() {
            // this.choices = this.videoObj.components.choices;
            
        },

		mounted() {
            // Events.$emit('change_bg', 'red');
            // this.videoObj = this.$store.state.actualVideoObj;

        },

        data() {
            return {
                // activateChoice1: this.activateChoice1
            }
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