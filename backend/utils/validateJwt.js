export function validateJwt(req,res,next){
    return req ? next() : res.json({error:'Failed to validate JWT'})
}