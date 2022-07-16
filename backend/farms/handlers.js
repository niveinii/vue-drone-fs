import {Farm} from '../models/farm.js'

export function addNewFarm(req, res){
    const {farmId,farmName,contactEmail} = req.body
    const farm = new Farm({
        farmId,
        farmName,
        contactEmail
    })
    farm.save().then((result)=> res.send(result)).catch((e)=>console.log(e));
}

export function getAllFarms(req,res){
    Farm.find().then((result)=>res.send(result)).catch((e)=>console.log(e))
}

export function updateFarm(req,res){
    const {id} = req.params
    const {farmId,farmName,contactEmail } = req.body
    Farm.findOneAndUpdate({_id:id},{farmId,farmName,contactEmail }).then((result)=>res.send(result)).catch((e)=>console.log(e))
}

export function deleteFarm(req,res){
    const {id} = req.params
    Farm.deleteOne({_id:id}).then((result)=>res.send(result)).catch((e)=>console.log(e))
}