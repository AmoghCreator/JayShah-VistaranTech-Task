const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());

app.get('/' , (req , res) => {
const content = `
# The Power of Recursion: Understanding and Implementing Factorials in JavaScript

Recursion is a powerful concept in computer science that involves solving problems by breaking them down into smaller, similar subproblems. One classic example of recursion is calculating factorials. In this blog post, we'll explore what factorials are, how they can be implemented recursively in JavaScript, and why recursion is such a valuable tool for solving problems.

![Placeholder Image](https://via.placeholder.com/500x300)
## Understanding Factorials

A factorial is the product of all positive integers less than or equal to a given positive integer. It is denoted by the symbol "!".

For example:
- 5 factorial (written as 5!) is equal to 5 * 4 * 3 * 2 * 1 = 120.
- 3 factorial (written as 3!) is equal to 3 * 2 * 1 = 6.

Factorials can be calculated iteratively using loops, but they can also be computed recursively.

## Implementing Factorials Recursively in JavaScript

Let's implement a function to calculate factorials recursively in JavaScript:

\`\`\`javascript
function factorial(n) {
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: n! = n * (n-1)!
  return n * factorial(n - 1);
}
\`\`\`

## Testing the Function

Let's test our factorial function with some example inputs: ${/* strange bug, when I used \`factorial\` we cannot access the properties of the next code block*/ " "}

\`\`\`javascript
console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6
console.log(factorial(0)); // Output: 1 (base case)
\`\`\`

## Why Recursion?

Recursion offers a concise and elegant solution to certain types of problems. It allows us to break down complex problems into simpler, more manageable subproblems. While it may not always be the most efficient solution, recursion can lead to cleaner and more maintainable code.

## Conclusion

Recursion is a fundamental concept in computer science, and understanding how to use it effectively can help you tackle a wide range of problems. By implementing factorial calculation recursively in JavaScript, we've demonstrated the power and versatility of recursion as a problem-solving technique.

`;


  console.log("done")
  res.send({
    content : content,
    author: "Author XYZ",
    date: "04 May 2024"
  });
})

app.get('/blogs' , (req, res) => {
  res.send(
[
    {
        "heading": "The Power of Recursion: Understanding and Implementing Factorials in JavaScript",
        "description": "Recursion is a powerful concept in computer science that involves solving problems by breaking them down into smaller, similar subproblems. One classic example of recursion is calculating factorials. In this blog post, we'll explore what factorials are, how they can be implemented recursively in JavaScript, and why recursion is such a valuable tool for solving problems.",
        "author": "Author XYZ",
        "date": "05 May 2024",
        "image": "https://via.placeholder.com/500x300"
    },
    {
        "heading": "Exploring the Depths of Graph Theory: A Journey Through Applications and Algorithms",
        "description": "Graph theory is a fascinating field with numerous applications in computer science, from social networks to routing algorithms. In this article, we'll delve into the fundamentals of graph theory, explore common algorithms like breadth-first search and depth-first search, and showcase real-world applications.",
        "author": "Author ABC",
        "date": "10 April 2024",
        "image": "https://via.placeholder.com/500x300"
    },
    {
        "heading": "Mastering Object-Oriented Programming: A Comprehensive Guide with JavaScript Examples",
        "description": "Object-oriented programming (OOP) is a fundamental paradigm in software development, allowing for modular and scalable code. In this comprehensive guide, we'll cover the principles of OOP, such as encapsulation, inheritance, and polymorphism, and demonstrate how to apply them using JavaScript.",
        "author": "Author PQR",
        "date": "20 March 2024",
        "image": "https://via.placeholder.com/500x300"
    }
]
)
})

app.listen(5000, () => console.log("server started at 3000"))
