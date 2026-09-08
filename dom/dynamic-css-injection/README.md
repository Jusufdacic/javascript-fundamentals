# Dynamic CSS Injection

## Problem

Create an element at runtime, style it from user-supplied input, and demonstrate applying styles through class assignment rather than inline properties.

## Approach

A paragraph is created with `createElement`, given the entered text, and appended to the document. Creating a new one removes the previous element first, so the page holds a single generated paragraph at a time.

The hex colour is validated in two stages before it is applied: every character is checked against the set of permitted hex characters, and the length is checked to be exactly six. Only then is it set as the background colour — malformed input never reaches the style property.

A separate action assigns one of several predefined CSS classes at random by setting `className`. This is the more maintainable way to style dynamically created elements: the styling lives in the stylesheet, and JavaScript only decides which rule applies.

## Run

Open `index.html` in a browser.
