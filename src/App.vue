<template>
  <div id="app">

    <div id="nav">
      <p>ici c'est App.vue avec le div#app à la bien</p>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/bonjour">Bonjour</router-link> |
      <router-link to="/go">Go</router-link>
    </div>

    <!-- <transition 
      name="fade" 
      appear 
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    > -->
    <transition 
      name="fade" 
      appear 
      v-on:enter="pageEnter"
      v-on:leave="pageLeave"
    >
      <router-view/>
    </transition>

  </div>
</template>

<script>

  import { pageEnter, pageLeave } from '@/PagesMethods.js';
  // import MetaData from '@/MetaData.js'

  export default {
    methods: {
      pageEnter, pageLeave
    }
  }
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.oneLetter {
  display: inline-block;
}

// // Transition options
// .fade-enter-active, 
// .fade-leave-active {
//   transition: all 2s;
// }

// // Schema : v-enter --> v-enter-to
// // opacity :   0  ----->  1

// // Etat au début de l'anim
// // (état de base du enter = état d'arrivée du leave)

// .fade-enter, 
// .fade-leave-to {
//   opacity: 0;
//   transform: translate3D(0, -150px, 0);
// }

// // Etat à la fin de l'anim
// // (état d'arrivée du enter = état de base du leave)
// .fade-enter-to, 
// .fade-leave {
//   transform: translate3D(0, 0, 0);
// }



</style>
