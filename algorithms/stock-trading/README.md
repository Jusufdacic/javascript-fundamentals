# Stock Trading (Buy Low, Sell High)

## Task

Given a sequence of daily stock prices, determine the points at which to buy and sell in order to maximize total profit. Multiple buy/sell cycles are allowed, but you must sell before buying again.

## Approach

A single pass through the price array using a boolean flag (`imamDionicu` — "I own a stock") to track state:

- **Buy** when the price is at a local minimum (starts rising the next day) and no stock is currently held.
- **Sell** when the price is about to drop and a stock is currently held.
- Any remaining open position at the end of the array is closed out.

This avoids nested loops in favor of a single linear pass with state tracking.
