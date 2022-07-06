function minHeightBst(array, l, r) {
  // Write your code here.
  l = l !== undefined ? l : 0;
  r = r !== undefined ? r : array.length - 1;
  if (l > r) return null;
  let mid = Math.floor((l + r) / 2);
  let midNode = new BST(array[mid]);
  midNode.left = minHeightBst(array, l, mid - 1);
  midNode.right = minHeightBst(array, mid + 1, r);
  return midNode;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
