//QuickFind implementation of the disjointSet in JavaScript
//Time-consuming : Find -> O(1) , Union -> O(N)
//Space-Complexity : O(N)

class UnionFind {
  constructor(size) {
    this.root = [...new Array(size).keys()];
  }

  find(x) {
    return this.root[x];
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
      for (let i = 0; i < this.root.length; i++) {
        if (this.root[i] === rootY) {
          this.root[i] = rootX;
        }
      }
    }
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

let uf = new UnionFind(10);
uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);
uf.connected(1, 5);
uf.connected(7, 5);
uf.connected(4, 9);
uf;

let newUf = new UnionFind(7);
newUf;
newUf.union(0, 1);
newUf.union(1, 2);
newUf.union(1, 3);
newUf.union(4, 5);
newUf.union(4, 6);
newUf.union(1, 5);
newUf;
