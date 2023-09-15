import React, { useState } from "react";
import Images from "../images.json";

const ImgChange = () => {
  const [selectedImg, setSelectedImg] = useState(Images[0]?.image || "");

  return (
    <>
      <div className="Selected-container">
        <img src={selectedImg} className="selected" alt="" />
      </div>

      <div className="imgContainer">
        {Images.map((img, id) => (
          <img
            onClick={() => setSelectedImg(img.image)}
            key={img.id}
            src={img.image}
            className="change"
            alt=""
          />
        ))}
      </div>

      <style>
        {` 
        img{
            display: block;
            cursor: pointer;
        }
        .Selected-container{
            margin: auto;
            width: 100%;
            max-width: 540px;
        }
        .Selected-container .selected{
            width: 300px;
            height: 300px;
            margin: 0 auto;
            border: 4px solid #F55353;
        }
        .imgContainer{
            width: 70%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 50px;
            column-gap: 20px;
        
        }
        .imgContainer img{
            width: 200px;
            height: 100px;
            margin: 5px 0;
        }
            
            `}
      </style>
    </>
  );
};

export default ImgChange;
