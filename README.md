Name of your project: Dev Stack.
A little description: Dev Stack is an interactive web platform designed to help developers explore, compare, and build their ideal technology stack for their next software projects.
Technology that you use: React.js,TypeScript,Tailwind CSS,DaisyUI,JavaScript (ES6+),React-Toastify (NPM Package),JSON (for technology data),Vite (build tool).
3 features about your project:Interactive Tech Stack Selection,Categorized Technology Exploration,Toast Notifications.


React Questions & Answers
1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to write and understand.

2. What is the difference between props and state?
Props are data passed from a parent to a child component. State is data managed and changed inside a component.

3. What does the useState hook do, and where did you use it in this project?
useState is used to store and update component data. I used it to manage the stack/items and their changes.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs code after a component renders. I used it to load the JSON data when the component starts.

5. Why does every item in a .map() list need a unique key prop?
A unique key helps React identify each item and update the list efficiently when items change.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing something only when a condition is true. For example, I showed an empty stack message when there were no items in the stack.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data to a child using props. A child can send data back by calling a function passed through props by the parent.
