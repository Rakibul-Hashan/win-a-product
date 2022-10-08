import React from 'react';

const Question = () => {
    return (
        <div>
            <h1>Question 1: How does React work?</h1>
            <p>Answer:
                React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation. Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.
            </p>
            <h1>Question 2: What is the difference between State and Props</h1>
            <p>Answer:
                Props: Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.
                State: The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>

            <h1>Question 3: What are the different use-case of useEfect except API call?</h1>
            <p>Answer:
                The outcome from a Component is to render "something" on the user interface with the rendering logic(written in JSX). Many factors drive the rendering logic, The state values are defined and updated inside a component. The props values are passed to the component. The side effects.
                The useEffect Hook Usages
                1. Side Effect Runs After Every Render
                2. Side Effect Runs Only Once After Initial Render
                3. Side Effect Runs After State Value Changes
                4. Side Effect Runs After Props Value Change
                5. Side Effect Runs After Props and State Value Change
                6. Side EffectCleanup</p>
        </div>
    );
};

export default Question;