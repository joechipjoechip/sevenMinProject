<template>
  <div class="go">
    <p>ici c'est views/Go.vue, donc un peu le layout quoi</p>
    <h1># GO</h1>

    <ComponentGo msg="salut, moi c'est le component GO, donc un truc spécifique indépendant (un component) qui a été 'invoqué' ici, dans le views/Go.vue"/>
    <ComponentTest id="leComponent" msg="salut, moi c'est le component Test, donc un truc spécifique indépendant (un component) qui a été chargé ici, dans le views/Go.vue"/>

  </div>
</template>

<script>

import ComponentGo from '@/components/ComponentGo.vue'
import ComponentTest from '@/components/ComponentTest.vue'

export default {
  name: 'Go',
  components: {
    ComponentGo,
    ComponentTest
  }
}
</script>

<style lang="scss">
.go {
    position: relative;
    width: 60%;
    display: block;
    margin: 0 auto;
    padding: 10px;
    top: 0;

    border: solid 1px orange;
}
#leComponent {
    box-shadow: 5px 5px 5px black;
    width: 50%;
    margin: 0 auto;
}
</style>

