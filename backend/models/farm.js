import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const farmSchema = new Schema({
    farmId: {
        type: Number,
        required: true
    },
    farmName: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
},{ timestamps:true})

export const Farm = mongoose.model('Farm',farmSchema)
