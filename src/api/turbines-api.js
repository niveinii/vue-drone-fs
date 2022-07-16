const axios = require('axios').default;

export async function createNewTurbine({turbineId,turbineStatus,lastTurbineCheck,requestCheck}){
    const res = await axios.post('http://localhost:5000/turbines',{
        turbineId,
        turbineStatus,
        lastTurbineCheck,
        requestCheck,
    })
    const {data} = res
    return data
}

export async function getTurbines(){
    const res = await axios.get('http://localhost:5000/turbines')
    const {data} = res
    return data
}

export async function deleteTurbine(id){
    const res = await axios.delete(`http://localhost:5000/turbines/${id}`)
    const {data} = res
    return data
}


export async function updateTurbine({_id,turbineId,turbineStatus,lastTurbineCheck,requestCheck}){
    const res = await axios.patch(`http://localhost:5000/turbines/${_id}`,{
        turbineId,
        turbineStatus,
        lastTurbineCheck,
        requestCheck,
    })
    const {data} = res
    return data
}
