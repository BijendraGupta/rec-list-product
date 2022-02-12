import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { getCookie } from "../cookies";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Products
          </Typography>
          {!getCookie("token") && (
            <>
              <Button color="inherit">
                <Link
                  color="white"
                  to="/register"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Register
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  color="white"
                  to="/login"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Login
                </Link>
              </Button>
            </>
          )}
          <Button color="inherit">
            <Link
              color="white"
              to="/productTile"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Products
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
