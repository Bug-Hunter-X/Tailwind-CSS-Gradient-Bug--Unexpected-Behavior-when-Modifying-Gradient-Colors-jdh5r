```javascript
// bugSolution.js
function updateGradient(element, fromColor, toColor) {
  element.style.background = `linear-gradient(to right, ${fromColor}, ${toColor})`;
}

const gradientDiv = document.getElementById('my-gradient');

// Initial gradient setup
updateGradient(gradientDiv, 'blue', 'purple');

// Example of changing the gradient later
setTimeout(() => {
  updateGradient(gradientDiv, 'red', 'yellow');
}, 3000);
```
```html
<div id="my-gradient" class="text-white p-4 rounded-lg"></div>
```