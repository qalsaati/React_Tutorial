import { useState } from "react";

export function ColorPicker({ colors }) {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: color,
              border: selectedColor === color ? "2px solid black" : "none",
              cursor: "pointer",
            }}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </div>
      {selectedColor && (
        <p>
          Selected Color:{" "}
          <span style={{ color: selectedColor }}>{selectedColor}</span>
        </p>
      )}
    </div>
  );
}
