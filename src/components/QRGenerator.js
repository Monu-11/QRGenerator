import React, { useState, useRef } from "react

const QRGenerator = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [inputValue, setInputValue] = useState("");
  // const imageRef = useRef(null);

  const api = `https://api.qrserver.com/v1/`;
  const api2 = `create-qr-code/?size=125*125&data=`;

  const handleButtonClick = () => {
    setImageSrc(`${api}${api2}${inputValue}`);
  };
  return (
    <div className="generator">
      <img src={imageSrc} alt="QR code" />
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <br />
      <button onClick={handleButtonClick}>Generate</button>
    </div>
  );
};

export default QRGenerator;
