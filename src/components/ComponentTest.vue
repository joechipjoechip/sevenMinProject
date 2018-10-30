<template>
  <div class="ComponentTest">

    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'ComponentTest',
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss">
  .ComponentTest {
      border: solid 15px blue;
  }
</style>
