import express from 'express';
import mongoose from 'mongoose'

import {validateJwt} from "../utils/validateJwt.js";
//import {deleteValidator} from "./validators.js";
import {addNewTurbine, getAllTurbines,deleteTurbine,updateTurbine} from "./handlers.js";

// connect to mongoDB on AWS cloud
const dbURI = "mongodb+srv://heka:heka@vue-project.lklpn.mongodb.net/drones-db?retryWrites=true&w=majority"
mongoose.connect(dbURI).then(()=>console.log(`connected to db`)).catch((error)=>console.log(error))

const router = express.Router();

router.get('/',validateJwt,getAllTurbines)

router.post('/',validateJwt,addNewTurbine)

router.delete('/:id',validateJwt,deleteTurbine)

router.patch('/:id',validateJwt,updateTurbine)

export default router;