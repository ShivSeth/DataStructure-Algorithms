// Do not edit the class below except for
// the constructor and the createSet, find,
// and union methods. Feel free to add new
// properties and methods to the class.
// export class UnionFind {
//   parents: Record<number, number>;
//   constructor() {
//     // Write your code here.
//     this.parents = {};
//   }

//   createSet(value: number) {
//     // Write your code here.
//     this.parents[value] = value;
//   }

//   find(value: number) {
//     // Write your code here.
//     if (!(value in this.parents)) return null;

//     let currentParent = value;
//     while (currentParent !== this.parents[currentParent]) {
//       currentParent = this.parents[currentParent];
//     }

//     return currentParent;
//   }

//   union(valueOne: number, valueTwo: number) {
//     // Write your code here.

//     if (!(valueOne in this.parents) || !(valueTwo in this.parents)) return null;
//     const valueOneRoot = this.find(valueOne)!;
//     const valueTwoRoot = this.find(valueTwo)!;
//     this.parents[valueTwoRoot] = valueOneRoot;
//   }
// }

// Do not edit the class below except for
// the constructor and the createSet, find,
// and union methods. Feel free to add new
// properties and methods to the class.
export class UnionFind {
  parents: Record<number, number>;
  ranks: Record<number, number>;
  constructor() {
    // Write your code here.
    this.parents = {};
    this.ranks = {};
  }

  createSet(value: number) {
    // Write your code here.
    this.parents[value] = value;
    this.ranks[value] = 0;
  }

  // find(value: number) {
  //   // Write your code here.
  //   if (!(value in this.parents)) return null;

  //   let currentParent = value;
  //   while (currentParent !== this.parents[currentParent]) {
  //     currentParent = this.parents[currentParent];
  //   }
  //   return currentParent;
  // }

  //Optimized find method
  find(value: number) {
    // Write your code here.
    if (!(value in this.parents)) return null;

    if (value !== this.parents[value])
      this.parents[value] = this.find(this.parents[value])!;
    return this.parents[value];
  }

  union(valueOne: number, valueTwo: number) {
    // Write your code here.
    if (!(valueOne in this.parents) || !(valueTwo in this.parents)) return null;

    let valueOneRoot = this.find(valueOne)!;
    let valueTwoRoot = this.find(valueTwo)!;

    if (this.ranks[valueOneRoot] > this.ranks[valueTwoRoot])
      this.parents[valueTwoRoot] = valueOneRoot;
    else if (this.ranks[valueOneRoot] < this.ranks[valueTwoRoot])
      this.parents[valueOneRoot] = valueTwoRoot;
    else {
      this.parents[valueTwoRoot] = valueOneRoot;
      this.ranks[valueOneRoot] += 1;
    }
  }
}
