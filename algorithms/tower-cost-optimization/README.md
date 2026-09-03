# Tower Cost Optimization

## Task

Given an array of tower heights and a fixed adjustment value `K`, choose how many of the towers (starting from the tallest) should be **decreased** by `K`, and the rest **increased** by `K`, in order to **minimize the difference between the resulting maximum and minimum height**.

Negative resulting heights are discarded from consideration.

**Examples:**
```
K=2, heights=[1,5,8,10]   → minimum possible difference: 5
K=100, heights=[1,2,3]    → minimum possible difference: 2 (all towers increased)
```

## Approach

The array is sorted, then every possible split point is tested: the first `i` towers get `+K`, the rest get `-K`. For each split, the resulting max and min (ignoring negative heights) are compared, and the smallest difference across all splits is kept.
