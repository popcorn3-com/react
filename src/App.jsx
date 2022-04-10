import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    alert();
  };

  const contentLedyStyle = {
    color: "pink",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage />
      <p style={contentLedyStyle}>元気です!</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
    </>
  );
};

export default App;
