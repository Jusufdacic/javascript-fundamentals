# Trapping Rain Water

## Task

Given an array of non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Water trapped above any given bar is limited by the shorter of the tallest bar to its left and the tallest bar to its right, minus the height of the bar itself.

**Example:**
```
Input:  [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

## Approach

For each position in the array, the amount of water it can hold equals:
```
min(maxLeft, maxRight) - height[i]
```
The solution precomputes the maximum height to the left and to the right of every index, then sums the trapped water across all positions.

This is a classic LeetCode Hard problem, solved here in vanilla JavaScript.
