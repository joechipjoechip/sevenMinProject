<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° T E M P L A T E ° ° ° ° ° ° ° ° ° -->

<template>

    <p class="lettersContainer" 
        data-animparams='{"duration": 0.5, "stagger": 0.015}'>
        {{ monLorem }}
    </p>

</template>

<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° L O G I C ° ° ° ° ° ° ° ° ° -->

<script>

    // imports = ce qui est attrapé par <script>
    // exports = ce qui est transmis à <template> par <script>

	import { lettersRoll } from '@/ComponentsMethods.js';

	export default {

		name: 'ComponentGo',
		methods: {
			lettersRoll
		},

		mounted: function() {

            lettersRoll(this);
            
        },

        data () {
            return {
                monLorem: this.$store.state.metaData.lorem,
            }
        }

    }

</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style lang="scss">

    .lettersContainer {
        width: 100%;

        .oneLetter {
            display: inline-block;
        }

    }


</style>
