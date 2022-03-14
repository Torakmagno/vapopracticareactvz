import Producto from '../Components/Producto';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductListPage = () => {

    const [liquidos, setLiquidos] = useState(null);

  useEffect(() => {

    axios.get('http://127.0.0.1:8080/api/liquidos')
      .then(response => {
        const liquidos = response.data;
        setLiquidos(liquidos);
        console.log(liquidos);
      })
      .catch(error => {
        if(error.response.status === 403) {
          
        }
      })
  }, []);


if(liquidos != null) {
	return ( 
	
	<div className="container">
               
            <div className="bg-container mt-3 p-3 rounded">
                <div className="row">
                    <div className="col-sm-8">
                        <h2 className="float-left">Catálogo de Productos</h2>
                    </div>
                    <div className="col-sm-4">
                        <span>¿Qué estas buscando?</span>
                        <form className="form">
                            <input className="form-control" type="search" placeholder="Buscar" onChange={(e) => {this.buscarProducto(e)}}/>
                        </form>
                    </div>
                </div>
                <hr />
                <div className="row">
                {
                    liquidos.map(producto => {
	
					return (
					<div className="col-12 col-md-6 col-lg-3 mb-4" key={producto.id}>
						<Producto {...producto} />
					</div>
					)
					
				})
				}
                </div>
            </div>
        </div>
	
	/*
      <> 
      {!liquidos ? 'loading' : liquidos.map(producto => (
        <Producto key={producto.id} {...producto} />
      ))
      } </>
      */
      )
} else {
	return <h1>Cargando</h1>
}

  
      

}

export default ProductListPage;