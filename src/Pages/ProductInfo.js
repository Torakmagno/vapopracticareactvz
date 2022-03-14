import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
	
	const { id } = useParams();
	const [productInfo, setProductInfo] = useState(null);
	
	
	useState(() => {
		axios.get("http://localhost:8080/api/liquido/" + id)
			.then(response => {
				setProductInfo(response.data);
			});
	}, []);
	
	if(productInfo != null) {
	
	return (
		 <div className="bg-container mt-3 p-3 rounded">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>{productInfo.nombre}</h1>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                    </div>
                    <div className="col">
                        <span><h5>Marca: {productInfo.marca}</h5></span>
                        <span><h2>Precio: {productInfo.precio}€</h2></span>
                        <span><p>{productInfo.descripcion}</p></span>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-sm-2">
                    </div>
                </div>
            </div>
	);
	} else {
		return <h1>Cargando...</h1>
	}
}

export default ProductInfo;