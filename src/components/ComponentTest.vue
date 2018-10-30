<template>
  <div class="ComponentTest">

    <h1>{{ msg }}</h1>
    <h1 v-if="methodeLocale()">ce message signifie que la methode de ce component est bien accessible</h1>
    
  </div>
</template>

<script>
export default {
  name: 'ComponentTest',
  props: {
    msg: String
  },
  methods : {
    methodeLocale: function (){
      console.log('oui la methode locale fonctionne (ComponentTest.vue)');
      return true;
    }
  }
}
</script>


<style scoped lang="scss">
  .ComponentTest {
      border: solid 15px blue;
  }
</style>
