<template>
  <div class="ComponentGo">

    <div class="container">

      <p>components/ComponentGo.vue est là en jaune</p>

      <transition appear
        v-on:enter="lettersRoll">

        <p class="lettersContainer" 
            ref="monh1" 
            data-animparams='{"duration": 0.8, "stagger": 0.025}'>
            {{ monLorem }}
        </p>
        
      </transition>

        <h1>{{ title }}</h1>

        <input type="text" v-on:input="changeTitle" />


    </div>
    
  </div>
</template>




<script>
import { lettersRoll, goNext } from '@/ComponentsMethods.js';

export default {
  name: 'ComponentGo',
  methods: {

    lettersRoll,

    changeTitle: function(e) {
      this.title = e.target.value;
    }

  },

  mounted: function() {

    goNext('bonjour', 3);

  },

  data () {
    return {
      monLorem: this.$store.state.metaData.lorem,
      title: 'Hi, i\'m the title'
    }
  }
}
</script>




<style scoped lang="scss">
  .ComponentGo {
      border: solid 15px yellow;
  }
</style>
