/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  // 1
  // [2   3]
  // [4    5   6]
  sumValues() {
    if (!this.root) return 0;
    let sum = 0;
    console.log(sum);
    let toVisitQueue = [this.root];
    while (toVisitQueue.length) {
      let currentNode = toVisitQueue.shift()
      console.log('currentNode', currentNode);
      sum += currentNode.val;
      for (let child of currentNode.children) {
        toVisitQueue.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let numEvens = 0;
    let toVisitQueue = [this.root];
    while (toVisitQueue.length) {
      let currentNode = toVisitQueue.shift()
      console.log('currentNode', currentNode);
      if (currentNode.val % 2 === 0) numEvens++;
      for (let child of currentNode.children) {
        toVisitQueue.push(child);
      }
    }
    return numEvens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let count = 0;
    let toVisitQueue = [this.root];
    while (toVisitQueue.length) {
      let currentNode = toVisitQueue.shift()
      console.log('currentNode', currentNode);
      if (currentNode.val > lowerBound) count++;
      for (let child of currentNode.children) {
        toVisitQueue.push(child);
      }
    }
    return count;
  }
}

const one = new TreeNode(1);
const two = new TreeNode(2)
const three = new TreeNode(3)
one.children.push(two)
two.children.push(three)
const tree = new Tree(one)

module.exports = { Tree, TreeNode };
