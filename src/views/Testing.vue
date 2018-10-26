<template>
  <div class="bonjour">
    <h1># T E S T I N G</h1>

    <p>hey :</p>

    <ComponentTest msg="salut, moi c'est le component Test"/>

  </div>
</template>

<script>
import ComponentTest from '@/components/ComponentTest.vue'

export default {
  name: 'Testing',
  components: {
    ComponentTest
  }
}
</script>

<style>
.bonjour {
    width: 80%;
    display: block;
    margin: 0 auto;
    padding: 10px;

    border: solid 1px orange;
}
</style>

