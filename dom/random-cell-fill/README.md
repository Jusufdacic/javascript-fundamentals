# Random Cell Fill

## Problem

For each row of a table, fill a random number of cells with text, without ever filling the same cell twice within a row.

## Approach

The interesting part is the loop choice. Because randomly chosen cells can repeat, and repeats are discarded, the number of attempts needed is not known in advance — so a `for` loop counting a fixed number of iterations would sometimes finish with fewer cells filled than intended.

Instead the loop is a `while`, conditioned on how many **unique** cells have been filled so far. Each iteration picks a random position, checks it against the list of already-used positions with `includes`, and skips to the next iteration if it is a duplicate. The loop therefore counts successes, not attempts.

A reset clears every cell before each run.

## Run

Open `index.html` in a browser.
