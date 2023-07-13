class Match {
    matches = [{
        matchId: 1,
        team1: "India",
        team2: "pakistan",
        date: "2022-11-14"
    }]
    addMatch(match) {
        this.matches.push(match)
        return true
    }
    findMatch(matchId) {
        return this.matches.find(match => match.matchId === matchId)
    }
    showmatches() {
        
        return this.matches;
    }
    deleteMatch(matchId){
        const index = this.matches.findIndex(match => match.matchId==matchId);
        this.matches.splice(index,1)
    }
}

export default Match;