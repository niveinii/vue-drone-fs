<template>
  <v-app>
    <div class="wrapper d-flex">
          <div class="flex-grow-1">
            <TurbineForm @updateTurbines="fetchTurbines"/>
            <DisplayTurbines @updateTurbines="fetchTurbines" class="mt-15" :turbines="allTurbines"/>
          </div>
      <div class="flex-grow-1">
            <FarmForm @updateFarms="fetchFarms"/>
            <DisplayFarms @updateFarms="fetchFarms" class="mt-15" :farms="allFarms"/>
      </div>
    </div>
  </v-app>
</template>

<script>
import FarmForm from './components/FarmComponents/FarmForm'
import DisplayFarms from "@/components/FarmComponents/DisplayFarms";

import TurbineForm from './components/TurbineComponents/TurbinesForm'
import DisplayTurbines from "@/components/TurbineComponents/DisplayTurbines";

import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    FarmForm,
    DisplayFarms,
    TurbineForm,
    DisplayTurbines
  },
  methods:   mapActions(["fetchFarms","fetchTurbines"]),
  computed: mapGetters(['allFarms','allTurbines']),
  created(){
    this.fetchFarms()
    this.fetchTurbines()
  }
}
</script>
<style lang="scss">
.wrapper{
  gap:50px;
  width: 100%;
}
</style>