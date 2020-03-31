<!-- ° ° ° ° ° ° ° ° ° G L O B A L  L A Y O U T ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° G L O B A L  L A Y O U T ° ° ° ° ° ° ° ° ° -->

<template>
  <div id="app" :data-route="routeName">
    <div id="nav">
      <router-link :to="{ name: 'home' }">Home</router-link>
 
    </div>

    <transition
      appear
      name="transitionRouter"
      mode="out-in"
      v-on:enter="pageEnter"
      v-on:leave="pageLeave"
    >
      <router-view />

    </transition>

  </div>
</template>

<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->

<script>
import { pageOptions, pageEnter, pageLeave } from "@/PagesMethods.js";
// import Tartanpion from "@/components/ComponentA.vue";
// import layoutMethods from '@/LayoutMethods.js';

export default {

  methods: {
    pageEnter,
    pageLeave,
    coucou: function() {
      console.log("cici");

      console.log(this);

      // debugger;
    }
  },

  data: function() {
    return {
      transitionDuration: pageOptions.routerTransitionDuration,
      routeName: ""
    };
  },

  watch: {
    $route(to, from) {
      this.routeName = to.name;
    }
  },

  mounted() {
    // Events.$on("change_bg", this.changeBg);

    // console.log('"this" from App.vue/mounted -> ', this);

    // console.log("here is the mounted()");
  },

  beforeDestroy() {
    // Events.$off("change_bg", this.changeBg);
  }
};
</script>

<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style lang="scss">

	@import "./styles/_appBase.scss";
	@import "./styles/_appColors.scss";
	@import "./styles/_appLayout.scss";
	@import "./styles/_appNav.scss";

</style>
