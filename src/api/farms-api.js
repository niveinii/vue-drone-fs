const axios = require('axios').default;

export async function createNewFarm({farmId,farmName,contactEmail}){
   const res = await axios.post('http://localhost:5000/farms',{
            farmId,
            farmName,
            contactEmail
    })
    const {data} = res
    return data
}

export async function getFarms(){
    const res = await axios.get('http://localhost:5000/farms')
    const {data} = res
    return data
}



export async function deleteFarm(id){
    const res = await axios.delete(`http://localhost:5000/farms/${id}`)
    const {data} = res
    return data
}

export async function updateFarm({_id,farmId,farmName,contactEmail}){
    const res = await axios.patch(`http://localhost:5000/farms/${_id}`,{
        farmId,
        farmName,
        contactEmail
    })
    const {data} = res
    return data
}
