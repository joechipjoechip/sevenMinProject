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
		actualCallToActions: [],
		mana: 100,
		vie: 100,
		playerIsInteractive: true
	},

	mutations: {

		addMana:(state, x) => {
			state.mana += x;
		},

		removeMana:(state, x) => {
			state.mana -= x;
		},

		addChoice: (state, choice) => {
			state.actualChoices.push(choice);
		},

		resetChoices: (state) => {
			// empty by .splice
			state.actualChoices.splice(0, state.actualChoices.length);
		},

		addCallToActions: (state, cta) => {
			state.actualCallToActions.push(cta);
		},

		resetCallToActions: (state) => {
			// empty by .splice
			state.actualCallToActions.splice(0, state.actualCallToActions.length);
		},

		setPlayerInteractive(state, bool) {
			state.playerIsInteractive = bool;
		}

	}

});
