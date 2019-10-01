import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/header";
import Utisci from "../components/utisci";
import GoogleMaps from "../components/google-maps";
import Footer from "../components/footer";
import NewCard from "../components/new-card";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 350,
    marginLeft: "30px",
    marginRight: "30px",
    marginTop: "15px",
    marginBottom: "30px"
  }
});

const Home = () => {
  const [data, setData] = useState({});
  const [on, setOn] = useState(false);
  const classes = useStyles();
  const first = "47.444";
  const second = "-122.176";
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
      <div className="background-home">
        <Header />

        <div className="top">
          <h1>TOP PONUDE</h1>
        </div>
        <div className="test-flex">
          {on ? (
            data.map(dest => (
              <Link
                to={`/destinacija/${dest.naziv}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <NewCard info={dest} />
              </Link>
              // <Card className={classes.card}>
              //   <div className="p">
              //     <CardActionArea>
              //       <CardMedia
              //         component="img"
              //         alt="Contemplative Reptile"
              //         height="250"
              //         image={dest.slike[0]}
              //         title={dest.naziv}
              //       />

              //       <Link
              //         to={`/destinacija/${dest.naziv}`}
              //         style={{ textDecoration: "none" }}
              //       >
              //         <CardContent>
              //           <Typography gutterBottom variant="h5" component="h1">
              //             {dest.naziv}
              //           </Typography>
              //         </CardContent>
              //       </Link>
              //     </CardActionArea>
              //     <CardActions>
              //       <Button size="small" color="primary">
              //         Od {dest.cena} eura
              //       </Button>
              //     </CardActions>
              //   </div>
              // </Card>
            ))
          ) : (
            <h1>loading</h1>
          )}
        </div>
        <Utisci />

        <GoogleMaps width={"100%"} first={first} second={second} />

        <div className="background">
          <div className="footer-home">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
