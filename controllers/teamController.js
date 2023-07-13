import teamServices from "../Services/teamServices.js"

const teamservices=new teamServices();
class teamController{

    
    getAllteams(req,res){
        return teamservices.getallTeams(req,res)
    }

    addnewteam(req,res){
        return teamservices.addnewteam(req,res)
    }
    deleteteam(req,res){
        return teamservices.deleteteam(req,res)
    }
    updateteam(req,res){
        return teamservices.updateteam(req,res)
    }
    maxteamscorer(req,res){
        return teamservices.maxteamscorer(req,res)
    }
}
 
export default teamController