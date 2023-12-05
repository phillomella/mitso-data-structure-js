const { NotImplementedError } = require("../extensions/index.js");

 const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor(){
    this.head = null;
  }
 
  root() {
    return this.head;
  }

  add(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } 
    else {
      this.insertNode(this.head, node);
    }
  }
  insertNode(rootNode, newNode) {
    if (newNode.data < rootNode.data) {
      if (rootNode.left === null) {
        rootNode.left = newNode;
      } 
      else {
        this.insertNode(rootNode.left, newNode);
      }
    } 
    else {
      if (rootNode.right === null) {
        rootNode.right = newNode;
      } 
      else {
        this.insertNode(rootNode.right, newNode);
      }
    }
  }

  has( data ) {
    if (this.head == null) {
      return false;
    } 
    if (!data) {
      return true;
    }
    else {
      return this.hasNode(this.head, data);
    }
  }
  hasNode(headNode, data){
    if (headNode.data === data) {
      return true;
    }
    if (data < headNode.data) {
      if (headNode.left === null) {
        return false;
      } 
      else {
        return this.hasNode(headNode.left, data);
      }
    } 
    else {
      if (headNode.right === null) {
        return false;
      } 
      else {
        return this.hasNode(headNode.right, data);
      }
    }
  }

  find( data ) {
    if (this.head == null) {
      return null;
    } 
    else {
      return this.findNode(this.head, data);
    }
  }

  findNode(headNode, data){
    if (headNode.data === data) {
      return headNode;
    }
    if (data < headNode.data) {
      if (headNode.left === null) {
        return null;
      } 
      else {
        return this.findNode(headNode.left, data);
      }
    } 
    else {
      if (headNode.right === null) {
        return null;
      } 
      else {
        return this.findNode(headNode.right, data);
      }
    }
  }

  remove(data ) {
    this.head = this.removeNode(this.head, data)
  }
  removeNode(node, data) {
    if (node === null) {
      return null;
    }
    
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } 
    else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
    }
    else {
      if (node.left === null && node.right === null) {
        node = null;
      } 
      else if (node.left === null) {
        node = node.right;
      } 
      else if (node.right === null) {
        node = node.left;
      } 
      else {
        const successor = this.findMinNode(node.right);
        node.data = successor.data;
        node.right = this.removeNode(node.right, successor.data);
      }
    }
    return node;
    }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    }
        return this.findMinNode(node.left);
    }
      
    
  min() {
    if(this.head === null){
      return null;
    }
    if(this.head.left == null){
      return this.head.data;
    }
    else{
      return this.minNode(this.head.left);
    }
  }
  minNode(headNode){
    if(headNode.left === null){
      return headNode.data;
    }
    else{
      return this.minNode(headNode.left);
    }
  }
  
  max() {
    if(this.head === null){
      return null;
    }
    if(this.head.right == null){
      return this.head.data;
    }
    else{
      return this.maxNode(this.head.right);
    }
  }

  maxNode(headNode){
    if(headNode.right == null){
      return headNode.data;
    }
    else{
      return this.maxNode(headNode.right);
    }
  }
};