<template>
  <div class="ComponentGo">

    
    <div class="container" ref="monContainer">

      <p>components/ComponentGo.vue est là en jaune</p>

      <transition appear
        v-on:enter="lettersRoll">

        <h1 class="lettersContainer" 
            ref="monh1" 
            data-animparams='{"duration": 0.8, "stagger": 0.025}'>
            {{ monLorem }}
        </h1>

      </transition>

    </div>
    
  </div>
</template>




<script>
import { lettersRoll } from '@/ComponentsMethods.js';

export default {
  name: 'ComponentGo',
  data () {
    return {
      monLorem: this.$store.state.lorem
    }
  },
  methods: {
    lettersRoll
  }
}
</script>




<style scoped lang="scss">
  .ComponentGo {
      border: solid 15px yellow;
  }
</style>
