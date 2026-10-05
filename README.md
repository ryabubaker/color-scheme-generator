# Color Scheme Generator

> A lightweight, elegant vanilla JavaScript web application that instantly generates harmonious color palettes based on a seed color. Built with a clean UI and integrated with **The Color API**.

---

## 📑 Table of Contents

* [Introduction](#introduction)
* [Key Features](#key-features)
* [Project Structure](#project-structure)
* [Installation Guide](#installation-guide)
* [Usage](#usage)
* [API Reference](#api-reference)

---

## Introduction

The **Color Scheme Generator** is a frontend application designed for developers and designers to quickly explore color combinations. By leveraging [The Color API](https://www.thecolorapi.com/), it dynamically generates 5-color palettes based on a user-selected base color and a chosen color theory rule (e.g., Monochrome, Triad, Complementary).

The app features a modern, grid-based interface with smooth hover interactions and a convenient click-to-copy clipboard integration.

---

## Key Features

* **Dynamic Palette Generation:** Generates palettes based on 8 different color harmony rules.
* **Random Initial State:** Auto-generates a random hex color on page load so the interface is never empty.
* **One-Click Copy:** Click on any generated color block or hex code to instantly copy the value to your clipboard.
* **Zero Dependencies:** Built entirely with pure HTML, CSS, and vanilla JavaScript.
* **Modern UI:** Styled with CSS Grid/Flexbox and typography powered by Google Fonts (Inter).

---

## Project Structure

| File | Role | Description |
| --- | --- | --- |
| `index.html` | **Entry Point** | Contains the semantic HTML structure, including the control form and the empty container for dynamic color injection. |
| `styles.css` | **Styling** | Handles the visual presentation, CSS Grid layout for the palette columns, and interactive hover animations. |
| `script.js` | **Core Logic** | Manages DOM manipulation, the `fetch` workflow to The Color API, and the Clipboard API interactions. |

---

## Installation Guide

Because this project relies entirely on native browser features and vanilla web technologies, there are no package managers, build tools, or compilers required.

1. **Clone the repository** (or download the source files):
```bash
git clone https://github.com/ryabubaker/color-scheme-generator.git

```

2. **Navigate to the directory**:

```bash
cd color-scheme-generator

```

3. **Run the application**:
Simply open the `index.html` file in your preferred modern web browser.

```bash
# On macOS
open index.html

# On Windows
start index.html

```

> 💡 **Tip for Developers:** If you want to run this through a local server for development, you can use an extension like VS Code Live Server or run `npx serve .` in your terminal.

---

## Usage

1. **Select a Base Color:** Click the color picker in the top left to choose your seed color.
2. **Choose a Harmony Mode:** Use the dropdown menu to select a color theory relationship:

* Monochrome / Monochrome Dark / Monochrome Light
* Analogic / Analogic Complement
* Complement
* Triad
* Quad

3. **Generate:** Click the **"Get color scheme"** button. The app will fetch and render 5 complementary colors.
4. **Copy to Clipboard:** Click directly on any of the resulting color blocks or their hex labels. A temporary "Copied!" message will confirm the action.

---

## API Reference

This project fetches data from **The Color API**.

**Endpoint:** `GET https://www.thecolorapi.com/scheme`

### Query Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `hex` | `string` | *Required* | The seed color without the `#` symbol (e.g., `000000`). |
| `mode` | `string` | `monochrome` | The color harmony mode (e.g., `triad`, `complement`). |
| `count` | `number` | `5` | The number of colors to return in the payload. |

**Example Fetch Call from `script.js`:**

```javascript
function fetchColorArray(color, scheme) {
  return fetch(
    `[https://www.thecolorapi.com/scheme?hex=$](https://www.thecolorapi.com/scheme?hex=$){color.replace("#", "")}&mode=${scheme}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      // Maps over the response to extract just the hex string
      colorArray = data.colors.map((color) => color.hex.value);
      return colorArray;
    });
}

```
