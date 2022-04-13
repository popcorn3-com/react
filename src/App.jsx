/* eslint react-hooks/exhaustive-deps:off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const [faceFlag, setFaceFlag] = useState(true);
  const onClickfaceShow = () => {
    setFaceFlag(!faceFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceFlag || setFaceFlag(true);
    } else {
      faceFlag && setFaceFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>

      <button onClick={onClickfaceShow}>on/off</button>
      {faceFlag && <p>(^^/)</p>}
    </>
  );
};

export default App;
