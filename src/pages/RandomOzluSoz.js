import React, { useState, useEffect } from "react";

const RandomOzluSoz = () => {
  const [ozlu, setOzlu] = useState(null);

  useEffect(() => {
    getOzlu();
  }, []); //
  const getOzlu = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setOzlu(data[randomNum]);
      })
      .catch((error) => console.error(error)); 
  };

  return (
    <div>
      {ozlu ? (
        <div>{ozlu.text}</div>
      ) : (
        <div>Özlü Söz Getirmek İçin Butona Tıklayın</div>
      )}

      <button onClick={getOzlu}>Özlü Söz Getir</button>
    </div>
  );
};

export default RandomOzluSoz;
