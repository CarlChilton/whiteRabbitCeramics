import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/logo.jpg";

import studio1 from "assets/img/grass2.jpg";
import studio2 from "assets/img/lotsopots.jpg";
import studio3 from "assets/img/lotsopots2.jpg";
import studio4 from "assets/img/grass1.jpg";
import studio5 from "assets/img/lotsopots2.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Parallax small filter image={require("assets/img/banner.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img id="logoImage" src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className="strapline ">Beautiful studio pottery handmade in the heart of Yorkshire</h3>
     

                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                    <br/>
                    <br/>
                    <h3 className="mudStatement">Adventures In Mud... <i className="material-icons" style={{color: "red"}}>favorite</i></h3>       
                    <br/>
                  </div>
                </div>
              </GridItem>
            </GridContainer>       
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <img
                  alt="..."
                  src={studio1}
                  className={navImageClasses}
                />
                <img
                  alt="..."
                  src={studio2}
                  className={navImageClasses}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <img
                  alt="..."
                  src={studio5}
                  className={navImageClasses}
                />
                <img
                  alt="..."
                  src={studio4}
                  className={navImageClasses}
                />
              </GridItem>
            </GridContainer>     
            <br/>
            <br/>
            <GridContainer justify="center">
              <GridItem align="center" xs={12} sm={12} md={12}>
                <h3 className="strapline ">Subscribe to my newsletter</h3>
                 
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem align="center" xs={12} sm={12} md={12}>
                <br/>
                <Button color="success">Submit</Button>
                <br/>
                <br/>
                <br/>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
}
