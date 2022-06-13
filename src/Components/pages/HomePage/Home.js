import React from "react";
import HeroSection from "../../HeroSection";
import { Button } from "../../Button";
// import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo } from "./Data";
// import Pricing from '../../Pricing';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Hidden } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Portfolio from "../Portfolio/Portfolio";
import Ourcommunity from "../Ourcommunity/Ourcommunity";
import Triointro from "../../Triointro/Triointro";
import Stats from "../../Stats/Stats";
import Aboutcode8 from "../AboutCode8/Aboutcode8";
import Ouroffering from "../../Ouroffering/Ouroffering";
import Eventgallery from "../../Eventgallery/Eventgallery";
import Testimonial from "../../Testimonials/Testimonial";
import Ourreach from "../../Ourreach/Ourreach";
import OurPartners from "./OurPartners/OurPartners";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      {/* {Trio Introduction} */}
      <Ouroffering Heading={'Explore our programs'} />
      {/* <Triointro/> */}
      {/* <HeroSection {...homeObjTwo} /> */}

      <Aboutcode8 />

      {/* Stats */}
      <Stats />

      {/* Our Reach */}
      <Ourreach />

      {/* Testimonial */}
      <Testimonial />
      

      {/* Events Gallery */}
      <Eventgallery />

      <OurPartners/>
      


      {/* Our Community */}
      <Ourcommunity />

    </>
  );
}

export default Home;
