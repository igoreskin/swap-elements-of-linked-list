SWAP EVERY TWO ADJACENT ELEMENTS OF A LINKED LIST

This is a very simple Object Oriented solution to the problem of swapping two adjacent elements of a singly linked list. Instead of incorporating complex logic of multiple iteration or recursion into the actual swap function, which would make it difficult to read as well as slow in terms of time complexity, this function relies on a few simple helper functions and a counter.

This solution demonstrates the power of the principle of separation of concerns in the sense that each of the class functions of the LinkedList class only takes care of its own specific task and nothing else, which makes these functions clear and concise. This also allows the actual swap function to completely focus on swapping positions of already located elements, which also makes this function extremely simple, short and easily readable.
