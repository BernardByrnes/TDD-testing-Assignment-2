# Fibonacci TDD Assignment

## Pair/Triplet

- Bernard Mutambo
- Mary Achero

## Overview

This assignment demonstrates the Test-Driven Development (TDD) process by implementing a Fibonacci function in JavaScript. The process involves writing tests first, then updating the implementation to pass each test, evolving the function step by step.

## TDD Steps Followed

1. **Wrote a test for `fibonacci(0)`**
   - Implemented the function to return 0 for input 0.
2. **Added a test for `fibonacci(1)`**
   - Updated the function to return 1 for input 1.
3. **Added a test for `fibonacci(2)`**
   - Ensured the function returns 1 for input 2.
4. **Added a test for `fibonacci(3)`**
   - Updated the function to use recursion for n > 1.
5. **Added a test for `fibonacci(6)`**
   - Confirmed the function works for larger values.

## Code Explanation

- The `fibonacci.js` file exports a function that calculates the nth Fibonacci number using recursion.
- The `fibonacci.test.js` file contains a series of Jest tests, each added before updating the implementation, following the TDD approach.

## How to Run

1. Install dependencies: `npm install`
2. Run tests: `npm test` or `npx jest fibonacci.test.js`

## What Happened

- The function was developed incrementally, always starting with a failing test, then updating the code to pass.
- This ensured correctness at each step and demonstrated the TDD workflow.

---
