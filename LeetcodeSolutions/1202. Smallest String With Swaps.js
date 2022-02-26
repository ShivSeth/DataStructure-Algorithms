//Optimized UnionFind
class UnionFind {
  constructor(size) {
    this.root = [...new Array(size).keys()];
  }
  find(x) {
    if (x !== this.root[x]) {
      this.root[x] = this.find(this.root[x]);
    }
    return this.root[x];
  }

  union(x, y) {
    this.root[this.find(y)] = this.root[this.find(x)];
  }
}

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  let n = s.length;
  let uf = new UnionFind(n);
  pairs.forEach(([x, y]) => uf.union(x, y));

  //Mapping of the corresponding positions as per the disjoint set
  let map = new Map();
  for (let i = 0; i < n; i++) {
    let tempFind = uf.find(i);
    if (map.has(tempFind)) map.get(tempFind).push(i);
    else map.set(tempFind, [i]);
  }
  let result = [];
  map.forEach((valueArray, key) => {
    let charArray = valueArray.map((value) => s[value]);
    charArray.sort();
    let index = 0;
    valueArray.forEach((value) => {
      result[value] = charArray[index++];
    });
  });
  return result.join('');
};

smallestStringWithSwaps('cba', [
  [0, 1],
  [1, 2],
]);
