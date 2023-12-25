export function stableInternships(interns: number[][], teams: number[][]) {
  // Write your code here.
  const N = interns.length;
  //Team-map for which intern they currently have { team : intern }
  const chosenInternsByTeam: Record<number, number> = {};
  const freeInterns = [...Array(N).keys()];
  const currentInternChoice: number[] = Array.from({ length: N }, () => 0);
  const teamMaps: Record<number, number>[] = [];

  //Convert the DS of the input team 2-D array to a map
  teams.forEach((team) => {
    let teamObj: Record<number, number> = {};
    team.forEach((t, i) => (teamObj[t] = i));
    teamMaps.push(teamObj);
  });

  while (freeInterns.length) {
    let currentIntern = freeInterns.pop()!;
    let internChoice = currentInternChoice[currentIntern];
    let preferredTeamByCurrentIntern = interns[currentIntern][internChoice];
    if (!(preferredTeamByCurrentIntern in chosenInternsByTeam)) {
      chosenInternsByTeam[preferredTeamByCurrentIntern] = currentIntern;
      continue;
    }
    let currentChosenInternByTeam =
      chosenInternsByTeam[preferredTeamByCurrentIntern];
    let a = teamMaps[preferredTeamByCurrentIntern][currentChosenInternByTeam];
    let b = teamMaps[preferredTeamByCurrentIntern][currentIntern];
    if (a < b) {
      freeInterns.push(currentIntern);
    } else {
      freeInterns.push(currentChosenInternByTeam);
      chosenInternsByTeam[preferredTeamByCurrentIntern] = currentIntern;
    }
    currentInternChoice[currentIntern]++;
  }
  return Object.entries(chosenInternsByTeam).map(([team, intern]) => [
    intern,
    +team,
  ]);
}

stableInternships(
  [
    [0, 1, 2, 3],
    [0, 1, 3, 2],
    [0, 2, 3, 1],
    [0, 2, 3, 1],
  ],
  [
    [1, 3, 2, 0],
    [0, 1, 2, 3],
    [1, 3, 2, 0],
    [3, 0, 2, 1],
  ]
);
