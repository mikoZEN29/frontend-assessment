Exercise 1
---
exercise-1 Folder
Build a responsive page based on the designs.

Exercise 2
---
exercise-2 Folder
Display data.json file to tabs in desktop and accordion on mobile

Why banana?
---
Not a number

The trick is in the + + 'a', specifically, the + 'a'.

There’s no number between the two plus signs. The browser attempts to add nothing to 'a', which returns NaN (short for Not a Number). Using 'a' is part of the trick to mask what’s happening. You could use any string here and it would still work.

Because all of the other characters are strings, the browser coerces NaN into a string and concatenates the rest of the string, resulting in baNaNa.

The final part of the trick is the lowerCase() method, which turns the capital N’s from NaN into lowercase and hides what’s really happening.