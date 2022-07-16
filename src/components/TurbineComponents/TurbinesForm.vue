<template>
  <v-form ref="form" v-model="valid">
      <v-row>
        <v-col
            cols="12"
            md="3"
        >
          <v-text-field
              v-model="turbineId"
              :rules="turbineIdRules"
              :counter="inputLimit"
              label="Turbine Id"
              required
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            md="3"
        >
                              <v-select
                                  v-model="turbineStatus"
                                  :items="statusEnum"
                                  item-text="status"
                                  item-value="status"
                                  label="Turbine Status"
                                  persistent-hint
                                  return-object
                                  single-line
                              />
        </v-col>
        <v-col
            cols="12"
            md="3"
        >
          <v-text-field
              v-model="lastTurbineCheck"
              :counter="10"
              label="Last Turbine Check (dd/mm/yyyy)"
              required
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            md="3"
        >
          <v-checkbox
              v-model="requestCheck"
              label="Requested Check"
              required
          ></v-checkbox>
        </v-col>
    <v-btn class="ml-2" @click="submit" :disabled="!valid" color="primary" :loading="isLoading">Add Turbine</v-btn>
      </v-row>
  </v-form>
</template>

<script>
import {createNewTurbine} from "@/api/turbines-api.js";

export default {
  name: 'TurbineForm',
  data: () => ({
    valid: false,
    isLoading:false,
    turbineId: '',
    turbineStatus: '',
    lastTurbineCheck: '',
    requestCheck: false,
  }),
  methods: {
    isNumber(v){
      const isNotANumber = /\D/.test(v)
      return !isNotANumber
    },
    async submit() {
      const {turbineId,turbineStatus,lastTurbineCheck,requestCheck} = this;
      try{
        this.isLoading = true;
        await createNewTurbine({turbineId,turbineStatus:turbineStatus.status,lastTurbineCheck,requestCheck})
        this.isLoading = false;
      }catch(e){
        console.log(`failed to create new turbine: ${e}`)
        this.isLoading = false
      }
      this.$emit('updateTurbines')
    },
  },
  computed: {
    statusEnum() {
      return [
          {status: 'Damaged'},
          {status: 'New'},
          {status: 'Need Attention'},
        ]
    },
    inputLimit(){
      return 10
    },
    minLengthLimit(){
      return 4
    },
    turbineIdRules() {
      return [
        v => v.length > this.minLengthLimit || `Id must be over ${this.minLengthLimit} characters`,
        v => !!v || 'Id is required',
        v => this.isNumber(v) || 'Only Numbers are allowed'
      ]
    },
  },
}
</script>
<style lang="scss">
.form-wrapper{
  margin-left: 50px;
  width: 200px;
}
</style>