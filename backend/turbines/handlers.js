import {Turbine} from '../models/turbine.js'

export function addNewTurbine(req, res){
    const {turbineId,turbineStatus,lastTurbineCheck,requestCheck} = req.body
    const turbine = new Turbine({
        turbineId,
        turbineStatus,
        lastTurbineCheck,
        requestCheck
    })
    turbine.save().then((result)=> res.send(result)).catch((e)=>console.log(e));
}

export function getAllTurbines(req,res){
    Turbine.find().then((result)=>res.send(result)).catch((e)=>console.log(e))
}

export function updateTurbine(req,res){
    const {id} = req.params
    const {turbineId,turbineStatus,lastTurbineCheck,requestCheck} = req.body
    Turbine.findOneAndUpdate({_id:id},{turbineId,turbineStatus,lastTurbineCheck,requestCheck}).then((result)=>res.send(result)).catch((e)=>console.log(e))
}

export function deleteTurbine(req,res){
    const {id} = req.params
    Turbine.deleteOne({_id:id}).then((result)=>res.send(result)).catch((e)=>console.log(e))
}