//This rank method is implemented to avoid the LL formation while doing the union operations
//Rank is associated with each node and we compare them to make a tree rather than LL.
//When performing the union operation add lower rank node to the higher rank node and avoid the possibility to add all the nodes in straight line i.e adding (1,0) (2,0) (3,0) (4,0) and so on
//Improve the optimization of QuickUnion based disjoint sets
//Time-consuming -> Find: O(logN) Union: O(logN) Connected: O(LogN)
class UnionFind {
  constructor(size) {
    this.root = [...new Array(size).keys()];
    this.rank = new Array(size).fill(1);
  }

  find(x) {
    while (x !== this.root[x]) {
      x = this.root[x];
    }
    return x;
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.root[rootX] = rootY;
      } else {
        this.root[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

let uf = new UnionFind(10);
uf;
// 1-2-5-6-7 3-8-9 4
uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);
uf;
