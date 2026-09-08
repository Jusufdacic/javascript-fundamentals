# User Management

## Problem

Maintain an in-memory collection of user records, with the ability to add and remove entries, keep the list ordered, and derive values from the stored data.

## Approach

Users are stored as objects in an array, each holding a name, surname, year of birth, height, and weight.

**Adding** normalises the capitalisation of the name and surname first — the first letter uppercased, the rest lowercased — so that inconsistent input does not produce duplicate-looking entries or break ordering. The list is then re-sorted on every insertion, primarily by first name and falling back to surname when first names are equal. Sorting uses `localeCompare` rather than the default comparison, so alphabetical order is correct instead of raw character-code order.

**Removing** searches the array by normalised name and surname, and deletes with `splice` so the array shortens rather than leaving a gap.

Two derived values are calculated from the stored data: age from the year of birth, and body mass index from height and weight, with height converted from centimetres to metres before the calculation.

## Run

Open `index.html` in a browser.
