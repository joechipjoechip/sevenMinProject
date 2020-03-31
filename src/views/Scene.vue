<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<template>

  <div class="scene-container">

        <ComponentVideo v-on:activateChoice="activateButton" />

        <ComponentChoiceManager />
        <ComponentHud />

        <div v-on:click="supposedToAddMana(44)">test addMana</div>
        <div v-on:click="supposedToRemoveMana(10)">test Remove Mana</div>
            
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

                this.$store.commit('addChoice', infos);

            },

            // addMana(infos) {
            //     console.log("fabfabfab");
            // },

            supposedToAddMana(x) {

                console.log(' le state.mana avant le commit : ', this.$store.state.mana);

                this.$store.commit('addMana', x);

                console.log(' le state.mana après le commit : ', this.$store.state.mana);
                
            },

            supposedToRemoveMana(x) {

                console.log('le mana avant remove : ', this.$store.state.mana);

                this.$store.commit('removeMana', x);

                console.log('le mana aprés remove : ', this.$store.state.mana);

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