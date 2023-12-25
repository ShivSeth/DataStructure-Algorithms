// This is an input class. Do not edit.
class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

export function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree
) {
  // Write your code here.
  let depthOne = getDescendantDepth(descendantOne);
  let depthTwo = getDescendantDepth(descendantTwo);

  let depthDiff = depthOne - depthTwo;

  return depthDiff > 0
    ? backtrackAncestor(descendantTwo, descendantOne, depthDiff)
    : backtrackAncestor(descendantOne, descendantTwo, Math.abs(depthDiff));
}

function getDescendantDepth(node: AncestralTree) {
  let depth = 0;
  while (node.ancestor) {
    node = node.ancestor;
    depth++;
  }
  return depth;
}

function backtrackAncestor(
  higherNode: AncestralTree,
  lowerNode: AncestralTree,
  depthDiff: number
) {
  //Matching the depth
  while (depthDiff && lowerNode.ancestor) {
    lowerNode = lowerNode.ancestor;
    depthDiff--;
  }

  while (
    higherNode.ancestor &&
    lowerNode.ancestor &&
    higherNode.name !== lowerNode.name
  ) {
    lowerNode = lowerNode.ancestor;
    higherNode = higherNode.ancestor;
  }
  return higherNode;
}
