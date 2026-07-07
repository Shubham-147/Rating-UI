import "./styles.css";
import { useState } from "react";

export default function App({ maxStars = 5, defaultSelection = 0 }) {
  const [selected, setSelected] = useState(defaultSelection);
  const [hover, setHover] = useState(0);

  const selectedRating = hover || selected;

  return (
    <div className="App">
      {Array.from({ length: maxStars }).map((_, idx) => {
        console.log(selectedRating <= idx + 1, selectedRating, idx);
        return (
          <span
            style={{
              fontSize: 40,
              cursor: "pointer",
              color: selectedRating >= idx ? "red" : "black",
            }}
            onClick={() => setSelected(idx)}
            onMouseEnter={(_) => setHover(idx)}
            onMouseLeave={(_) => setHover(0)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
