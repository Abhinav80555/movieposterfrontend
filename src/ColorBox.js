import { useState } from "react";

function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "35px",
    width: "300px"
  };
  return <div style={styles}></div>;
}

export function AddColor() {
  // const color="crimson";
  const [color, setColor] = useState("crimson");
  //array of string
  // const colorList = ["blue", "yellow", "green"];
  const [colorList, setColorList] = useState(["blue", "yellow", "green"]);

  const styles = {
    fontSize: "24px",
    backgroundColor: color
  };

  return (
    <div>
      <div className="add-color">
        <input
          onChange={(event) => setColor(event.target.value)}
          style={styles}
          type="text"
          placeholder="Enter a color"
          value={color}
        />
        <button onClick={() => setColorList([...colorList, color])}>
          Add Color
        </button>
      </div>

      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
