const questions = [
  {
    id: 1,
    title: "Why do we need to ‘ import React from “react” ’ in our files ?",
    info: "React is what defines JSX",
  },
  {
    id: 2,
    title: "If I were to console.log(page) in index.js, what would show up ? ",
    info: "A javaScript object. React elements that describe what React should eventually add to the real DOM for us.",
  },
  {
    id: 3,
    title:
      "What does it mean for something to be “declarative” instead of “imperative” ?",
    info: "Declarative means I can tell the computer WHAT to do and expect it to handle the details.Imperative means I need to tell it HOW to do each step.",
  },
  {
    id: 4,
    title: "What does it mean for something to be “composable” ? ",
    info: "We have small pieces that we can put together to make something larger/greater than the indivdual pieces.",
  },
  {
    id: 5,
    title: "What is a React component ? ",
    info: "A function that returns React elements.",
  },
  {
    id: 6,
    title: "What do props help us accomplish ?",
    info: "Make a component more reusable.",
  },
  {
    id: 7,
    title: "How do you pass a prop into a component ? ",
    info: "<MyAwesomeHeader title=”???”/>",
  },
  {
    id: 8,
    title:
      "Can I pass a custom prop (e.g. blahblahblah={true}) to a native DOM element? (e.g. <div blahblahblah={true}>) Why or why not? ",
    info: "No, because the JSX we use to describe native DOM elements will be turned into REAL DOM elements by React. And real DOM elements only have the prooperties/attributes specified in the HTML specification.Which doesn't include properties like blahblahblah)",
  },
  {
    id: 9,
    title: "What does the .map( ) array method do ?  ",
    info: "Returns a new array. Whatever gets returned from the callback function provided is placed at the same index in the new array. Usually we take the items from the original array and modify them in some way.",
  },
  {
    id: 10,
    title: "What do we usually use .map() for in React? ",
    info: "Convert an array of raw data into an array of JSX elements that can be displayed on the page.",
  },
  {
    id: 11,
    title:
      "Why is using .map() better than just creating the components manually by typing them out? ",
    info: "It makes our code more 'self-sustaining' - not requiring additional changes whenever the data changes.",
  },
  {
    id: 12,
    title: "How would you describe the concept of “state” ?  ",
    info: "A way for React to remember saved values from withing a component. This is similar to declaring variables from within a component, with a few added bonuses (which we’ll get to later)",
  },
  {
    id: 13,
    title: "When would you want to use props instead of state ? ",
    info: "Anytime you want to pass data into a component so that component can determine what will get displayed on the screen.",
  },
  {
    id: 14,
    title: "When would you want to use state instead of props ?  ",
    info: "Anytime you want a component to maintain some values from within the component. (And “remember” those values even when React re-renders the component)",
  },
  {
    id: 15,
    title:
      "What does “immutable” mean ? Are props immutable ? Is state immutable ?  ",
    info: "Unchanging. Props are immutable. States is mutable.",
  },
  {
    id: 16,
    title:
      "You have 2 options for what you can pass in to a state setter function (e.g. setCount). What are they? ",
    info: "a. New value of state (setCount(42) b. Callback function - whatever the callback function returns === new value of state",
  },
  {
    id: 17,
    title:
      "When would you want to pass the first option (from answer above) to the state setter function?",
    info: "Whenever you don't need the previous value of state to determine what the new value of state should be.",
  },
  {
    id: 18,
    title:
      " When would you want to pass the second option (from answer above) to the state setter function?  ",
    info: "Whenever you DO need the previous value to determine the new value",
  },
  {
    id: 19,
    title:
      "In a vanilla JS app, at what point in the form submission process do you gather all the data from the filled-out form?",
    info: "Right before the form is submitted.",
  },
  {
    id: 20,
    title:
      "In a React app, when do you gather all the data from the filled-out form?",
    info: "As the form is being filled out. The data is all held in local state.",
  },
  {
    id: 21,
    title:
      "Which attribute in the form elements (value, name, onChange, etc.) should match the property name being held in state for that input? ",
    info: "`name` property.",
  },
  {
    id: 22,
    title:
      "What's different about saving the data from a checkbox element vs. other form elements?",
    info: "A checkbox uses the `checked` property to determine what should be saved in state. Other form elements use the `value` property instead.",
  },
  {
    id: 23,
    title:
      "How do you watch for a form submit? How can you trigger  a form submit? ",
    info: "- Can watch for the submit with an onSubmit handler on the `form` element. -Can trigger the form submit with a button click.",
  },
];
export default questions;
