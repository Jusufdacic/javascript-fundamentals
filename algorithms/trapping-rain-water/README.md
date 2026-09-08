Trapping Rain Water

Given an elevation map as an array of bar heights, calculates how much rainwater is trapped between the bars. Rated Hard on LeetCode.

The solution walks the array identifying boundary pairs — a left wall and the next bar tall enough to hold water against it — then accumulates the water held in the valley between them, handling the case where the right boundary is lower than the left. Input is validated for non-negative integers before processing.
