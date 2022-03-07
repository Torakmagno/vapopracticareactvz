import React,{useEffect, useState} from 'react';
import Producto from './Components/Producto';

const axios =require('axios');

const App = ()=>{

  const [liquidos,setLiquidos]=useState(null);

  useEffect(() => {

    axios.get('http://127.0.0.1:8080/api/liquidos')
    .then(response => {
      const liquidos = response.data;
      setLiquidos(liquidos);
      console.log(liquidos);
    });
},[])


  return( 
    <>
      {!liquidos ?'loading': liquidos.map(producto => (
        <Producto key={producto.id} {...producto} />    
      ))}
    </>
  )
}

export default App;

