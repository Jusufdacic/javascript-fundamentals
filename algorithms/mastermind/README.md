# Mastermind

## Problem

Implement the code-breaking game. A hidden four-digit code is generated; the player has ten attempts to guess it. After each guess, the game reports how many digits are correct **and in the right position**, and how many are correct but **in the wrong position**.

The difficulty is in the second count. A digit already matched exactly must not be counted again as a partial match, and a repeated digit in the guess must not match the same digit in the code twice.

## Approach

Scoring runs in two passes over copies of both arrays.

**First pass** — compare position by position. On an exact match, increment the counter and set that index to `null` in **both** the guess copy and the code copy, so the digit is consumed on both sides.

**Second pass** — for each remaining position in the code, search the remaining positions in the guess for the same value. On a match, increment the wrong-position counter and null out that entry in both arrays, then break so a single digit is never consumed twice. The `!== null` check prevents already-consumed slots from matching each other.

Without nulling both sides, a code like `1123` scored against a guess like `1145` would count the extra `1` twice.

## Features

- Ten attempts, with the interface disabled on a win or after the last attempt
- Running history of guesses with their scores
- Toggle to reveal or hide the code, using a boolean flipped on each call
- Full reset for a new round

## Run

Open `index.html` in a browser.
