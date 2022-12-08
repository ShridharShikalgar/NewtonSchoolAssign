import React from 'react';

function App() {

  return (
    <div>
      <input type="text" placeholder="Enter some text" />
      <button>Focus Input</button>
    </div>
  );
}


export default App;

// ------------------------------------------ Assignment ----------------------------------------------

// 1) You are provided with a boilerplate for a React app that contains an boilerplate.js component.
//    Your task is to modify the App component to use the useRef hook to create a reference to the input element 
//    and focus the input element when the button is clicked.

// To complete this assignment, follow these steps:

// step1: Import the useRef hook from the react package.

// step2: In the App component, use the useRef hook to create a reference to the input element.

// step3: Attach the ref attribute to the input element and set its value to the reference created in the previous step.

// step4: Create an event handler named handleClick that uses the current property of the reference to focus the input element.

// step5: Bind the handleClick event handler to the onClick event of the button element.

// step6: Once you have completed these steps, run the test cases to verify that your implementation is correct. 
//The test cases are located in the "cypress/e2e/spec.cy.js" file and can be run using the npm run test command.

