import React from "react";
import { Link } from "react-router-dom";
// * Assets
import logo from "img/RADIO-1-TINTA-VERTICAL-BLANCO.svg";
import { HeaderStyles } from "./Header.styles";

function Header() {
  return (
    <HeaderStyles pl={"1em"} pr={"1em"}>
      <Link to="/">
        <img src={logo} style={{ width: "80px" }} alt="Logo radio chilanga" />
      </Link>
      {/* <Link to="/donations" className="Menu-item">
        🥲 Apoyar el proyecto
      </Link> */}
    </HeaderStyles>
  );
}

export { Header };
