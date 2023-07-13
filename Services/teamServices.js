import Team from "../Db/Team.js"

const team=new Team();
class teamServices{
    getallTeams(req,res){
        res.status(200).send(team.showteams())

    }
    addnewteam(req,res){
        const newteam=req.body;
        team.addTeam(newteam)
        res.status(200).send("New Team Added")
    }

    deleteteam(req,res){
        const teamid=req.params.id;
        const index = team.teams.findIndex(team => team.teamId==teamid);
        if(index!=-1){
        team.deleteteam(teamid)
        res.status(200).send("Team Deleted!")
        }
        else{
            res.status(400).send("Id Not Found")
        }
    }
    updateteam(req,res){
        const teamid=req.params.id;
        const body=req.body;
        const index = team.teams.findIndex(team => team.teamId==teamid);
        console.log(index)
        if(index!=-1){
            let t=team.teams[index];
            console.log(t)
            t={...t,...body}
            console.log(t)
            team.deleteteam(teamid)
            team.addTeam(t)
            res.status(200).send("Data Updated!!")
        }
        else{
            res.status(400).send("Id Not Found")
        }
    }

    maxteamscorer(req,res){
        const teamid=req.params.id;
        const index = team.teams.findIndex(team => team.teamId==teamid);
        console.log(index)
        if(index!=-1){
            const t=team.teams[index]
            const k=t.players
            let maxscore=0;
            k.forEach(player=>{
              if(player.score>maxscore) maxscore=player.score
            })

            res.status(200).send(k.filter(x=>x.score==maxscore))
        }
        else{
            res.status(400).send("Id Not Found")
        }



    }



}

export default teamServices