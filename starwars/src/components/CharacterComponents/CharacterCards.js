import React from "react";
import {
    Col, Card, CardHeader, CardText, 
    CardBody, CardSubtitle
  } from 'reactstrap';


function CharacterCards(props) {



    return (
        <Col sm="12" md="4" lg="3">
        <Card  color="secondary" className="text-white">
            <CardHeader>{props.characterData.name}</CardHeader>
            <CardBody>
                <CardSubtitle>Year Born: {props.characterData.birth_year}</CardSubtitle>
                <CardSubtitle>Gender: {props.characterData.gender}</CardSubtitle>
                <CardSubtitle>Mass: {props.characterData.mass}kg</CardSubtitle>
                <CardSubtitle>Heigth: {props.characterData.height}cm</CardSubtitle>
                <CardSubtitle>Eye Color: {props.characterData.eye_color}</CardSubtitle>
                <CardSubtitle>Skin Color: {props.characterData.skin_color}</CardSubtitle>
            </CardBody>
        </Card>
        </Col>
        
    )
}


export default CharacterCards