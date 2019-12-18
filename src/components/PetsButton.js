import React, { useState } from "react";
import axios from "axios";
import PetCard from "./PetCard";

function PetsButton() {
  const [pets, setPets] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    return axios({
      url: "https://mypets-app.herokuapp.com/api/pets",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`
      }
    }).then(res => {
      setPets(res.data.pets);
      console.log(res.data);
    });
  };
  if (pets.length === 0) {
    return <button onClick={handleSubmit}>Retrieve pets</button>;
  } else {
    return (
      <div>
        {pets.map(pet => {
          return <PetCard pet={pet} />;
        })}
      </div>
    );
  }
}

export default PetsButton;
