import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../Context/CarritoContext"


const Cart = () => {
	
	const carritoContext = useContext(UserConsumer);
	
	
	if(carritoContext.carrito.length > 0) {
		
	
	return (
		<div className="container">
                <div className="bg-container mt-3 p-3 rounded">
                    <div className="row">
                        <div className="col-sm-12 mb-4">
                            <h1>Carrito de la compra</h1>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="table-responsive-sm">
                                        <table className="table table-striped">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th scope="col">Descripción</th>
                                                    <th scope="col">Precio</th>
¡                                                </tr>
                                            </thead>
                                            <tbody>
                                               
                                               {
												carritoContext.carrito.map(producto => {
													
													return (
														<tr key={producto.id}>
                               								<th>{producto.nombre}</th>
                                							<th>{producto.precio} €</th>
                            							</tr>
													)
												})
												}
                                               
                                               
                                               
                                            </tbody>
                                            <tbody>
                                                <tr className="table-light font-weight-bolder">
                                                    <td scope="col" colSpan="1" className="text-right"><span className="text-danger">Total: </span></td>
                                                    <td scope="col"><h5>{carritoContext.carrito.reduce((acumulado, actual) => acumulado + actual.precio, 0)} €</h5></td>
                                                </tr>
                                            </tbody>
                                        </table>    
                                    </div>
                                </div>
                                <div className="col-sm-4">
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	);
	} else {
		return <h1>Cargando...</h1>
	}
}


export default Cart;