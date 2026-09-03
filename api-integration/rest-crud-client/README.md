# REST CRUD Client

## Task

Build a vanilla JavaScript client that consumes a REST API to perform full CRUD (Create, Read, Update, Delete) operations on a list of records ("polaznici" — participants), including a filtered search and a dynamically populated dropdown loaded from a separate lookup endpoint.

## Approach

- **`fetch`** is used for every network call, with a consistent `.then().catch()` chain for handling responses and errors.
- **Read** — `prikaziSve()` fetches all records and renders them into the table via template literals; `prikaziFilter()` does the same with a query parameter.
- **Create** — `dodaj()` collects form input values into an object and sends it as a JSON body via a `POST` request.
- **Update** — `azuriraj()` prompts for a new value and sends it via a `PUT` request.
- **Delete** — `obrisi()` sends a `DELETE` request with the record's id in the URL.
- A dropdown (`<select>`) is populated dynamically on page load by fetching a separate lookup/reference endpoint and creating `<option>` elements with `createElement`/`appendChild`.
- All network errors are caught and displayed to the user instead of failing silently.

## Note

This is a **client-only** exercise — it expects a paired REST API backend running locally (the `baseUrl` at the top of `script.js` points to `https://localhost:7117/api/RWA`) and is included here to demonstrate REST API consumption patterns in vanilla JavaScript, not as a standalone runnable app.
