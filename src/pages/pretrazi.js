import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navBar";
import NewCard from "../components/new-card";
import axios from "axios";
import Footer from "../components/footer";

const Pretrazi = () => {
  const lista = [
    {
      slika:
        "http://s1.bwallpapers.com/wallpapers/2014/01/29/winter-town_050450278.jpg",
      text: "ZIMOVANJE"
    },
    {
      slika:
        "https://southamericatravelcentre.com.au/wp-content/uploads/2016/06/Rooftops-of-Cuzco-Peru1.jpg",
      text: "JUZNA AMERKA"
    },
    {
      slika:
        "https://www.jetsetter.com/uploads/sites/7/2018/04/bhbyGqxA-1380x1035.jpeg",
      text: "EVROPA"
    },
    {
      slika:
        "https://media.npr.org/assets/img/2018/11/30/gettyimages-516986280-1-_wide-d2c31add9c33d5ec09aafa7f62171dca11c9fb65-s800-c85.jpg",
      text: "LETOVANJE"
    }
  ];
  const [data, setData] = useState({});
  const [on, setOn] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/notes")
      .then(function(response) {
        setData(response.data);
        console.log(response);
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
      <NavBar />
      <div className="pretrazi-container">
        {lista.map(list => (
          <div className="pretrazi">
            {" "}
            <h2>{list.text}</h2>
            <img src={list.slika} />
          </div>
        ))}
      </div>

      <div className="pretrazi-card-container">
        <div className="new-card-flex">
          {on ? (
            data.map(destinacije => (
              <div className="new-card-flex">
                {" "}
                <Link
                  to={`/destinacija/${destinacije.naziv}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <NewCard info={destinacije} />
                </Link>
              </div>
            ))
          ) : (
            <div>loading </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pretrazi;
