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
		valueMana: (state, getters) => {
			return console.log('return getters mana',state.mana)
		}
	},

	mutations: {

		addMana:(state, x) => {
			state.mana += x;
		}

	},

	actions: {

		addMana: (context) =>  {
			context.commit('addMana');
		}

	}

});
