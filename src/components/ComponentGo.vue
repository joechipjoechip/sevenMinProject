<template>
  <div class="ComponentGo">
    <p>components/ComponentGo.vue est là en jaune</p>
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'ComponentGo',
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss">
.ComponentGo {
    border: solid 15px yellow;
}
</style>
