# ATM app created with Create-React-App toolchain
# Project Name: ATM improvements 
Base code for simple ATM app is given by MIT xPRO Front-End Development with React, course week 5.

# My approach to improveme
I've refactored the base codes in terms of following aspects:

1.Improvements I made

1.1 Validity check not to overdraw from bank account: Comparing with cash withdraw amount and bank account total deposit, the availability of submit button is determined.

1.2 Context-aware Input: Depending on atmMode, the availability of input field is decided. 

2.My approach to refactoring

2.1 Validity check .

A. In Account component, I added validTransaction state which is intended to show the overdraw state in "Cash Back" mode.

B. In handleChange and handleSubmit event handler, I put validity check logic for "Cash Back" mode using (event.target.value > totalState) criteria for handleChange, (newTotal >= 0) for handleSubmit and update validTransaction state accordingly. 

C. In ATMDeposit component, i put isValid props which is assgined by validTransaction state at its calling from parent component Account. 

D. In submit type input of ATMDeposit component, I add disabled property as follows: disabled={!isValid}, so that the availability of submit button is determined by validTransaction state.

2.2 Context-aware Input

A. In ATMDeposit component,  i put mode props which is assgined by atmMode state at its calling from parent component Account. 

B. The return elements of ATMDeposit component has been modified to be embraced by  mode && \<div> and \</div>. Because empty string("") is regarded as false in logic comparison, the return elements who render input field and submit button displays nothing in null selection, otherwise they will be rendered out. 

3.Challenge & overcome
As a beginner in web programming, the execution flow of web components are not easily get and many of strange variables and tags are overburden.. I have reviewed again for the week4 lectures including JS tutorial, HTML W3 Schools site. Writing codes with paper and pencil, and put comments at my github codes, I'm getting feel better grasp on React, JSX and JS.

