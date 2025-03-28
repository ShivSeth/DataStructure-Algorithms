type Disk = [number, number, number];

export function diskStacking(disks: Disk[]) {
  // Write your code here.
  //sorting array in place
  disks.sort((diskOne: Disk, diskTwo: Disk) => diskOne[2] - diskTwo[2]);
  disks;
  let maxHeightIdx = 0;
  let sequence: Array<number> = new Array(disks.length).fill(-1);
  let heightDp = disks.map((disk) => disk[2]);
  for (let i = 0; i < disks.length; i++) {
    let diskOne = disks[i];
    for (let j = 0; j < i; j++) {
      let diskTwo = disks[j];
      if (
        isStackingPossible(diskOne, diskTwo) &&
        heightDp[i] <= heightDp[j] + diskOne[2]
      ) {
        heightDp[i] = heightDp[j] + diskOne[2];
        sequence[i] = j;
      }
    }
    maxHeightIdx = heightDp[i] >= heightDp[maxHeightIdx] ? i : maxHeightIdx;
  }
  heightDp;
  sequence;
  maxHeightIdx;

  return getSequence(sequence, disks, maxHeightIdx);

  function isStackingPossible(boxOne: Disk, boxTwo: Disk): boolean {
    return (
      boxOne[0] > boxTwo[0] && boxOne[1] > boxTwo[1] && boxOne[2] > boxTwo[2]
    );
  }

  function getSequence(
    sequence: Array<number>,
    disks: Array<Disk>,
    index: number
  ) {
    let result: Disk[] = [];
    while (index !== -1) {
      result;
      result.push(disks[index]);
      index = sequence[index];
    }
    return result.reverse();
  }
}

diskStacking([
  [2, 1, 2],
  [3, 2, 3],
  [2, 2, 8],
  [2, 3, 4],
  [1, 3, 1],
  [4, 4, 5],
]);
