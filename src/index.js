import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Text, Circle } from "react-konva";

const App = () => {
  const [text, setText] = useState("");
  const handelClickCircle = () => {
    setText("you clicked on the circle!");
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text
          x={10}
          y={10}
          text={text}
          fontSize={24}
          fontFamily={"Calibri"}
          fill={"black"}
        />
        <Circle
          x={150}
          y={100}
          radius={50}
          fill={"red"}
          stroke={"black"}
          strokeWidth={4}
          onClick={handelClickCircle}
          fireEvent={handelClickCircle}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
