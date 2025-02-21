import React from "react";
import Header from "./Header";
import Card from "./Card";
import TripsCard from "./TripsCard";
import "../styles/styles.css"
import Trips from "./Trips"
import People from "./People";
import Footer from "./Footer";

export default function App () {

  return (
    <div>
      <Header/>
      <h1 className="pessoas">Pessoas</h1>
      {People.map( (peoples) => (
        <Card key={peoples.id}
        name={peoples.name}
        img={peoples.imgURL}
        alt={peoples.alt}
        tel={peoples.tel}
        email={peoples.email}
        />
      ))}
      
      <h1>Viagens</h1>
      <h2>Qual meio de locomoção você prefere?</h2>
      {Trips.map ((travels) => (
        <TripsCard key={travels.id}
        name={travels.name}
        img={travels.imgURL}
        alt={travels.alt}
        />
      ))}
      <Footer/>
    </div>
  )
}