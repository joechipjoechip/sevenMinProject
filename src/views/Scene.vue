<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<template>

  <div class="scene-container">

        <ComponentVideo v-on:activateChoice="activateButton" />

        <ComponentChoiceManager />
        <ComponentHud />

        <div v-on:click="supposedToAddMana">test addMana</div>
            
  </div>

</template>


<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<script>

	import ComponentVideo from '@/components/ComponentVideo';
    import ComponentChoiceManager from '@/components/ComponentChoiceManager';
    import ComponentHud from '@/components/ComponentHud';

	export default {

        name: "Scene",

		components: {
            ComponentVideo, ComponentChoiceManager, ComponentHud
        },

        methods: { 

            choicesManager() {

            },

            activateButton( infos ) {

                console.log('activate mammamammennnn ', infos.route);

                // create un component ONe choice en passant infos à ChoiceManager
                this.$store.state.actualChoices.push(infos);

            },

            supposedToAddMana() {

                console.log('supposed trigerred');
                this.$store.commit('addMana', 54);

                console.log('$store.mana : ', this.$store.state.mana);

            }

            

        },

		mounted() {

            // update this.route
            this.route = this.$route.params.videoId;

            this.choices = this.$store.state.storyMap.videos[this.route].components.choices;

        },

        

        data() {
            return {
                //
            }
        }

    }
    
</script>

<style lang="scss">

    .scene-container {
        width: 70%;
        margin: 0 auto;
        display: block;

        border: solid 1px orange;
    }
    
</style>