import React from "react";
import {
    Col, Card, CardHeader, CardText, 
    CardBody, CardSubtitle
  } from 'reactstrap';


function CharacterCards(props) {



    return (
        <Col sm="12" md="6" lg="3">
        <Card  color="secondary" className="text-white">
            <CardHeader>{props.characterData.name}</CardHeader>
            <CardBody>
                <CardSubtitle>Year Born: {props.characterData.birth_year}</CardSubtitle>
                <CardSubtitle>Mass: {props.characterData.mass}</CardSubtitle>
                <CardText>Eye Color: {props.characterData.eye_color}</CardText>
            </CardBody>
        </Card>
        </Col>
        
    )
}


export default CharacterCards