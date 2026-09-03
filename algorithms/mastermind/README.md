# Mastermind

## Task

Implement the scoring logic for the Mastermind code-breaking game. Given a hidden code and a player's guess (both arrays of digits), determine:

- The number of digits that are correct **and** in the correct position.
- The number of digits that are correct but in the **wrong** position.

**Constraint:** the code may contain repeated digits, which must be handled correctly — a digit already matched in the "correct position" pass must not be counted again in the "wrong position" pass.

## Approach

The solution works in two passes over copies of both arrays:

1. **First pass** — find exact position matches. When found, null out that position in both the guess and the code copy so it can't be matched again.
2. **Second pass** — for remaining (non-null) positions, check if the guessed digit exists anywhere else in the remaining code, counting it as a "wrong position" match and nulling it out once used.

This two-pass, mutual-nulling approach prevents duplicate digits from being counted more than once.
