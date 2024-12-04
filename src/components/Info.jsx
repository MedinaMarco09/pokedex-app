import React from "react";

function Info ({}) {
    return (
        
        <div>
          <div className="types-container">
            <div className="type water">Water</div>
          </div>
          <div className="basics-info">
            <div className="icon-color">
              <i className="fas fa-weight" style={{marginRight: '5px'}}></i>
              5
            </div>
            <div className="icon-color">
              <i className="fas fa-ruler-vertical" style={{marginRight: '5px'}}></i>
              0.5m
            </div>
          </div>
        </div>  
    );
}

export default Info;