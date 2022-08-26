# frontend-mentor-expenses-chart

## The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

## Built with

- Semantic HTML5 markup
- SCSS
- CSS custom properties
- Flexbox
- Mobile-first workflow

## What I learned

**Importing local JSON files**

Local JSON files can be imported by adding `type="module"` to the `<script>` tag, and then asserting that the type is JSON in the JS file.

```html
<script type="module" src="js/index.js"></script>
```
```js
import spendingData from "./data.json" assert {type: "json"};
```
