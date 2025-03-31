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
            <p>Closures are self-contained blocks of code that can be passed around and used in your code. They are similar to functions but can capture and store references to variables and constants from the context in which they are defined. Think of closures as functions that can be assigned to variables, passed as arguments, and returned from other functions.
            This makes Swift a powerful functional programming language while maintaining its object-oriented capabilities.</p>
            
            <h3>Basic Syntax</h3>
            <pre><code>{```// Basic closure syntax
let simpleClosure = { (parameters) -> ReturnType in
    // closure body
}

// Example
let numbers = [1, 2, 3, 4, 5]
let sortedNumbers = numbers.sorted { $0 < $1 }

// More complex example with capture list
var counter = 0
let incrementCounter = { [weak self] in
    counter += 1
    print("Counter is now \(counter)")
}```}</code></pre>
            
            <h3>Types of Closures</h3>
            <ul>
              <li><strong>Global functions:</strong> Functions that are defined at the global scope</li>
              <li><strong>Nested functions:</strong> Functions defined inside other functions</li>
              <li><strong>Closure expressions:</strong> Anonymous functions that can capture values from their surrounding context</li>
            </ul>

            <h3>Closure Capture Lists</h3>
            <p>Capture lists help prevent retain cycles and control how values are captured in closures:</p>
            <pre><code>{```// Capture list syntax
[weak self] // Weak reference to self
[unowned self] // Unowned reference to self
[weak delegate = self.delegate] // Weak reference to a property
[unowned delegate = self.delegate] // Unowned reference to a property```}</code></pre>

            <h3>Trailing Closure Syntax</h3>
            <p>Swift provides a cleaner syntax for closures when they are the last parameter:</p>
            <pre><code>{```// Without trailing closure
someFunction(parameter: value, closure: { (parameter) in
    // closure body
})

// With trailing closure
someFunction(parameter: value) { (parameter) in
    // closure body
}```}</code></pre>

            <h3>Common Use Cases</h3>
            <ul>
              <li><strong>Completion Handlers:</strong> Used in asynchronous operations</li>
              <li><strong>Higher-Order Functions:</strong> Functions that take other functions as parameters</li>
              <li><strong>Animation Blocks:</strong> Used in UI animations</li>
              <li><strong>Network Callbacks:</strong> Handling asynchronous network requests</li>
            </ul>

            <h3>Best Practices</h3>
            <ul>
              <li>Use capture lists to avoid retain cycles</li>
              <li>Prefer trailing closure syntax for better readability</li>
              <li>Use weak references when appropriate</li>
              <li>Keep closures concise and focused</li>
            </ul>

            <h3>Example: Network Request with Closure</h3>
            <pre><code>{```func fetchData(completion: @escaping (Result<Data, Error>) -> Void) {
    URLSession.shared.dataTask(with: url) { data, response, error in
        if let error = error {
            completion(.failure(error))
            return
        }
        guard let data = data else {
            completion(.failure(NSError(domain: "", code: -1)))
            return
        }
        completion(.success(data))
    }.resume()
}```}</code></pre>
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

// Last updated: April 1, 2025 