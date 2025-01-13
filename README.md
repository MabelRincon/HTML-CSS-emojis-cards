# HTML5 and CSS Exercise with JavaScript Animation

This exercise aims to reinforce skills in HTML5 and CSS, as well as introduce DOM manipulation with JavaScript to create basic animations.

![HTML5_emoji](https://github.com/user-attachments/assets/ec72d2da-1a09-4700-80a4-ea33c9f5d49c)

## Learning Objectives

- **HTML5**: Practice structuring an HTML document, including the correct use of semantic tags and inserting emojis as content.
- **CSS**: Apply styles to design a grid of rectangles containing emojis, managing css properties.
- **JavaScript**: Implement emojis that appear and disappear one by one in their original positions, using DOM manipulation techniques.

## Exercise Execution

1. **HTML Structure**: Create a file containing a grid of rectangles. Each rectangle includes an emoji selected from the provided emoji page: https://emojikeyboard.top/es/.
2. **CSS Styles**: Define the necessary styles for the rectangles to display appropriately in the grid, ensuring an attractive and coherent visual presentation.
3. **Interactivity with JavaScript**: Add interactivity so the emojis appear and disappear one by one upon clicking on any of the grid cells, always maintaining their original position in the grid when clicked again.

## Deliverables

- **GitHub Repository**: All files are uploaded in this public repository.
- **GitHub Pages Link**: [Garín, the Asturian Snail](https://mabelrincon.github.io/HTML-CSS-emojis-cards/) or by clicking on the link in the **About** section of this repository.

## Code Comments

#### HTML

<details>

### index.html

<br>

For the page structure, a main container element is used to wrap all the content:

```
<div class="wrapper">
```

Although the original page design did not have a title, one is added here to provide context to the grid content.

```
<h1>Garín, the Asturian Snail.</h1>
```

Then, another container is added to group the grid elements:

```
<div class="container">
```

The grid is designed with several divs. Each represents a block in the grid with a `toggle` to add interactivity, and a `colorX` class to give it a color.

```
<div class="toggle color1">
```

Colors are assigned by associating the color with a number, facilitating future changes to the color palette easily from the CSS `:root` element.

The `text` class is used only when there is additional text along with the emoji, while the `emoji` class is used in every grid cell, as the exercise requires an emoji in each one.

Finally, the inline `span` element is used to allow more precise control over style, size and positioning.

```
<span class="emoji">...</span>
```

</details>

#### CSS

<details>

### styles.css

<br>

- CSS Variables (`:root`)
  * Four color variables (`--color1` to `--color4`) are defined and later used to assign background colors to different elements.
- Global Styles (`body`)
  - Default margins and padding are removed.
  - A soft background color (`#d9e2b4`) is set.
- Title Style (`h1`)
  - The title is centered and assigned a specific font.
  - A large font size (3rem) and bold weight (900) are set.
  - The text color uses the `--color4` variable.
- Main Container (`.wrapper`)
  - `Flexbox` is used to center its content both vertically and horizontally.
  - A height of 50% of the viewport is defined.
- Grid Container (`.container`)
  - A grid layout with four equal-width columns is implemented.
  - A gap of 0.5rem between cells is set.
  - Content is centered and adjusts to its content size (`width: fit-content`).
- Grid Cells (`div.toggle`)
  - Specific dimensions are defined (10rem width by 6rem height).
  - Content within each cell is centered.
  - The cursor changes on hover to indicate interactivity.
- Color Classes (`.color1` to `.color4`)
  - Each class assigns a different background color using the variables defined in `:root`.
- `off` Class
  - A very low opacity (`0.01`) is set, making the element almost invisible.
- Text Style (`p.text`)
  - Margins and padding are removed.
  - Text color is white, with a font size of 1.25rem and bold weight (1000).
  - Text is centered, and width adjusts to content.
- Emoji Style (`.emoji`)
  - A large font size (2.5rem) is set for the emojis.
  - Margins are removed.

These styles configure the page's appearance, creating a grid of colored cells containing centered text and emojis, with basic interactivity on hover.

</details>

#### JavaScript

<details>

### script.js

<br>

The `script.js` file adds interactivity to the web page, allowing the emoji grid cells to be hidden or shown when clicked. 

- `document.addEventListener("DOMContentLoaded", () => { ... });`: This event fires when the HTML content has been fully loaded and parsed, ensuring that the script runs only after the DOM structure is ready.
- `document.querySelectorAll(".toggle").forEach($toggleCard => { ... });`: Selects all DOM elements with the `toggle` class and applies a function to each.
- `$toggleCard.addEventListener("click", () => { ... });`: Adds a click event listener to each element with the `toggle` class. When one of these elements is clicked, the provided function executes.
- `$toggleCard.classList.toggle("off");`: This line toggles the `off` class on the clicked element. If the element doesn't have the `off` class, it adds it; if it does, it removes it.

**Relation to the `styles.css` file:**

In the styles file, the `.off` class is defined with very low opacity:

```css
.off {
    opacity: 0.01;
}
```
The `opacity` property is used because it allows the click event to be fired when elements are invisible. This did not happen when using `visibility: hidden` or `display: none`, which required the JS to handle an unnecessary complexity.

By toggling the `off` class on an element, its opacity changes, making it almost invisible when the class is present and fully visible when it's removed. This creates an appearance and disappearance effect when clicking on the grid cells.

This behavior aligns with the additional objective of the exercise, which is to allow elements to appear and disappear one by one upon interaction, maintaining their original position in the grid.

</details>
