<template>
  <div class="bonjour">
    <h1># B O N J O U R</h1>

    <p>hey :</p>
    <router-link to="/about">About</router-link>


    <ComponentA class="component" msg="salut, moi c'est le component A"/>

  </div>
</template>

<script>
import ComponentA from '@/components/ComponentA.vue'

export default {
  name: 'bonjour',
  components: {
    ComponentA
  }
}
</script>

<style>
.bonjour {
    position: relative;
    width: 80%;
    display: block;
    margin: 0 auto;
    padding: 10px;
    top: 0;

    border: solid 1px orange;
}
</style>

