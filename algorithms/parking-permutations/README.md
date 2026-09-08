# Parking Permutations

## Problem

A parking lot holds a set of numbered cars and exactly one empty space. Rearrange the cars from a starting layout into a target layout, where the only legal move is sliding a car into the empty space.

Find the sequence of moves.

## Approach

Before any work is done, both layouts are validated: they must be the same length, contain only numbers, and be permutations of one another. The permutation check is done by sorting copies of both arrays and comparing them, so a mismatch is caught immediately rather than discovered by an unterminated loop.

The rearranging loop then applies two rules until the current layout matches the target:

- **If the empty space is already in its final position**, it cannot be used productively. Any car that is out of place is moved into it, which frees the empty space to be useful again.
- **Otherwise**, the car that belongs in the empty space is located and moved directly into it, placing that car permanently.

Every move is recorded and counted, and the full sequence is printed alongside the total.

## Run

Open `index.html` in a browser, enter the starting and target layouts as digit strings, and press the button.
