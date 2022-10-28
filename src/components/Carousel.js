import Carousel from "react-bootstrap/Carousel";
import React from "react";
import { sponsor_info } from "../sponsors";
import "../App.css";

export default function FoundationalCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block logo"
          src={sponsor_info.foundational[0].logo}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{sponsor_info.foundational[0].company}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block logo"
          src={sponsor_info.foundational[1].logo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{sponsor_info.foundational[1].company}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block logo"
          src={sponsor_info.foundational[2].logo}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{sponsor_info.foundational[2].company}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
