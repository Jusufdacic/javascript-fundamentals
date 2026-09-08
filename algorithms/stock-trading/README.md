# Stock Trading

## Problem

Given a sequence of daily stock prices, find every profitable buy/sell pair. Multiple trades are allowed, but a position must be sold before another can be opened.

## Approach

The naive solution compares every possible pair of days with nested loops. This one makes a single pass instead, using a boolean flag to track whether a position is currently open.

- **Buy** when the price is lower than the next day's and nothing is held — the start of an upward run.
- **Sell** when the price is higher than the next day's and something is held — the peak before a decline.
- After the loop, if a position is still open, it is closed on the final day, so an upward run that reaches the end of the sequence is not discarded.

Each completed trade is stored as a buy day, sell day, and profit, and all of them are reported rather than just the single largest gain.

## Run

Open `index.html` in a browser, enter the number of days and the comma-separated prices, and press the button.
