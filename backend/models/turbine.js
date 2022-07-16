import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const turbineSchema = new Schema({
    turbineId: {
        type: Number,
        required: true
    },
    turbineStatus: {
        type: String,
        required: false
    },
    lastTurbineCheck:{
        type: String,
        required: false
    },
    requestCheck:{
        type: Boolean,
        required: false
    }
},{ timestamps:true})

export const Turbine = mongoose.model('Turbine',turbineSchema)
