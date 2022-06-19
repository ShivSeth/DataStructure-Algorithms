function tournamentWinner(competitions, results) {
  // Write your code here.

  let winningTeams = {};
  let maxWin = 0;
  let winner = '';
  for (let i = 0; i < results.length; i++) {
    if (results[i] === 1) {
      winningTeams[competitions[i][0]] =
        ++winningTeams[competitions[i][0]] || 1;
      if (maxWin <= winningTeams[competitions[i][0]]) {
        maxWin = winningTeams[competitions[i][0]];
        winner = competitions[i][0];
      }
    } else {
      winningTeams[competitions[i][1]] =
        ++winningTeams[competitions[i][1]] || 1;
      if (maxWin <= winningTeams[competitions[i][1]]) {
        maxWin = winningTeams[competitions[i][1]];

        winner = competitions[i][1];
      }
    }
  }

  //   for (let [key, value] of Object.entries(winningTeams)) {
  //     if (maxWin <= value) {
  //       maxWin = value;
  //       winner = key;
  //     }
  //   }

  return winner;
}

// tournamentWinner(
//   [
//     ['HTML', 'C#'],
//     ['C#', 'Python'],
//     ['Python', 'HTML'],
//   ],
//   [0, 0, 1]
// );

tournamentWinner([['A', 'B']], [0]);

// Do not edit the line below.
