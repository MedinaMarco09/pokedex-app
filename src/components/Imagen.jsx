import React from "react";


function Imagen ({ImagenURL, name}){
    return (
    <div className="header">  
      <div className="image-container">
      <div className="circular-progress">
        <img
          src={ImagenURL}
          alt={name}
          width="200"
        />
      </div>
      </div>
    </div> 
    )
}

export default Imagen;

//Volvimos a hacer lo mismo pero ahora recordando que para que salga la imagen tenemos que hacer agregar tambien el div con su className donde viene la imagen