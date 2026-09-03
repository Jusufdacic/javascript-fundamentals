# Dynamic Table

## Task

Generate an HTML table dynamically from JavaScript data, including a computed column (e.g. an average), without hardcoding the table structure in the HTML.

## Approach

Table rows and cells are created and populated via DOM methods (`createElement`, `appendChild`, or `innerHTML` templating) based on a JavaScript data array. Computed values (such as averages) are calculated on the fly and inserted into the table alongside the source data.
