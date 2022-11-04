import React, { Component } from "react";
import "./App.css";
import FoundationalCarousel from "./components/Carousel";
import CardItem from "./components/CardItem";
import Grid2 from "@mui/material/Unstable_Grid2";
import "bootstrap/dist/css/bootstrap.min.css";
import { sponsor_info } from "./sponsors.js";
import Typography from "@mui/material/Typography";

class FoundationalSponsors extends Component {
  constructor() {
    super();
    this.state = {
      foundational: [
        {
          company: "American Axle & Manufacturing",
          link: "https://www.aam.com/",
          logo: "https://cdn.phenompeople.com/CareerConnectResources/AAMAUS/en_us/mobile/assets/images/v-1625218070975-footer-logo.png",
        },
        {
          company: "General Motors",
          link: "https://www.gm.com/",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Logo_of_General_Motors.svg/1200px-Logo_of_General_Motors.svg.png",
        },
        {
          company: "Energy.Gov",
          link: "https://www.energy.gov/",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Seal_of_the_United_States_Department_of_Energy.svg/1200px-Seal_of_the_United_States_Department_of_Energy.svg.png",
        },
        {
          company: "Mathworks",
          link: "https://www.mathworks.com/",
          logo: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1426005180/j7ytodfbs2synikmskfy.png",
        },
        {
          company: "dSpace",
          link: "https://www.dspace.com/en/inc/home.cfm ",
          logo: "https://www.dspace.com/img/logo.svg",
        },
        {
          company: "Bosch",
          link: "https://www.bosch.ca/",
          logo: "https://assets.bosch.com/media/global/bosch_group/our_figures/brands/bosch-brand-bosch_res_1280x720.png",
        },
        {
          company: "Tesa",
          link: "https://www.tesa.com/en",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/TESA-Logo.svg/1280px-TESA-Logo.svg.png",
        },
      ],
    };
  }
  render() {
    let foundationalCards = this.state.foundational.map((i,sponsor) => {
      return (
        <CardItem
          sponsor_link={sponsor_info.foundational[0].link}
          sponsor_logo={sponsor_info.foundational[0].logo}
          sponsor_company={sponsor_info.foundational[0].company}
        />
      );
    });
    return (
      
        {foundationalCards}
      
    );
  }
}

export default FoundationalSponsors;