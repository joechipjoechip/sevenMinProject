<template>
  <div id="app">

    <div id="nav">
      <p>ici c'est App.vue avec le div#app à la bien</p>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/bonjour">Bonjour</router-link> |
      <router-link to="/go">Go</router-link>
    </div>

    <!-- 
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    -->
    <transition appear name="transitionRouter" mode="out-in"
      v-on:enter="pageEnter" 
      v-on:leave="pageLeave" 
      :duration="routerTransitionOptionsComputed"
    >
      <router-view/>
    </transition>

  </div>
</template>

<script>

  import { pageEnter, pageLeave, routerTransitionOptions } from '@/PagesMethods.js';

  export default {
    methods: {
      pageEnter, 
      pageLeave
    },
    computed: {
      routerTransitionOptionsComputed: () => {
        return routerTransitionOptions();
      }
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



</style>
