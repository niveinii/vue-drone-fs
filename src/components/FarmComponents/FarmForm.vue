<template>
  <v-form ref="form" v-model="valid">
      <v-row>
        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="farmId"
              :rules="farmIdRules"
              :counter="inputLimit"
              label="Farm Id"
              required
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="farmName"
              :rules="farmNameRules"
              :counter="10"
              label="Farm name"
              required
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="contactEmail"
              :rules="emailRules"
              label="Farm Contact E-mail"
              required
          ></v-text-field>
        </v-col>
    <v-btn class="ml-2" @click="submit" :disabled="!valid" color="primary" :loading="isLoading">Add Farm</v-btn>
      </v-row>
  </v-form>
</template>

<script>
import {createNewFarm} from "@/api/farms-api";

export default {
  name: 'WindfarmForm',
  data: () => ({
    valid: false,
    isLoading:false,
    farmId: '',
    farmName: '',
    contactEmail: '',
  }),
  methods: {
    async submit() {
      const {farmId, farmName, contactEmail} = this;
      try{
        this.isLoading = true;
        await createNewFarm({farmId, farmName, contactEmail})
        this.isLoading = false;
      }catch(e){
        console.log(`failed to create new farm: ${e}`)
        this.isLoading = false
      }
      this.$emit('updateFarms')
    },
    isNumber(v){
     const isNotANumber = /\D/.test(v)
      return !isNotANumber
    }
  },
  computed: {
    inputLimit(){
      return 10
    },
    minLengthLimit(){
      return 4
    },
    farmNameRules() {
      return [
        v => !!v || 'Name is required',
        v => v.length > this.minLengthLimit || `Id must be over ${this.minLengthLimit} characters`,
        v => v.length <= this.inputLimit || `Name must be less than ${this.inputLimit} characters`,
      ]
    },
    farmIdRules() {
      return [
        v => v.length > this.minLengthLimit || `Id must be over ${this.minLengthLimit} characters`,
        v => !!v || 'Id is required',
        v => this.isNumber(v) || 'Only Numbers are allowed'
      ]
    },
    emailRules(){
      return  [
        v => !!v || 'E-mail is required',
        v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'E-mail must be valid',
      ]
    }
  },
}
</script>
<style lang="scss">
.form-wrapper{
  margin-left: 50px;
  width: 200px;
}
</style>