# Dynamic CSS Injection

## Task

Create new HTML elements at runtime using JavaScript, and apply styling to them dynamically — including assigning CSS classes programmatically rather than hardcoding them in the markup.

## Approach

Elements are created with `document.createElement`, appended to the DOM with `appendChild`, and styled either directly via the `style` property or by dynamically assigning a CSS class name from a predefined set (e.g. a randomly chosen class per element).
