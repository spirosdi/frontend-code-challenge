Hubrick Frontend Challenge
========================

#Structure of code
The app/js/app.js contains the Flow Module.
The app/js/rules.js contains the set of rules.
The build/frontend-code-challenge-min.js is the bundled code automatically created by the grunt uglify task
The spec/flowSpec.js contains unit tests
The Gruntfile.js contains the grunt configuration
The package.json contains the node packages configuration

#Instructions to run the code
- Run npm install to install node packages
- Run the grunt default task. Open a console and from the root folder of the project call: grunt. The task runs the uglify task to bundle and uglify the src code. Also the jasmine task for unit testing
- Open index.html in a browser
- Open a JS console and call the public init method of the Flow module with the incoming JSON data passed as a string. For example: Flow.init('{"value": 9}');

#The Grunt task runner
The Grunt task runner is used. The tasks are:
- uglify : for uglifying and bundling the src files
- watch : watcher of src files that runs the uglify task
- jasmine : js unit testing
- default : executes the uglify and default tasks

We're excited that you're interested in joining the [Hubrick](https://hubrick.com/) team. 
The purpose of this test is to see how you approach problems as well as to evaluate the quality of your code.

#Challenge description
The challenge is to create a simple flow engine.

A flow engine is an application that executes a flow consisting of several linked rules, in this case against some incoming data (a JSON string that can be parsed to a JavaScript object literal). 

Each rule should contain (at least)
	
- An ID (unique within the flow, required)
- A rule that will be run against the incoming json data. This is a function that takes a parameter and returns a boolean result. Each function should be called with the same incoming data (the JS object literal)
- An ID of the rule to execute if the function returns true (`true_id`)
- An ID of the rule to execute if the function returns false (`false_id`)
	 
Pass an object (an example of an object and a rule is given below) to the created flow. 

The execution will end when a `null` is provided for the `true_id` (and the function returns `true`) or when `null` is provided for the `false_id` (and the function returns `false`).

Additionally, the flow engine (with the provided rule-set) should not be circular.

#Information
Please see the [mockup](https://raw.githubusercontent.com/hubrick/frontend-code-challenge/master/frontend-challenge-flow-mockup.png) below to get a better idea of the flow
![](https://raw.githubusercontent.com/hubrick/frontend-code-challenge/master/frontend-challenge-flow-mockup.png)


#Instructions
- Please don't spend more than 3 hours. We don't expect a production-ready solution.
- Just use pure JavaScript for the flow logic implementation (no underscore and other libraries)
- No UI is required. We recommend to create a JSON file with the list of rules, and an object you will pass to the flow. Results can be out with console.log, bonus points for a colorful console.log for passing, or failing rules!
- Unit tests and bundler/task runner are a plus.

#What we're looking for:
- Code quality
- Correctness
- Technical choices

#Submission
Please push your code to a GitHub repository (or similar) and let us know when it's ready to for review. We appreciate your time and energy completing the coding exercise and will review your solution as quickly as possible.
