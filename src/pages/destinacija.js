import React, { useState, useEffect } from "react";
import axios from "axios";
import DestinationHeader from "../components/destination-header";
import NavBar from "../components/navBar";
import TabInfo from "../components/tab";
import Footer from "../components/footer";
import ModalEmail from "../components/modalEmail";

const Destinacija = ({ match }) => {
  const [apiInfo, setApiInfo] = useState(match.params.id);
  const [on, setOn] = useState(false);
  const [destinacija, setDestinacija] = useState({});
  console.log(match);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/notes/${apiInfo}`)
      .then(function(response) {
        setDestinacija(response.data[0]);
        console.log(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        setOn(true);
      });
  }, []);

  return (
    <>
      <div className="background-home">
        <NavBar />
        <div>
          {" "}
          {on ? (
            <div>
              <DestinationHeader
                naziv={destinacija.naziv}
                opis={destinacija.opis}
                slike={destinacija.slike}
                cena={destinacija.cena}
              />
              <TabInfo
                info={destinacija.information}
                tourPlan={destinacija.tourPlan}
                gallery={destinacija.gallery}
                naziv={destinacija.naziv}
              />
            </div>
          ) : (
            <div>loading</div>
          )}{" "}
        </div>
        <div className="mail-dest">
          <ModalEmail naziv={destinacija.naziv} />
        </div>
        <div className="background">
          <div className="footer-destinacija">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinacija;
