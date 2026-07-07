# ⭐ React Star Rating Component

A simple and reusable **React Star Rating** component built using React Hooks. It supports:

- ⭐ Dynamic number of stars
- ⭐ Default selected rating
- ⭐ Hover preview
- ⭐ Click to select rating
- ⭐ No external libraries

---

## Features

- Configurable maximum number of stars.
- Hover over stars to preview the rating.
- Click a star to permanently select a rating.
- Simple implementation using `useState`.
- Easily customizable colors and styles.

---

## Project Structure

```
src/
 ├── App.js
 ├── styles.css
 └── index.js
```

---

## Code

```jsx
import "./styles.css";
import { useState } from "react";

export default function App({
  maxStars = 5,
  defaultSelection = 0,
}) {
  const [selected, setSelected] = useState(defaultSelection);
  const [hover, setHover] = useState(0);

  const selectedRating = hover || selected;

  return (
    <div className="App">
      {Array.from({ length: maxStars }).map((_, idx) => (
        <span
          key={idx}
          style={{
            fontSize: 40,
            cursor: "pointer",
            color: selectedRating >= idx ? "red" : "black",
          }}
          onClick={() => setSelected(idx)}
          onMouseEnter={() => setHover(idx)}
          onMouseLeave={() => setHover(0)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `maxStars` | Number | `5` | Total number of stars displayed |
| `defaultSelection` | Number | `0` | Initially selected star index |

---

## State

### selected

Stores the rating selected by clicking.

```jsx
const [selected, setSelected] = useState(defaultSelection);
```

### hover

Stores the currently hovered star.

```jsx
const [hover, setHover] = useState(0);
```

### selectedRating

Displays the hovered rating if hovering; otherwise displays the selected rating.

```jsx
const selectedRating = hover || selected;
```

---

## How It Works

### 1. Generate Stars

```jsx
Array.from({ length: maxStars })
```

Creates an array with `maxStars` elements.

---

### 2. Hover

```jsx
onMouseEnter={() => setHover(idx)}
```

Temporarily highlights stars.

---

### 3. Mouse Leave

```jsx
onMouseLeave={() => setHover(0)}
```

Removes the hover effect.

---

### 4. Click

```jsx
onClick={() => setSelected(idx)}
```

Stores the selected rating.

---

### 5. Color Logic

```jsx
color: selectedRating >= idx ? "red" : "black"
```

If the current star index is less than or equal to the selected/hovered rating, it becomes red.

---

## Example

```jsx
<App />

<App
  maxStars={10}
  defaultSelection={3}
/>
```

---

## Current Behavior

| Action | Result |
|---------|--------|
| Hover star | Preview rating |
| Mouse leaves | Previous selection is restored |
| Click star | Rating is permanently selected |

---

## Improvements

- Half-star support
- Keyboard accessibility
- Read-only mode
- Custom icons
- Custom colors
- Rating callback (`onChange`)
- Animations
- Touch support

---

## ⚠️ Note About Indexing

The current implementation uses **0-based indexing**.

Example:

| Star | Stored Value |
|------|--------------|
| 1st | 0 |
| 2nd | 1 |
| 3rd | 2 |
| 4th | 3 |
| 5th | 4 |

If you want the rating values to be **1–5**, update the code as follows:

```jsx
onClick={() => setSelected(idx + 1)}
onMouseEnter={() => setHover(idx + 1)}

color: selectedRating >= idx + 1 ? "red" : "black";
```

This makes the component behave more intuitively for displaying and submitting ratings.

---

## Possible Enhancements

- ⭐ 1–10 rating
- ⭐ Half-star ratings
- ⭐ Emoji ratings
- ⭐ Average rating display
- ⭐ Backend integration
- ⭐ Animated hover effects

---

## License

MIT
