export const topics = {
  'ios-core': {
    title: 'iOS Core',
    subtopics: [
      {
        id: 'closures',
        title: 'Mastering Swift Closures',
        content: (
          <>
            <h3>Introduction to Closures</h3>
            <p>Closures are self-contained blocks of code that can be passed around and used in your code. They are similar to functions but can capture and store references to any constants and variables from the context in which they are defined.</p>
            
            <h3>Basic Syntax</h3>
            <pre><code>{`let simpleClosure = { (parameters) -> ReturnType in
    // closure body
}`}</code></pre>
            
            <h3>Types of Closures</h3>
            <ul>
              <li>Global functions</li>
              <li>Nested functions</li>
              <li>Closure expressions</li>
            </ul>
          </>
        )
      },
      {
        id: 'memory',
        title: 'Mastering iOS Memory Management',
        content: (
          <>
            <h3>Introduction to Memory Management</h3>
            <p>Memory management is crucial for creating efficient iOS applications. Understanding how memory works in iOS helps prevent memory leaks and improve app performance.</p>
            
            <h3>Key Concepts</h3>
            <ul>
              <li>Reference Counting</li>
              <li>Strong and Weak References</li>
              <li>Retain Cycles</li>
              <li>ARC (Automatic Reference Counting)</li>
            </ul>
          </>
        )
      },
      {
        id: 'stack',
        title: 'Mastering in Stack Memory Management',
        content: (
          <>
            <h3>Stack Memory Overview</h3>
            <p>The stack is a region of memory that stores local variables and function call information. It's managed automatically by the system and follows a Last-In-First-Out (LIFO) structure.</p>
            
            <h3>Key Points</h3>
            <ul>
              <li>Stack vs Heap</li>
              <li>Stack Frame</li>
              <li>Stack Overflow</li>
              <li>Memory Allocation on Stack</li>
            </ul>
          </>
        )
      },
      {
        id: 'heap',
        title: 'Mastering in Heap Memory Management',
        content: (
          <>
            <h3>Heap Memory Overview</h3>
            <p>The heap is a region of memory used for dynamic memory allocation. Unlike the stack, heap memory is not automatically managed and requires explicit memory management.</p>
            
            <h3>Key Concepts</h3>
            <ul>
              <li>Dynamic Memory Allocation</li>
              <li>Memory Fragmentation</li>
              <li>Garbage Collection</li>
              <li>Memory Leaks</li>
            </ul>
          </>
        )
      }
    ]
  },
  'system-design': {
    title: 'System Design',
    subtopics: [
      {
        id: 'ios-architecture',
        title: 'iOS System Architecture',
        content: (
          <>
            <h3>Overview</h3>
            <p>Understanding the iOS system architecture is crucial for building robust and efficient applications. This topic covers the fundamental layers and components of iOS.</p>
            
            <h3>Key Components</h3>
            <ul>
              <li>Core OS Layer</li>
              <li>Core Services Layer</li>
              <li>Media Layer</li>
              <li>Cocoa Touch Layer</li>
            </ul>
            
            <h3>Architecture Patterns</h3>
            <ul>
              <li>MVC (Model-View-Controller)</li>
              <li>MVVM (Model-View-ViewModel)</li>
              <li>Clean Architecture</li>
            </ul>
          </>
        )
      },
      {
        id: 'design-patterns',
        title: 'iOS Design Patterns',
        content: (
          <>
            <h3>Common Design Patterns</h3>
            <p>Design patterns are reusable solutions to common problems in software design. Understanding these patterns helps in creating maintainable and scalable iOS applications.</p>
            
            <h3>Key Patterns</h3>
            <ul>
              <li>Singleton Pattern</li>
              <li>Observer Pattern</li>
              <li>Factory Pattern</li>
              <li>Delegate Pattern</li>
            </ul>
          </>
        )
      },
      {
        id: 'scalability',
        title: 'iOS App Scalability',
        content: (
          <>
            <h3>Scalability Considerations</h3>
            <p>Building scalable iOS applications requires careful consideration of various factors that affect performance and maintainability.</p>
            
            <h3>Key Areas</h3>
            <ul>
              <li>Code Organization</li>
              <li>Performance Optimization</li>
              <li>Resource Management</li>
              <li>Testing Strategies</li>
            </ul>
          </>
        )
      }
    ]
  },
  'dsa': {
    title: 'DSA',
    subtopics: [
      {
        id: 'arrays',
        title: 'Arrays',
        content: (
          <>
            <h3>Introduction to Arrays</h3>
            <p>Arrays are fundamental data structures that store elements of the same type in contiguous memory locations.</p>
            
            <h3>Key Concepts</h3>
            <ul>
              <li>Array Declaration and Initialization</li>
              <li>Array Operations (Insert, Delete, Search)</li>
              <li>Multi-dimensional Arrays</li>
              <li>Array vs Dynamic Array</li>
            </ul>
            
            <h3>Common Problems</h3>
            <ul>
              <li>Two Sum</li>
              <li>Maximum Subarray</li>
              <li>Rotate Array</li>
              <li>Merge Sorted Arrays</li>
            </ul>
          </>
        )
      },
      {
        id: 'strings',
        title: 'Strings',
        content: (
          <>
            <h3>String Manipulation</h3>
            <p>Strings are sequences of characters that are fundamental to many programming problems.</p>
            
            <h3>Key Concepts</h3>
            <ul>
              <li>String Operations</li>
              <li>String Matching Algorithms</li>
              <li>String Manipulation Techniques</li>
              <li>Regular Expressions</li>
            </ul>
          </>
        )
      },
      {
        id: 'linked-lists',
        title: 'Linked Lists',
        content: (
          <>
            <h3>Linked List Basics</h3>
            <p>Linked lists are linear data structures where elements are stored in nodes, and each node points to the next node in the sequence.</p>
            
            <h3>Types of Linked Lists</h3>
            <ul>
              <li>Singly Linked List</li>
              <li>Doubly Linked List</li>
              <li>Circular Linked List</li>
            </ul>
          </>
        )
      },
      {
        id: 'stacks',
        title: 'Stacks',
        content: (
          <>
            <h3>Stack Data Structure</h3>
            <p>A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.</p>
            
            <h3>Operations</h3>
            <ul>
              <li>Push</li>
              <li>Pop</li>
              <li>Peek/Top</li>
              <li>isEmpty</li>
            </ul>
          </>
        )
      },
      {
        id: 'queues',
        title: 'Queues',
        content: (
          <>
            <h3>Queue Data Structure</h3>
            <p>A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.</p>
            
            <h3>Types of Queues</h3>
            <ul>
              <li>Simple Queue</li>
              <li>Circular Queue</li>
              <li>Priority Queue</li>
              <li>Double Ended Queue</li>
            </ul>
          </>
        )
      },
      {
        id: 'trees',
        title: 'Trees',
        content: (
          <>
            <h3>Tree Data Structure</h3>
            <p>Trees are hierarchical data structures consisting of nodes connected by edges.</p>
            
            <h3>Types of Trees</h3>
            <ul>
              <li>Binary Tree</li>
              <li>Binary Search Tree</li>
              <li>AVL Tree</li>
              <li>Red-Black Tree</li>
            </ul>
          </>
        )
      },
      {
        id: 'graphs',
        title: 'Graphs',
        content: (
          <>
            <h3>Graph Data Structure</h3>
            <p>Graphs are non-linear data structures consisting of vertices and edges.</p>
            
            <h3>Graph Types</h3>
            <ul>
              <li>Directed Graph</li>
              <li>Undirected Graph</li>
              <li>Weighted Graph</li>
              <li>Unweighted Graph</li>
            </ul>
          </>
        )
      },
      {
        id: 'sorting',
        title: 'Sorting',
        content: (
          <>
            <h3>Sorting Algorithms</h3>
            <p>Sorting algorithms are methods to arrange elements in a specific order.</p>
            
            <h3>Common Algorithms</h3>
            <ul>
              <li>Bubble Sort</li>
              <li>Selection Sort</li>
              <li>Insertion Sort</li>
              <li>Quick Sort</li>
              <li>Merge Sort</li>
            </ul>
          </>
        )
      },
      {
        id: 'searching',
        title: 'Searching',
        content: (
          <>
            <h3>Searching Algorithms</h3>
            <p>Searching algorithms are methods to find elements in a data structure.</p>
            
            <h3>Common Algorithms</h3>
            <ul>
              <li>Linear Search</li>
              <li>Binary Search</li>
              <li>Depth-First Search</li>
              <li>Breadth-First Search</li>
            </ul>
          </>
        )
      }
    ]
  }
}; 