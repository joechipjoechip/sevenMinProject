<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<template>

  <div class="video-big-container">

        <ComponentVideo v-on:activateChoice="activateButton"></ComponentVideo>

        <ComponentChoiceManager></ComponentChoiceManager>

 
            
  </div>

</template>


<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<script>

	import ComponentVideo from '@/components/ComponentVideo';
    import ComponentChoiceManager from '@/components/ComponentChoiceManager';

	export default {

        name: "Scene",

		components: {
            ComponentVideo, ComponentChoiceManager
        },

        methods: { 
            // je récupère l'actualVideoObj et j'en dedeuis des activations ou pas de componentOneChoice
            choicesManager() {
                // this.activateChoice1 = this.videoObj;
            },

            activateButton( infos ) {

                console.log('activate mammamammennnn ', infos.route);

                // create un component ONe choice en passant infos à ChoiceManager
                this.$store.state.actualChoices.push(infos);


            },

        },

        beforeCreate() {

            
        },

        beforeMount() {
            // this.choices = this.videoObj.components.choices;
            
        },

		mounted() {

            // update actualVideoObj
            this.$store.state.actualVideoObj = this.$store.state.storyMap.videos[this.route];

            // update this.route
            this.route = this.$route.params.videoId;


            this.choices = this.$store.state.storyMap.videos[this.route].components.choices;

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