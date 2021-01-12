import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import SettingsIcon from "@material-ui/icons/Settings";
import { useHistory } from "react-router-dom";
import GlobalContext from "../context/global-context";
import Constants from "../constants/constants";
import { SettingsOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    left: "0px",
    right: "0px",
    bottom: 0,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  let history = useHistory();
  const [value, setValue] = React.useState(history.location.pathname);
  const { title, handleTitle } = useContext(GlobalContext);

  const setTitle = (value) => {
    switch (value) {
      case "/":
        handleTitle(Constants.appName);
        break;
      case "/search":
        handleTitle("Kërkoni");
        break;
      case "/favorites":
        handleTitle("Preferencat");
        break;
      case "/saved":
        handleTitle("Postimet e ruajtura");
        break;
      case "/settings":
        handleTitle("Cilësimet");
        break;
      default:
        handleTitle(Constants.appName);
        break;
    }
  };

  useEffect(() => {
    setTitle(value);

  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setTitle(newValue);
    history.push(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction label="Kryefaqja" value="/" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Kërko"
        value="/search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        label="Preferencat"
        value="/favorites"
        icon={<BookmarksIcon />}
      />
      <BottomNavigationAction
        label="Ruajtur"
        value="/saved"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Cilësimet"
        value="/settings"
        icon={<SettingsIcon />}
      />
    </BottomNavigation>
  );
}