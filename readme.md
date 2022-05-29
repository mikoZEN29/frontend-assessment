Introduction
---
Thanks for taking the time to complete this frontend technical assessment. We will be focusing on software quality (scalability, readability, maintainability, etc.) and your eye for detail. You may include any libraries, but Vue.js is preferred and jQuery is not recommended. Along with following best practices, bonus points for following our [coding guidelines](https://github.com/mindarc/frontend-assessment/wiki/Coding-guidelines). 

Exercise 1
---
Build a responsive page based on the designs.

##### Requirements
1. Match the designs exactly.
2. Needs to be responsive.

##### Designs
* exercise1-desktop.png
* exercise1-mobile.png

##### Assets
* Desktop banner - http://via.placeholder.com/1920x650
* Mobile banner - http://via.placeholder.com/600x600
* Content images - http://via.placeholder.com/400x300

Exercise 2
---
Read the `data.json` file and display the data as tabs on desktop and an accordion on mobile.

##### Requirements
1. Display data in tabs on desktop.
2. Display data in an accordion on mobile.
3. Only 1 accordion/tab should be open at a time.
4. Open the first accordion/tab on load.
5. If the open accordion is selected, close it.

###### Bonus points
* Improve the user experience with meaningful animations/transitions.
* Design and styling.
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

The trick is in the + + 'a', specifically, the + 'a'.

There’s no number between the two plus signs. The browser attempts to add nothing to 'a', which returns NaN (short for Not a Number). Using 'a' is part of the trick to mask what’s happening. You could use any string here and it would still work.

Because all of the other characters are strings, the browser coerces NaN into a string and concatenates the rest of the string, resulting in baNaNa.

The final part of the trick is the lowerCase() method, which turns the capital N’s from NaN into lowercase and hides what’s really happening.

Submission
---
We recommend submitting your completed assessment as a forked repository. Please replace README content with instructions and relevant documentation. 
