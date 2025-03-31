export const topics = {
  "ios-core": {
    "title": "iOS Core",
    "subtopics": [
      {
        "id": "memory-management",
        "title": "Memory Management",
        "content": {
          "introduction": "Memory management is a crucial aspect of iOS development that ensures efficient resource utilization and prevents memory leaks.",
          "keyConcepts": [
            "ARC (Automatic Reference Counting)",
            "Strong and Weak References",
            "Retain Cycles",
            "Memory Leaks"
          ],
          "details": {
            "arc": {
              "title": "ARC (Automatic Reference Counting)",
              "description": "ARC is a compiler feature that automatically manages memory by tracking and managing object references.",
              "examples": [
                "Strong references",
                "Weak references",
                "Unowned references"
              ]
            },
            "retainCycles": {
              "title": "Retain Cycles",
              "description": "A retain cycle occurs when two or more objects hold strong references to each other, preventing them from being deallocated.",
              "solutions": [
                "Using weak references",
                "Using unowned references",
                "Breaking circular dependencies"
              ]
            }
          }
        }
      },
      {
        "id": "closures",
        "title": "Closures",
        "content": {
          "introduction": "Closures are self-contained blocks of code that can be passed around and used in your code.",
          "keyConcepts": [
            "Basic Syntax",
            "Capture Lists",
            "Trailing Closures",
            "Escaping Closures"
          ],
          "details": {
            "basicSyntax": {
              "title": "Basic Syntax",
              "description": "Closures can be written in several forms, from the most verbose to the most concise.",
              "examples": [
                "Full closure syntax",
                "Inferring types",
                "Implicit returns"
              ]
            },
            "captureLists": {
              "title": "Capture Lists",
              "description": "Capture lists help prevent retain cycles by explicitly specifying how to capture values in a closure.",
              "examples": [
                "Using weak self",
                "Using unowned self",
                "Capturing specific values"
              ]
            }
          }
        }
      }
    ]
  },
  "system-design": {
    "title": "System Design",
    "subtopics": [
      {
        "id": "scalability",
        "title": "Scalability",
        "content": {
          "introduction": "Scalability is the ability of a system to handle growing amounts of work in a graceful manner.",
          "keyConcepts": [
            "Vertical Scaling",
            "Horizontal Scaling",
            "Load Balancing",
            "Caching"
          ],
          "details": {
            "verticalScaling": {
              "title": "Vertical Scaling",
              "description": "Adding more resources to a single node in the system.",
              "pros": [
                "Simpler architecture",
                "Lower latency",
                "Easier maintenance"
              ],
              "cons": [
                "Limited by hardware",
                "Single point of failure",
                "Higher cost per unit"
              ]
            }
          }
        }
      }
    ]
  },
  "dsa": {
    "title": "Data Structures & Algorithms",
    "subtopics": [
      {
        "id": "arrays",
        "title": "Arrays",
        "content": {
          "introduction": "Arrays are fundamental data structures that store elements in contiguous memory locations.",
          "keyConcepts": [
            "Time Complexity",
            "Space Complexity",
            "Operations",
            "Use Cases"
          ],
          "details": {
            "timeComplexity": {
              "title": "Time Complexity",
              "description": "Understanding the time complexity of array operations.",
              "operations": {
                "access": "O(1)",
                "search": "O(n)",
                "insertion": "O(n)",
                "deletion": "O(n)"
              }
            }
          }
        }
      }
    ]
  }
}; 