# Image Slider

## Task

Build an image slider/carousel using only vanilla JavaScript DOM manipulation (no libraries) — cycling through a set of images with navigation controls, looping back to the start after the last image.

## Approach

Images are stored as an array of source strings. A current-index variable tracks which image is displayed. Navigation buttons update the index (wrapping around at both ends) and update the displayed image's `src` (or `background-image`) accordingly.
