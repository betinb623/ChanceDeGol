// Dados de exemplo das estatísticas da partida
const homeTeamStats = {
  goalsScored: 2,
  shotsOnTarget: 8,
  possession: 60
};

const awayTeamStats = {
  goalsScored: 1,
  shotsOnTarget: 5,
  possession: 40
};

// Função para calcular a eficiência de finalização de cada equipe
function calculateGoalEfficiency(teamStats) {
  const { goalsScored, shotsOnTarget } = teamStats;
  
  if (shotsOnTarget === 0) {
    return 0;
  }
  
  return goalsScored / shotsOnTarget;
}

// Função para determinar a equipe mais eficiente em finalizações
function determineMostEfficientTeam(homeStats, awayStats) {
  const homeEfficiency = calculateGoalEfficiency(homeStats);
  const awayEfficiency = calculateGoalEfficiency(awayStats);
  
  if (homeEfficiency > awayEfficiency) {
    return 'Home team is more efficient in scoring goals.';
  } else if (awayEfficiency > homeEfficiency) {
    return 'Away team is more efficient in scoring goals.';
  } else {
    return 'Both teams have the same goal-scoring efficiency.';
  }
}

// Função para calcular a posse de bola total
function calculateTotalPossession(homeStats, awayStats) {
  return homeStats.possession + awayStats.possession;
}

// Função para determinar a porcentagem de posse de bola de cada equipe
function determinePossessionPercentage(homeStats, awayStats) {
  const totalPossession = calculateTotalPossession(homeStats, awayStats);
  const homePercentage = (homeStats.possession / totalPossession) * 100;
  const awayPercentage = (awayStats.possession / totalPossession) * 100;
  
  return {
    home: homePercentage.toFixed(2) + '%',
    away: awayPercentage.toFixed(2) + '%'
  };
}

// Exemplo de uso das funções
console.log('Goal Efficiency:');
console.log('Home Team:', calculateGoalEfficiency(homeTeamStats));
console.log('Away Team:', calculateGoalEfficiency(awayTeamStats));

console.log('\n' + determineMostEfficientTeam(homeTeamStats, awayTeamStats));

console.log('\nPossession Percentage:');
console.log(determinePossessionPercentage(homeTeamStats, awayTeamStats));
