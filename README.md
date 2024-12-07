# Tailwind CSS Gradient Bug: Unexpected Behavior when Modifying Gradient Colors

This repository demonstrates a subtle bug in Tailwind CSS's gradient functionality.  Removing or altering a color in a gradient declaration (`bg-gradient-to-r`, `bg-gradient-to-b`, etc.) can lead to inconsistent rendering across different browsers.  The bug mainly surfaces when modifying the gradient after the initial setup.

## Bug Description

The primary issue is with the handling of gradient definitions. When a color is removed or changed within a `bg-gradient-*` class, some browsers might not correctly update the gradient, leading to visual inconsistencies or unexpected errors.  This is particularly notable when dynamically updating the gradient via JavaScript or changing the classes applied to an element.

## Reproducing the Bug

1. Clone this repository.
2. Open `bug.html` in your browser.
3. Observe the gradient. 
4. Try commenting out or modifying the `to-purple-500` class in `bug.html` to see the inconsistent behavior.

## Solution

The solution involves ensuring that the entire gradient declaration is updated rather than simply modifying individual color classes.  Using a more robust method of gradient manipulation, such as JavaScript's `style` property or a utility function, can avoid this issue.  See `bugSolution.html` for an example.

## Contributing

Feel free to contribute to this repository by adding more edge cases or alternative solutions!