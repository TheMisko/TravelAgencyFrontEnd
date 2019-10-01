import React from "react";
import GMaps from "./g-maps";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Button from "@material-ui/core/Button";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  card: {
    minWidth: 300,
    maxWidth: 350
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const GoogleMaps = ({ first, second, width }) => {
  const classes = useStyles();

  return (
    <>
      <div className="kontakt-agenciju">
        <h1>Kontaktirajte Agenciju</h1>
      </div>
      <div className="kontakt">
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Posetite Nas
            </Typography>

            <Typography variant="body2" component="p">
              Posetite Nasu agenciju ili nam posaljite E-mail ako imate neka
              odredjena pitanja.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <LocationOnIcon color="primary" /> Ul. Marka Markovica
            </Button>
          </CardActions>
          <CardActions>
            <Button size="small">
              <AccessTimeIcon color="primary" /> 08-21h
            </Button>
          </CardActions>
          <CardActions>
            <Button size="small">
              <PhoneAndroidIcon color="primary" /> 069-788-788-7
            </Button>
          </CardActions>
          <CardActions>
            <Button size="small">
              <FacebookIcon color="primary" /> Agencija_FB
            </Button>
          </CardActions>
          <CardActions>
            <Button size="small">
              <InstagramIcon color="primary" /> Agencija_IG
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="g-maps">
        <GMaps width={width} first={first} second={second} />
      </div>
    </>
  );
};

export default GoogleMaps;
