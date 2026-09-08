# Wave Array

## Problem

Determine whether an array forms a strict zigzag — every element alternately greater than and less than the one before it, with no two consecutive steps in the same direction.

```
[1, 5, 2, 8, 3]  →  YES
[1, 5, 6, 2]     →  NO
```

## Approach

The expected direction is taken from the first pair: if the second element is greater than the first, the sequence starts rising. From there, each step is checked against the expected direction, and the expectation is flipped after every valid step.

A single step in the wrong direction sets a flag to false, and the array is rejected. One pass, no additional storage.

Input is validated for integers before processing.

## Run

Open `index.html` in a browser, enter a comma-separated array, and press the button.
