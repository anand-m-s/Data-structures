class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) return "Underflow";
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  function removeMiddle(stack) {
    if (stack.isEmpty()) return "Stack is empty";
  
    const middleIndex = Math.floor(stack.size() / 2);
    const tempStack = new Stack();
  
    // Pop and push elements until middle is reached
    for (let i = 0; i < middleIndex; i++) {
      tempStack.push(stack.pop());
    }
  
    // Skip the middle element
    stack.pop();
  
    // Restore elements back to original stack
    while (!tempStack.isEmpty()) {
      stack.push(tempStack.pop());
    }
  
    return stack;
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  
  console.log("Original Stack:", stack.items);
  removeMiddle(stack);
  console.log("Stack after removing middle element:", stack.items);