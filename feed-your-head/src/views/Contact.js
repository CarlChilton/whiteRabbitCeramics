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

export default function Contact(props) {
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
      <Parallax small filter image={require("assets/img/banner.jpg")}>

        <h1 className={classes.title + " aboutMeTitle"}>Get in touch...</h1>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center" className="">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile + " aboutMeTextContainer"}>
                 
                  <br/>
                  <div className={classes.section}>
           
                    
                    <h4 className={classes.description}>
                      Fill out the form below if you want to get in touch.
                    </h4>
                    <br/>
                    <br/>
                    <form>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="Your Name"
                            id="name"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="Your Email"
                            id="email"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                        <CustomInput
                          labelText="Your Message"
                          id="message"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.textArea
                          }}
                          inputProps={{
                            multiline: true,
                            rows: 5
                          }}
                        />
                        </GridItem>
                        <GridItem align="center" xs={12} sm={12} md={12}>
                          <br/>
                          <Button color="primary">Send Message</Button>
                          <br/>
                          <br/>
                        </GridItem>
                        <br/>
                      </GridContainer>
                    </form>
              
                  </div>
            
            
           
                </div>
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
