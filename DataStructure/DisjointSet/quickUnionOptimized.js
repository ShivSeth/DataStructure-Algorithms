///Below way is optimized for thr path and rank -> in find method we have used recursion to reduce the time-consuming for the root finding
//A good way to optimise 😎...we reduced the consecutive searching time and avoided the formation of the Linear LL.

class UnionFind {
  constructor(size) {
    this.root = [...new Array(size).keys()];
    this.rank = new Array(size).fill(1);
  }

  //Earlier way to find
  // find(x) {
  //   if (x !== this.root[x]) x = this.find(this.root[x]);
  //   return x;
  // }

  //Recursive way to find
  find(x) {
    if (x !== this.root[x]) return (this.root[x] = this.find(this.root[x]));
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
uf;
uf.union(3, 2);
uf.find(3);
uf;
// uf.union(2, 5);
// uf.union(5, 6);
// uf.union(6, 7);
// uf.union(3, 8);
// uf.union(8, 9);
uf;
