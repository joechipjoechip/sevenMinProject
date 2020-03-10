<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>

  <div class="go">

    <p>ici c'est views/Go.vue, donc un peu le layout quoi</p>

    <h1># GO</h1>

    <ComponentGo class="component" />
    <!-- <ComponentTest class="component" msg="salut, moi c'est le component Test, donc un truc spécifique indépendant (un component) qui a été chargé ici, dans le views/Go.vue"/> -->
    <!-- <ComponentTyper msg="Bonjour bonjour, " /> -->
  </div>

</template>

<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->

<script>

  import ComponentGo from '@/components/ComponentGo.vue'
  import ComponentTest from '@/components/ComponentTest.vue'

  // console.log('le lorem : ', this.$store.state.lorem);

  export default {
    name: 'Go',
    components: {
      ComponentGo,
      ComponentTest
    }
  }

</script>

<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style lang="scss">

  .go {
      position: relative;
      width: 95%;
      display: block;
      margin: 20px auto;
      padding: 10px;
      top: 0;

      border: solid 1px orange;
  }

</style>

