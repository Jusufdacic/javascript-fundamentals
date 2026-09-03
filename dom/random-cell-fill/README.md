# Random Cell Fill

## Task

Populate a fixed-size table (grid) by randomly selecting cells to fill, ensuring no cell is selected more than once, until every cell has been filled.

## Approach

Since the number of attempts needed to hit all unique cells isn't known in advance (duplicates are possible), a `while` loop is used instead of a `for` loop — it continues generating random cell coordinates and checking them against an "already filled" list until every cell in the grid has been covered exactly once.
