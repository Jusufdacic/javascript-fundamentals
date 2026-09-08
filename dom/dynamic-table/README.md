# Dynamic Table

## Problem

Build a table at runtime from user input, with a running average recalculated on every addition.

## Approach

Rows are created with `insertRow` and cells with `insertCell`, rather than assembling HTML strings, so the table structure is built through the DOM API directly.

Input is validated before a row is created: empty fields are rejected, and the grade must be an integer within the allowed range. Invalid input produces a message and leaves the table untouched — nothing partial is ever inserted.

Each accepted entry is also pushed to a separate array, which is what the average is computed from. The row count and the average are both refreshed after every addition.

## Run

Open `index.html` in a browser.
