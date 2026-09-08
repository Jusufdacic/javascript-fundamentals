# Trapping Rain Water

## Problem

Given an array of non-negative integers representing an elevation map, where each value is the height of a bar of width 1, calculate how much rainwater is trapped between the bars after it rains.

Rated **Hard** on LeetCode.

```
Input:  [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

## Approach

Water can only be held where a lower section sits between two higher ones. The solution walks the array looking for these boundary pairs: it holds a left wall, then advances until it finds a bar tall enough to close the valley.

Once a pair is found, the water in between is accumulated against whichever wall is shorter, since that is what limits the level. When the right wall is the shorter of the two, the inner loop runs backwards and raises its reference height whenever it meets a taller bar, so a descending staircase on the right side is measured correctly rather than producing negative contributions.

Input is validated before processing: every entry must be a non-negative integer, otherwise the run is rejected with a message.

## Run

Open `index.html` in a browser, enter comma-separated heights, and press the button.
