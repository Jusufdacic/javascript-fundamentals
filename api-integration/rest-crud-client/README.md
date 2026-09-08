# REST CRUD Client

## Problem

Build a client that performs full create, read, update, and delete operations against a REST API, using only vanilla JavaScript.

## Approach

Every request goes through `fetch` with promise chains, following the same shape throughout: send the request, parse the response, render the result, and catch failures.

**Read** — fetches all records and renders them into a table built with template literals. A second endpoint returns a filtered set based on a query parameter taken from the input field.

**Create** — collects the form values into an object using property shorthand, serialises it with `JSON.stringify`, and sends it as a `POST` with the appropriate content-type header.

**Update** — prompts for the new value and sends it as a `PUT` request identifying the record by id.

**Delete** — sends a `DELETE` request with the record id in the path.

After every mutation the table is re-fetched rather than patched locally, so what is displayed always reflects what the server actually holds.

A dropdown is populated at page load from a separate lookup endpoint, with each `<option>` created through `createElement` and attached with `appendChild`.

Errors from any request are caught and written to a dedicated message element, so a failure is visible to the user instead of disappearing into the console.

## Note

This exercise implements the client side only. It expects a paired REST API to be running — the base URL is set at the top of `script.js`.
