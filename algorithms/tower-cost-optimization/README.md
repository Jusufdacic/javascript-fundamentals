# Tower Cost Optimization

## Problem

Given a set of towers, each with a height and an individual cost of modification, find the cheapest height to level all of them to.

The cost of adjusting one tower is the height difference multiplied by that tower's own cost per unit. Because those costs differ from tower to tower, the cheapest target height is not simply the average or the median — a tall tower that is expensive to modify pulls the optimum towards itself.

## Approach

Every existing tower height is treated as a candidate target. For each candidate, the total cost is calculated as the sum, over all other towers, of the absolute height difference multiplied by that tower's unit cost. The candidate producing the lowest total is returned.

The optimum always lies at one of the existing heights, so the candidate set does not need to extend beyond them.

Both input arrays are validated before processing: they must be the same length, contain only numbers, and hold no negative values.

## Run

Open `index.html` in a browser, enter comma-separated heights and the matching comma-separated costs, and press the button.
