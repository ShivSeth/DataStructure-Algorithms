//Disjoint set implementation using the Quick Union method.
//Time-consuming -> Find: O(N) [Worst Case only] Union: O(N) Connected: O(N)
//Space-complexity -> O(N)
//High Chance the adding the elements will form the Linked-List structure
//LL structure can be formed by constantly adding nodes in the LL way 😂.
class UnionFind {
  constructor(size) {
    this.root = [...new Array(size).keys()];
  }

  find(x) {
    while (x != this.root[x]) {
      x = this.root[x];
    }
    return x;
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
      this.root[rootY] = rootX;
    }
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

let uf = new UnionFind(10);
uf;
uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);
uf;
uf.connected(1, 5);
uf.connected(7, 5);
uf.connected(4, 9);

let newUf = new UnionFind(7);
newUf;
newUf.union(0, 1);
newUf.union(1, 2);
newUf.union(1, 3);
newUf.union(4, 5);
newUf.union(4, 6);
newUf.union(1, 5);
newUf;
