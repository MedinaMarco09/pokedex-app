import React from 'react';


function Header ({name,id}) {
    return (
        
        <div className="header">
          <div className="pokemon-name">{name}</div>
          <div className="pokemon-id">{id}</div>
        </div>
    );
}

export default Header;

//Hacer la function, abrir {,} asignar los parametros , ponerle nombre a la
//function (Header) agregar la parte del header y asignar los parametros
// Despues remprazar la parte del codigo con <Header name="Oshawott" id="501" />
//Importar el componente