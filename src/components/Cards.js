import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Courses Offered</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/2.jpg"
              text="Post Graduate Diploma in Advanced Computing (PG DAC) grooms engineers and IT professionals for a career in Software Development."
              label="PGDAC"
              path="/services"
            />
            <CardItem
              src="images/5.jpg"
              text="Post Graduate Diploma in Big Data Analytics (PG DBDA) enables students to explore the fundamental concepts of big data analytics."
              label="PGDBDA"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/3.jpg"
              text="This includes Core Java and Mobile and Wireless Technologies modules"
              label="PGDMC"
              path="/services"
            />
            <CardItem
              src="images/4.png"
              text="The admission to all PG Courses by
              C-DAC ACTS is through an All-India
              C-DAC Common Admission Test"
              label="Pre CAT"
              path="/services"
            />
            <CardItem
              src="images/7.jpg"
              text=" IoT aims to groom the students to enable them to work on current technology scenarios"
              label="PG DIoT"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
