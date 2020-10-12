/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { NavLink, Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>      
        <NavLink className={classes.navLink} to="/">Home</NavLink>
      </ListItem>      
      <ListItem className={classes.listItem}>      
        <NavLink className={classes.navLink} to="/about">About Me</NavLink>
      </ListItem>      
      <ListItem className={classes.listItem}>
        <NavLink className={classes.navLink} to="/shop">Shop</NavLink>
      </ListItem> 
      <ListItem className={classes.listItem}>
        <NavLink className={classes.navLink} to="/gallery">Gallery</NavLink>
      </ListItem> 
      <ListItem className={classes.listItem}>
        <NavLink className={classes.navLink} to="/contact">Contact</NavLink>
      </ListItem> 
      
      
       <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            href="#"
            className={classes.navLink}
          >
            <i className="material-icons">shopping_cart</i>
          </Button>
      </ListItem>
    </List>
  );
}
