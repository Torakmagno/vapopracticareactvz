import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserProvider, UserConsumer } from "../Context/CarritoContext";


const Producto = ({id ,nombre, marca, descripcion, cantidad, precio}) => {

	const carrito = useContext(UserConsumer);
    
    return(
        <div className="card">
                <div className="card-body text-muted">
               	<h4 className="card-title">{nombre}</h4>
                    <p>Precio: {precio} ‎€</p>
                    <p>{descripcion}</p>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="btn-group inline pull-left">
                            	<Link to={"/producto/" + id} className="btn btn-danger btn-sm">Ver más</Link> 
                            </div>
                            <div className="btn-group inline pull-right">
                            	<button className="btn btn-success btn-sm" onClick={() => carrito.addProduct({id ,nombre, marca, descripcion, cantidad, precio})}>Add <i className="fa fa-shopping-cart"></i></button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
};
export default Producto;