var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

var forceUser = personnel.filter(function(personal){
    return personal.isForceUser === true;
  })
  var totalPilotingScore = forceUser.reduce(function(accumulator, pilot){
      return accumulator + pilot.pilotingScore;
  }, 0);
  var totalShootingScore = forceUser.reduce(function(accumulator, pilot){
      return accumulator + pilot.shootingScore;
  }, 0)
  
  document.write(`total jumlah piloting = ${totalPilotingScore}`);
document.write('<br>')
  document.write(`total jumlah shooting = ${totalShootingScore}`)
