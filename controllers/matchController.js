import matchServices from "../Services/matchServices.js"


const matchservices=new matchServices();
class MatchController{
    getAllmatches(req,res){
       return matchservices.getallmatches(req,res)
    }
    addnewmatch(req,res){
        return matchservices.addnewmatch(req,res)
    }
    deletematch(req,res){
        return matchservices.deletematch(req,res)
    }
    updatematch(req,res){
        return matchservices.updatematch(req,res)
    }
    gettodaymatch(req,res){
        return matchservices.gettodaymatch(req,res)
    }
}


export default MatchController
