Hubrick Frontend Challenge
========================

We're excited that you're interested in joining the [Hubrick](https://hubrick.com/) team. 
The purpose of this test, is to see how you approach problems and evaluate the quality of your code.

#Challenge description
Create a simple flow engine.

Flow engine is an application that creates a flow consisting of several rules, executing the flow against some incoming data (json struct). The result of the execution should be displayed.  
Create a new flow (with some name). 
Within the flow, add functionality to add the list of rules
	Each rule should contain:
- Rule data structure:
	- id (unique within the Flow, obligatory)
	- title
	- rule that will be run against some incoming json data. This is basically a function that takes a parameter (json data) and returns a boolean result.
- next id of the rule to execute if the function returns true
- next id of the rule to execute if the function returns false
	if “true_id” or “false_id” is null it means the end of the flow execution, a terminal.

- Pass an object to the created flow and it will be processed. 
- As a result show the chain of executed rules (their title incl. colours like green for passed rule and red for failed).

##Rules:
- You can not specify the same rule id in 'true_id' or 'false_id' more than once within the same flow
-  the very first rule’s id can not be specified in 'If rule passed' or 'If rule failed'
Those 2 rules are to make the execution graph acyclic.
- If next id is empty ('If rule passed'/'If rule failed') then stop execution and display the list of executed tasks including status(passed/failed)

Please see the [mockup](https://raw.githubusercontent.com/hubrick/frontend-code-challenge/master/frontend-challenge-flow-mockup.png) below to get a better idea the flow
![](https://raw.githubusercontent.com/hubrick/frontend-code-challenge/master/frontend-challenge-flow-mockup.png)

#Instructions
- Please don't spend more than 3 hours. We don't expect ready to production solution.
- Just use pure Javascript for the Flow logic implementation (no underscore and other libraries)
- No UI is required. We recommend to create a json file with the list of rules and object you pass to the flow. Results can be outputed with console.log.

#What we're looking for:
- Code quality
- Correctness
- Technical choices

#Submission
Please push your code to a GitHub repository(or similar) and let us know when it's ready to for review. We appreciate your time and energy completing the coding exercise and will review your solution as quickly as possible.

