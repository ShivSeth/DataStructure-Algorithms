//We will be solving this using bellman-ford algorithm
//DP[k][u] = Math.min(DP[k][u],DP[k-1][v] + W(u,v)) -> the DP equation
//eg: min distance to reach the vertex 2 + W(2,3) weight of distance from 2 to 3
//Bellman - Ford reduces the space complexity as we are using only two rows -> Current one and row above it.
// Two arrays -> Previous stores till K-1 edges and Current will store at most K edges
//Bellman - Ford Optimization way -> If Previous and Current are equal : break the loop as we found the solution
//Non - optimized solution is used where it asks to use at most K edges as it guarantee the at most criteria
//where as non optimized works where we can use any number of the edges thus focus on the constraints asked for in question
//B-F algorithm works only where there is non-negative weight cycles.
//It can detect the presence of non-negative cycle -> if after the N-1 iteration we get a solution which has the weight less than the N-1th solution there exist the 'Negative weight cycle'

// Detection method: After relaxing each edge N-1 times, perform the Nth relaxation. According to the “Bellman-Ford algorithm”, all distances must be the shortest after relaxing each edge N-1 times. However, after the Nth relaxation, if there exists distances[u] + weight(u, v) < distances(v) for any edge(u, v), it means there is a shorter path . At this point, we can conclude that there exists a “negative weight cycle”.
//Limitations of B-F is the sequence in which we travels has an effect over the number of the iteration to occur'
//Use the SPFA algorithm -> Shortest path faster algorithm use a queue
//Keep on adding the vertices in the queue and keep on updating the later paths
//The vertex whose shortest distance is updated keep on adding to the queue
//If the queue is empty the values in the shortest distance array is smallest

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  if (src == dst) {
    return 0;
  }
  //First row creation
  let dp = new Array(k + 2).fill(0).map(() => new Array(n).fill(Infinity));
  dp[0][src] = 0;
  let previous = new Array(n).fill(Infinity);
  let current = new Array(n).fill(Infinity);
  previous[src] = 0;
  function bellFord() {
    for (let i = 1; i < k + 2; i++) {
      dp[i][src] = 0;
      current[src] = 0;
      for (let [s, d, w] of flights) {
        dp[i][d] = Math.min(dp[i][d], dp[i - 1][s] + w);
        current[d] = Math.min(current[d], previous[s] + w);
      }
      previous = [...current];
    }
  }
  bellFord();
  current;
  dp;
  return current[dst] === Infinity ? -1 : current[dst];
  // return dp[k + 1][dst] === Infinity ? -1 : dp[k + 1][dst];
};

findCheapestPrice(
  5,
  [
    [4, 1, 1],
    [1, 2, 3],
    [0, 3, 2],
    [0, 4, 10],
    [3, 1, 1],
    [1, 4, 3],
  ],
  2,
  1,
  1
);

// findCheapestPrice(
//   (n = 3),
//   (flights = [
//     [0, 1, 100],
//     [1, 2, 100],
//     [0, 2, 500],
//   ]),
//   (src = 0),
//   (dst = 2),
//   (k = 0)
// );

// findCheapestPrice(
//   (n = 3),
//   (flights = [
//     [0, 1, 100],
//     [1, 2, 100],
//     [0, 2, 500],
//   ]),
//   (src = 0),
//   (dst = 2),
//   (k = 1)
// );
