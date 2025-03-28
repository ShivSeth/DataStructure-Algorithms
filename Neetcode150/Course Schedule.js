class Solution {
  /**
   * @param {number} numCourses
   * @param {number[][]} prerequisites
   * @return {boolean}
   */
  canFinish(numCourses, prerequisites) {
    let hashMap = {};
    let visited = new Set();
    for (let i = 0; i < numCourses; i++) hashMap[i] = [];

    for (let [a, b] of prerequisites) hashMap[a].push(b);
  }

  dfs(node, visitedSet, hashMap) {}
}

let s = new Solution();
s.canFinish(2, [[1, 0]]);
