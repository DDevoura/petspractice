import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function PetCard(props) {
  const pet = props.pet;
  console.log(pet);
  return (
    <div>
      <h1>{pet.name}</h1>
      <h4>{pet.species}</h4>
      <img src={pet.imageUrl} />
    </div>
  );
}

export default PetCard;
