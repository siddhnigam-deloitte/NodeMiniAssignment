class Team {
    teams = [{
        teamId: 1,
        teamName: "India",
        players:[{
           playerId:1,
           playerName:"Rohit Sharma",
           score:2000
        },{
        playerId:2,
        playerName:"Virat Kohli",
        score:2000
    }, {playerId:3,
        playerName:"Jasprit Bumrah",
        score:1600
     },{
     playerId:4,
     playerName:"Md. Shami",
     score:1900}]
 }]
    addTeam(team) {
        this.teams.push(team)
        return true
    }
    findteam(teamId) {
        return this.teams.find(team => team.teamId === teamId)
    }
    showteams() {
        return this.teams;
    }
    deleteteam(teamId){
        const index = this.teams.findIndex(team => team.teamId==teamId);
        this.teams.splice(index,1)
    }
}



export default Team;