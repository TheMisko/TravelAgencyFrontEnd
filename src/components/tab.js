import React, { useState } from "react";
import GMaps from "./g-maps";
import ModalImage from "./modalImage";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: "2%"
  }
}));

export default function TabInfo({ info, tourPlan, gallery, naziv }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [imgSrc, setImgSrc] = useState("");
  const [openImage, setOpenImage] = useState(false);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function getImage(src) {
    setImgSrc(src);
    setOpenImage(true);
  }
  console.log(imgSrc);
  console.log(openImage);

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="Informacije" href="/drafts" {...a11yProps(0)} />
            <LinkTab label="Plan Ture" href="/trash" {...a11yProps(1)} />
            <LinkTab label="Lokacija" href="/spam" {...a11yProps(2)} />
            <LinkTab label="Galerija" href="/spam" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <div className="background-tab">
          <div className="tab-container">
            <TabPanel value={value} index={0}>
              <div>
                <h4>{info.info}</h4>
              </div>
              <div className="tab-naziv">
                <h3>Destinacija:</h3> <h3 className="tab-naziv-h3">{naziv}</h3>
              </div>
              <div className="tab-date">
                <h3>Vreme Polaska:</h3> <h4>{info.date}</h4>
              </div>
              <div className="tab-uracunato">
                <h3>Uracunato:</h3>
                <div className="test">
                  {info.uracunato.map(incl => (
                    <div className="uracunato-icons">
                      <CheckBoxIcon color="primary" />
                      <h4> {incl}</h4>
                    </div>
                  ))}
                </div>
              </div>
              <div className="tab-uracunato">
                <h3>Nije Uracunato:</h3>
                <div className="test">
                  {info.nijeUracunato.map(excl => (
                    <div className="uracunato-icons">
                      <ClearIcon color="primary" />
                      <h4> {excl}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div>
                {tourPlan.map((tour, index) => (
                  <div className="tour-dan">
                    <div>
                      <h2>Dan: {index + 1}</h2>
                    </div>{" "}
                    <p>{tour}</p>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="tab-map">
                <GMaps
                  height={"60%"}
                  width={"70%"}
                  first={"40.444"}
                  second={"-120.176"}
                />
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div className="tab-img">
                {gallery.map(slike => (
                  <div className="tab-img-child">
                    <img onClick={() => getImage(slike)} src={slike} />
                  </div>
                ))}
              </div>
            </TabPanel>
          </div>
        </div>

        <ModalImage
          src={imgSrc}
          openImg={openImage}
          setOpenImage={setOpenImage}
        />
      </div>
    </>
  );
}
