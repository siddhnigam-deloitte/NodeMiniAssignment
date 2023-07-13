import Match from "../Db/Match.js";

const match=new Match();
class matchServices{
    
    getallmatches(req,res){
        
        res.status(200).send(match.showmatches())
    }

    addnewmatch(req,res){
        const newmatch=req.body;
        match.addMatch(newmatch)
        res.status(200).send("New Match Added")
    }

    deletematch(req,res){
        const matchid=req.params.id;
        const index = match.matches.findIndex(match => match.matchId==matchid);
        if(index!=-1){
        match.deleteMatch(matchid)
        res.status(200).send("Match Deleted!")
        }
        else{
            res.status(400).send("Id Not Found")
        }
    }
    updatematch(req,res){
        const matchid=req.params.id;
        const body=req.body;
        const index = match.matches.findIndex(match => match.matchId==matchid);
        console.log(index)
        if(index!=-1){
            let m=match.matches[index];
            console.log(m)
            m={...m,...body}
            console.log(m)
            match.deleteMatch(matchid)
            match.addMatch(m)
            res.status(200).send("Data Updated!!")
        }
        else{
            res.status(400).send("Id Not Found")
        }
    }
    gettodaymatch(req,res){
        const matches=match.matches;
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        let month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
        const day = currentDate.getDate();
        if(month<10)
        {
          month="0"+month
        }


        const todaydate=year+"-"+month+"-"+day;
        res.status(200).send(matches.filter(x=>x.date==todaydate))
        console.log(`${year}-${month}-${day}`);

    }
}
export default matchServices;