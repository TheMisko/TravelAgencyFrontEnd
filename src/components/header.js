import React from "react";
import NavBar from "./navBar";
import "../App.css";

const Header = () => {
  return (
    <>
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="hader-img-text">
        <h2>KRENI SA NAMA</h2>
        <h1>Nadji Tvoje Savrseno Putovanje</h1>
      </div>
      {/* <div className="selector">
        <Selector />{" "}
        <Button variant="contained" size="large" color="primary">
          Pretrazi
        </Button>
      </div> */}
      <div>
        <img
          className="header-img"
          src="https://upload.wikimedia.org/wikipedia/commons/0/00/Louvre_2007_02_24_c.jpg"
        />
      </div>
    </>
  );
};

export default Header;
