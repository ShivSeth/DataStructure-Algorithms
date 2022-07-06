// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let node = new BST(value);
    let current = this;
    while (true) {
      if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      } else {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
    }
  }

  contains(value) {
    // Write your code here.
    let current = this;
    while (current) {
      if (current.value === value) return true;
      else if (current.value < value) current = current.right;
      else if (current.value > value) current = current.left;
      else return false;
    }
  }

  remove(value, parent) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let current = this;
    if (current.value < value) {
      current.right && current.right.remove(value, current);
    } else if (current.value > value) {
      current.left && current.left.remove(value, current);
    } else if (current.value === value) {
      if (current.right === null && current.left === null) {
        if (!parent) return this;
        parent.left &&
          parent.left.value === current.value &&
          (parent.left = null);
        parent.right &&
          parent.right.value === current.value &&
          (parent.right = null);
      } else if (current.right && !current.left) {
        if (!parent) {
          current.value = current.right.value;
          current.right = current.right.right;
        } else {
          parent.left &&
            parent.left.value === current.value &&
            (parent.left = current.right);
          parent.right &&
            parent.right.value === current.value &&
            (parent.right = current.right);
        }
      } else if (current.left && !current.right) {
        if (!parent) {
          current.value = current.left.value;
          current.left = current.left.left;
        } else {
          parent.left &&
            parent.left.value === current.value &&
            (parent.left = current.left);
          parent.right &&
            parent.right.value === current.value &&
            (parent.right = current.left);
        }
      } else {
        //Here the node to be removed has both left and right child
        //Find minimum of the sub tree
        let minimum = current.right;
        while (minimum.left) minimum = minimum.left;
        if (current.value === minimum.value) {
          current.right = minimum.right;
        } else {
          let temp = minimum.value;
          current.remove(temp);
          current.value = temp;
        }
      }
    }
    return this;
  }
}
