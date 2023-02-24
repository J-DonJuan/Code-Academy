const team = {
    _players: [
      { firstName: "John",
        lastName: "Deen",
        age: 45 
      },
      {
        firstName: "Steve",
        lastName: "Deen",
        age: 48
      },
      {
        firstName: "Julie",
        lastName: 'Jennings',
        age: 50
      }
    ],
    _games: [
      { 
      opponent: "Killer Bees",
      teamPoints: 7,
      opponentPoints: 3
      },
      { 
      opponent: "The Wild",
      teamPoints: 7,
      opponentPoints: 3
      },
      { 
      opponent: "The Unicorns",
      teamPoints: 7,
      opponentPoints: 3
      }
    ],
    get players() {
      return this._players;
    },
    get games () {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      }
      this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }
      this._games.push(game);
    }
  }
  
  team.addPlayer("Bugs", "Bunny", 76);
  team.addGame("Titans", 100, 98);
  console.log(team._players);
  console.log(team._games);