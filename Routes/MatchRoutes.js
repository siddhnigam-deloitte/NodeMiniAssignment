import MatchController from '../controllers/matchController.js';
import  express  from 'express';


const matchRouter=express.Router();


const matchController=new MatchController();

matchRouter.get("/all",(req,res)=>{
    matchController.getAllmatches(req,res)
    
})

matchRouter.post("/addMatch",(req,res)=>{
    matchController.addnewmatch(req,res)

})

matchRouter.delete("/delete/:id",(req,res)=>{
    matchController.deletematch(req,res)
})

matchRouter.patch("/update/:id",(req,res)=>{
    matchController.updatematch(req,res)
})

matchRouter.get("/gettodaymatches",(req,res)=>{
    matchController.gettodaymatch(req,res)
    
})

 
export default matchRouter