# JavaScript Fundamentals

A collection of JavaScript exercises covering algorithmic problem-solving, DOM manipulation, and REST API integration — written entirely in vanilla JavaScript.

No frameworks, no libraries, no build step. Each exercise is a self-contained page where the logic, the interface, and the state handling are written by hand. Input validation is implemented throughout rather than assumed.

## Structure

```
javascript-fundamentals/
├── algorithms/          # Algorithmic problem-solving
├── dom/                 # DOM manipulation
└── api-integration/     # REST API consumption
```

---

## Algorithms

### [Trapping Rain Water](./algorithms/trapping-rain-water)
Given an elevation map as an array of bar heights, calculates how much rainwater is trapped between the bars. Rated **Hard** on LeetCode.

The solution walks the array identifying boundary pairs — a left wall and the next bar tall enough to hold water against it — then accumulates the water held in the valley between them, handling the case where the right boundary is lower than the left. Input is validated for non-negative integers before processing.

### [Mastermind](./algorithms/mastermind)
Full implementation of the code-breaking game: a hidden four-digit code, ten attempts, a guess history log, and a toggle to reveal the code.

The scoring is the interesting part. Counting exact-position matches is trivial; counting correct digits in the wrong position is not, because a digit already matched must not be counted again. The solution runs two passes over copies of both arrays: the first marks exact matches by nulling that index in **both** the guess and the code, the second searches the remaining positions for value matches and nulls each one as it is consumed. Without the mutual nulling, repeated digits inflate the score.

The interface disables input on a win or after the tenth attempt, and resets cleanly for a new round.

### [Tower Cost Optimization](./algorithms/tower-cost-optimization)
Given a set of tower heights and a per-tower cost of modification, finds the cheapest height to level all towers to.

For every candidate height, the total cost is the sum over all other towers of the height difference multiplied by that tower's individual cost. The candidate producing the lowest total is returned. Because per-tower costs differ, the cheapest target is not simply the median or the mean — it has to be evaluated against every option.

### [Stock Trading](./algorithms/stock-trading)
Determines every profitable buy/sell pair across a sequence of daily prices, allowing multiple trades but requiring a sale before the next purchase.

Rather than nested loops comparing all pairs, the solution uses a single pass with a boolean flag tracking whether a position is currently open: buy when the price is about to rise and nothing is held, sell when it is about to fall and something is held. Any position still open at the end of the sequence is closed on the final day. Output lists each trade with its buy day, sell day, and profit.

### [Parking Permutations](./algorithms/parking-permutations)
Rearranges cars in a parking lot into a target layout, where the only legal move is sliding one car into the single empty space.

The input is validated to confirm both layouts contain the same cars — sorted copies are compared, so a mismatch is rejected before any work begins. The rearranging loop then applies two rules: if the empty space is already in its final position, move any misplaced car into it to free it up again; otherwise move the car that belongs in the empty space directly into it. Each move is recorded and counted.

### [Wave Array](./algorithms/wave-array)
Checks whether an array forms a strict zigzag — every element alternately greater than and less than its neighbour.

The expected direction is taken from the first pair, then flipped after each valid step. A single violation sets a flag and the array is rejected. One pass, no extra storage.

### [Blackjack](./algorithms/blackjack-game)
Two-player card game against the 21 limit. Player one draws until standing or reaching 21, then play passes to player two.

The end-game resolution covers every outcome explicitly: an exact 21, both players busting, a tie, one player busting while the other holds, and a straight comparison when neither busts. Cards, totals, and state reset for a new game.

### [User Management](./algorithms/user-management)
An in-memory user store built on an array of objects.

Adding a user normalises name capitalisation, then re-sorts the list by first name and falls back to surname when first names match, using `localeCompare` so alphabetical order is correct rather than raw Unicode order. Deletion searches by normalised name and removes with `splice`. The stored data also drives two derived calculations: age from year of birth, and BMI from height and weight.

---

## DOM Manipulation

### [Image Slider](./dom/image-slider)
An image slider with thumbnail navigation, built without any library.

Images are held in an array with the current index tracked in state. Next and previous wrap around at both ends, a random button jumps anywhere, and each thumbnail selects its image directly. Every navigation path funnels through the same state-update function, so the display can never fall out of sync with the index.

### [Dynamic Table](./dom/dynamic-table)
Builds table rows at runtime using `insertRow` and `insertCell`, with the running average and row count recalculated on every addition.

Entries are validated before being accepted — empty fields are rejected, and the grade must be an integer within range. Invalid input produces a message rather than a broken row.

### [Dynamic CSS Injection](./dom/dynamic-css-injection)
Creates a paragraph element at runtime and styles it from user input.

The hex colour is validated character by character against the permitted set and checked for correct length before being applied, so malformed input never reaches the style property. A separate action assigns one of several predefined CSS classes at random by setting `className`, demonstrating styling through class assignment rather than inline styles. Creating a new paragraph removes the previous one.

### [Random Cell Fill](./dom/random-cell-fill)
Fills a random number of cells in each table row, without repeating a cell within the same row.

The number of attempts needed is not known in advance, since duplicate picks are discarded — so the loop is a `while` conditioned on how many unique cells have been filled, not a `for` counting attempts. A reset clears the table before each run.

---

## API Integration

### [REST CRUD Client](./api-integration/rest-crud-client)
A client performing full create, read, update, and delete operations against a REST API.

All requests go through `fetch` with promise chains. The table is populated from the API and re-rendered after every mutation; a filter queries a separate endpoint by query parameter; creation collects form values into an object and sends it as a JSON body; updates and deletions target a record by id. A dropdown is populated at page load from a lookup endpoint, with `<option>` elements created and appended individually. Failures from any request are caught and displayed to the user instead of failing silently.

---

## Running the Exercises

Open the `index.html` of any exercise in a modern browser. No build step or dependencies are required.

The REST CRUD Client is the exception: it implements only the client side and expects a paired backend API to be running. See its own README for details.

## Author

**Jusuf Dacic**
Engineer of Traffic and Communications — Computer and Information Technologies
Faculty of Traffic and Communications, University of Sarajevo

[github.com/Jusufdacic](https://github.com/Jusufdacic) · [jusufdacic.github.io](https://jusufdacic.github.io)
