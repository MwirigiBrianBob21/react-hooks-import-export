# React Modular Code

## Introduction
In this lesson we'll discuss the ES6 keywords `import` and `export`, and how they allow us to share modularized code across multiple files within a JavaScript application.

## Objectives
1. Understand why it's important to split up our code into smaller files (modules)
2. Learn how `import` and `export` support our ability to build modular code
3. Understand the different ways to import and export code

## Modular Code
<!-- What is modular code, what does it mean -->
Modular code is code that is separated into segments (modules), where each file is responsible for a feature or specific functionality.

<!-- Why is it import  -->
Developers separate their code into modules for many reasons:
* Adheres to the single-responsiblity principle
  * Each module is responsible for accomplishing a certain piece of functionality, or adding a specific feature to the application.  
* Makes code easy to navigate
  * Modules that are separated and clearly named make code more read-able for other developers, which is important when sharing a code base with a team.
* Renders code easier to debug
  * When errors are raised, all the code effected by that given error should be isolated in one module, making it easier to debug the code.
* Produces clean and DRY code
  * Modules can be reused and repurposed throughout applications, making larger applications less computationally expensive.

<!-- What does that look like in React ? (Components)-->
React makes the modularization of applications really easy, by introducing the component structure.

<!-- Create react component -->
```js
class Hogwarts extends React.Component {
  render() {
    return (
      <div className="Hogwarts">
        "Harry. Did you put your name in the Goblet of Fire?"
      </div>
    )
  }
}
```

<!-- Component File tree  -->
It's standard practice to give each of these components their own file. It is not uncommon to see a React program file tree that looks something like this:

<!-- File tree  -->
```bash
├── README.md
├── public
└── src
     ├── App.js
     ├── Hogwarts.js
     └── Houses.js
```

<!-- How can we access these components throughout our programs? import/export -->
Now, all we have to do is figure out how to access the code defined in one file within a different file. Well, this is pretty easy to do in React! Introducing IMPORT EXPORT!