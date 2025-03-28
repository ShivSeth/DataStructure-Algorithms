class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    let minSpeed = 1;
    let maxSpeed = Math.max(...piles);
    let res = maxSpeed;
    while (minSpeed <= maxSpeed) {
      let avgSpeed = Math.floor((minSpeed + maxSpeed) / 2);

      let totalTime = 0;

      for (let pile of piles) {
        totalTime += Math.ceil(pile / avgSpeed);
      }

      if (totalTime <= h) {
        res = avgSpeed;
        maxSpeed = avgSpeed - 1;
      } else {
        minSpeed = avgSpeed + 1;
      }
    }
    return res;
  }
}
