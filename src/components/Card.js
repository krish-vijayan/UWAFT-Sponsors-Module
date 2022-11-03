import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import CardMedia from '@mui/material/CardMedia';



function BasicCard(props) {

  return (
    <Card sx={{ minWidth: 500, borderRadius: '20px'}}>
      <a href={props.sponsor_link} target='_blank'>
    <CardMedia
        component="img"
        height="140"
        image={props.sponsor_logo}
        alt="Sponsorship Logo"
      />
      </a>
      <Card.Body>
        <Card.Title>{props.sponsor_company}</Card.Title>
        <Card.Text>
          {props.sponsor_text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;
