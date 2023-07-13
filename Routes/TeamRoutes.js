import express from 'express'
import teamController from '../controllers/teamController.js';

const teamRouter=express.Router();
const teamcontroller= new teamController()

teamRouter.get("/all",(req,res)=>{
    teamcontroller.getAllteams(req,res)
})

teamRouter.post("/addTeam",(req,res)=>{
    teamcontroller.addnewteam(req,res)

})

teamRouter.delete("/delete/:id",(req,res)=>{
    teamcontroller.deleteteam(req,res)
})

teamRouter.patch("/update/:id",(req,res)=>{
    teamcontroller.updateteam(req,res)
})

teamRouter.get("/maxScorer/:id",(req,res)=>{
    teamcontroller.maxteamscorer(req,res)
})


export default teamRouter;
