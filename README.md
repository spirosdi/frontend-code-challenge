Hubrick Frontend Challenge
========================

We're excited that you're interested in joining the [Hubrick](https://hubrick.com/) team. 
The purpose of this test, is to see how you approach problems and to see the quality of your code is.

#Challenge description
Create a simple flow engine.

Flow engine is an application that allows to create a flow consisting of several rules, executing the flow against some incoming data (json struct). The result of the execution should be displayed.  
Create a new flow (with some name). 
Within the flow, add functionality to add the list of rules
	Each rule should contain:
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

Please see the [mockup](https://raw.githubusercontent.com/hubrick/frontend-code-challenge/master/frontend-challenge-flow-mockup.png) below to get a better idea about the UI of the flow
![](https://raw.githubusercontent.com/hubrick/frontend-code-challenge/master/frontend-challenge-flow-mockup.png)

#Instructions
- Just use pure Javascript for the Flow logic implementation (no underscore and other libraries)
- It's up to you where and how to store the Flow object
- You can use any libraries for UI/View/Template
- Feel free to be creative and reasonable about the UI/UX

#What we're are looking for:
- Code quality
- UI/UX and responsiveness
- Testing
- Correctness
- Technical choices

#Submission
Please push your code to a GitHub repository(or similar) and let us when that it's ready to review. We appreciate your time and energy completing the coding exercise and will review your solution as quickly as possible.
# frontend-code-challenge
