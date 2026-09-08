# Image Slider

## Problem

Build an image slider with thumbnail navigation, using only native DOM methods.

## Approach

The image sources are held in an array, and the currently displayed image is tracked by a single index variable. The main display is updated by setting its `background-image` to the entry at that index.

Navigation is provided four ways: next and previous, which wrap around at both ends by resetting the index rather than letting it go out of range; a random jump; and direct selection from any thumbnail.

Every one of these paths ends by calling the same state-update function, so the visible image and the tracked index can never diverge — no matter which control was used.

## Run

Open `index.html` in a browser.
