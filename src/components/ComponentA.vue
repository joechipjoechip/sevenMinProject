<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>

  <div class="componentA">

    <p>componentA</p>

    <h1>{{ msg }}</h1>

	<a href="/bonjour">go to bonjour</a>
    
  </div>

</template>


<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->

<script>

	export default {
		name: 'ComponentA',
		props: {
			msg: String
		}
	}

</script>

<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

	.componentA {

		border: solid 15px red;

	}

</style>
