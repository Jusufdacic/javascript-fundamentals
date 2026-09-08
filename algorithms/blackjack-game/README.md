# Blackjack

## Problem

A two-player card game against the 21 limit. Each player draws cards to build a total as close to 21 as possible without exceeding it. The player with the higher valid total wins; going over 21 is a bust.

## Approach

Play is sequential. Player one draws until they either stand or reach 21, at which point the turn passes automatically. Player two then draws under the same rules, and the game resolves once they stand or reach the limit.

The resolution handles every outcome explicitly rather than relying on a single comparison:

- equal totals, or both players busting — a tie
- either player landing exactly on 21 — an immediate win
- neither busting — the higher total wins
- one busting while the other holds a valid total — the surviving player wins

Card values, running totals, and the draw history reset for a new game.

## Run

Open `index.html` in a browser.
