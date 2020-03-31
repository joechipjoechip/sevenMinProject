<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<template>

  <div class="scene-container">

        <ComponentVideo/>

        <ComponentChoiceManager />
        <ComponentCallToAction v-on:playAfterCta="playAfterCta" />

            
  </div>

</template>


<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<script>

	import ComponentVideo from '@/components/ComponentVideo';
    import ComponentChoiceManager from '@/components/ComponentChoiceManager';
    import ComponentCallToAction from '@/components/ComponentCallToAction';
    import ComponentHud from '@/components/ComponentHud';

	export default {

        name: "Scene",

		components: {
            ComponentVideo, ComponentChoiceManager, ComponentCallToAction, ComponentHud
        },

        methods: { 

            playAfterCta( event ) {

                console.log("on a bien recu l event de play after cta ", event);
                this.videoPlayer.play();
                // ici on déléte 
            }

            // supposedToAddMana(x) {

            //     console.log(' le state.mana avant le commit : ', this.$store.state.mana);

            //     this.$store.commit('addMana', x);

            //     console.log(' le state.mana après le commit : ', this.$store.state.mana);
                
            // },

            // supposedToRemoveMana(x) {

            //     console.log('le mana avant remove : ', this.$store.state.mana);

            //     this.$store.commit('removeMana', x);

            //     console.log('le mana aprés remove : ', this.$store.state.mana);

            // }

        },

		mounted() {

            // update this.route
            this.route = this.$route.params.videoId;

            // on se fait un handler du videoPlayer en local de ce component scene
            this.videoPlayer = this.$children.filter( child => child.$options._componentTag === "ComponentVideo")[0].$el;

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