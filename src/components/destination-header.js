import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import Button from "@material-ui/core/Button";

import CardActionArea from "@material-ui/core/CardActionArea";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PeopleIcon from "@material-ui/icons/People";
import EuroIcon from "@material-ui/icons/Euro";

const useStyles = makeStyles({
  card: {
    maxWidth: 1000,
    minHeight: 100
  }
});

const DestinationHeader = ({ naziv, opis, slike, cena }) => {
  const classes = useStyles();
  return (
    <div>
      <div className="destinacija-cover">
        <img src={slike[0]} />
      </div>
      <div className="destinacija-card">
        <Card className={classes.card}>
          <div className="dest-header-info">
            <CardActionArea>
              <div className="dest-header-icons">
                <div>
                  <LocationOnIcon fontSize="large" />
                </div>
                <div className="center-icons">
                  <h3>Destinacija: {naziv}</h3>
                </div>
              </div>
            </CardActionArea>
            <CardActionArea>
              <div className="dest-header-icons">
                <div className="wallet">
                  <AccountBalanceWalletIcon fontSize="large" />
                </div>
                <div className="center-icons">
                  <h3>
                    Cena: {cena}
                    <EuroIcon className="euro" fontSize="small" />
                  </h3>
                </div>
              </div>
            </CardActionArea>
            <CardActionArea>
              <div className="dest-header-icons">
                <div>
                  <AccessTimeIcon fontSize="large" />
                </div>
                <div className="center-icons">
                  {" "}
                  <h3>Broj dana: 5</h3>
                </div>
              </div>
            </CardActionArea>

            <CardActionArea>
              <div className="dest-header-icons">
                <div>
                  <PeopleIcon fontSize="large" />
                </div>
                <div className="center-icons">
                  <h3>Broj putnika: 25</h3>
                </div>
              </div>
            </CardActionArea>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DestinationHeader;
