import {Request,Response} from 'express'
let ServerHealthCheck = (res:Response) :any=>{
     res.status(200)
    res.send("gfdfhd")
}

export default {ServerHealthCheck}