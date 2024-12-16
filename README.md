# Firebase Asynchronous Operation Error

This repository demonstrates a common error when working with Firebase's asynchronous operations, specifically accessing properties of a document snapshot before the promise returned by `get()` has resolved.

The `bug.js` file shows the erroneous code that attempts to access snapshot data before the promise has fulfilled. The `bugSolution.js` file demonstrates the correct use of `.then()` to handle the asynchronous operation and access the data after the promise resolves.  This issue commonly arises from misunderstanding how promises work in JavaScript.  Always ensure you handle asynchronous Firebase calls using methods like `.then()` or `async/await` to prevent this error.