//Hash Tables -> K-V pairs
//Like arrays but keys are not ordered
//Fast -> Operations
//Output of hash function is meaningless on its own
//Hast | Don't Cluster | Deterministic
//Use prime length for min collisions - Don't ask for the logic

//Collisions solutions - Linear Probing or Separate Chaining
function hash_1(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total += (total + value) % arrayLen;
  }
}

function hash_2(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(53);
  }

  //hash function
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (!keysArr.includes(this.keyMap[i][j][0]))
          keysArr.push(this.keyMap[i][j][0]);
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (!keysArr.includes(this.keyMap[i][j][1]))
          keysArr.push(this.keyMap[i][j][1]);
      }
    }
    return valuesArr;
  }
}

let hTable = new HashTable();
