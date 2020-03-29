import Vue from 'vue'
import Vuex from 'vuex'

import MetaData from '@/MetaData.js';
import StoryMap from '@/StoryMap.js';

Vue.use(Vuex)

// pour y avoir acces partout ailleur, il faut faire $this.$store.state.mana

export default new Vuex.Store({
	state: {
		metaData: MetaData,
		storyMap: StoryMap,
		currentTime: 0,
		actualVideoObj: {},
		actualChoices: [],
		mana: 100,
		vie: 100
	},

	getters: {
		value: state => {
			return state.value
		}
	},

	mutations: {

		addMana:(state, x) => {
			state.mana = parseInt(this.mana + x);
		}

	},

	actions: {

		addMana: (context) =>  {
			context.commit('addMana');
		}

	}

});
