// Here is a small React app that demonstrates the use of the useRef hook:

function boilerplate() {
  const inputRef = useRef(); // the useRef hook is used to create a reference to the input element
                             // The reference is saved in the inputRef variable
                             //which is then used to set the ref attribute of the input element. 
  const handleClick = () => {
    inputRef.current.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter some text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default boilerplate;

//  The ref attribute is a special attribute that allows you to access the underlying DOM element
// In this case, the ref attribute is used to call the focus() 
// method on the input element when the user clicks the button element.

//--> test Cases of cypress : is available inside the "cypress/e2e/spec.cy.js"
