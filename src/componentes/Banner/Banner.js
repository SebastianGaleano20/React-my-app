import React from "react";
import "../Banner/Banner.css";

const Banner = () => {
  return (
    <>
      <div className="head">
        <img
          src="https://i.pinimg.com/564x/01/9f/fd/019ffd3f32310675f67fa53bd8b6b01b.jpg"
          alt="Logo"
        ></img>
        <ul className="banner">
          <li>
            <a href=" ">Zapatillas</a>
          </li>
          <li>
            <a href=" ">Botines</a>
          </li>
          <li>
            <a href=" ">Camisetas</a>
          </li>
          <li>
            <a href=" ">Indumentaria</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Banner;