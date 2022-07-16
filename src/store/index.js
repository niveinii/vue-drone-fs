import Vue from 'vue'
import Vuex from 'vuex'
import {getFarms} from "@/api/farms-api";
import {getTurbines} from "@/api/turbines-api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    farms: [],
    turbines: []
  },
  getters: {
    allFarms: (state)=>state.farms,
    allTurbines: (state)=>state.turbines
  },
  mutations: {
    setFarms:(state,farms)=>(state.farms = farms),
    setTurbines:(state,turbines)=>(state.turbines = turbines)
  },
  actions: {
    async fetchFarms({commit}){
      const res = await getFarms();
      commit('setFarms',res)
    },
    async fetchTurbines({commit}){
      const res = await getTurbines();
      commit('setTurbines',res)
    }
  },
  modules: {
  }
})
