import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    zIndex: 20
  },
  menuButton: {
    marginRight: theme.spacing(0)
  },
  title: {
    flexGrow: 0
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <div className="home-icon">
              <HomeIcon fontSize="large" />
            </div>
          </Link>

          <div className="nav-bar">
            <Link to="/destinacije">
              <div className="nav-btn">
                <div class="btn btn-three">
                  <span>DESTINACIJE </span>
                </div>
              </div>
            </Link>

            <Link to="/o_nama">
              <div className="nav-btn">
                <div class="btn btn-three">
                  <span>O NAMA</span>
                </div>
              </div>
            </Link>
            <Link to="/pretrazi">
              <div className="nav-btn">
                <div class="btn btn-three">
                  <span>PRETRAZI</span>
                </div>
              </div>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
