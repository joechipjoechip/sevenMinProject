import Vue from 'vue'
import Vuex from 'vuex'

import MetaData from '@/MetaData.js';
import StoryMap from '@/StoryMap.js';

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		metaData: MetaData,
		storyMap: StoryMap
	},

	mutations: {

	},

	actions: {

	}

});
