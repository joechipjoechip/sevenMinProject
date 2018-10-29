<template>
  <div class="ComponentGo">

    
    <div class="container" ref="monContainer">

      <p>components/ComponentGo.vue est là en jaune</p>

      <transition appear
        v-on:enter="lettersRoll">

        <h1 class="lettersContainer" 
            ref="monh1" 
            data-animparams='{
              "duration": 0.6,
              "stagger": 0.02
              }'>
            {{ msg }}
        </h1>

      </transition>

    </div>
    
  </div>
</template>




<script>
import { lettersRoll } from '@/ComponentsMethods.js';

export default {
  name: 'ComponentGo',
  props: {
    msg: String
  },
  methods: {
    lettersRoll
  },
  // Hooks : (lifecycle of the component)
  mounted: function() {
    // console.log('ici en live du mounted de ComponentGo.vue--> ', this.$refs);
    // donc on a accès aux refs à partir d'ici
  }
}
</script>




<style scoped lang="scss">
  .ComponentGo {
      border: solid 15px yellow;
  }
</style>
