import React, { useEffect, useState, useContext } from "react";
import { ProductCointainer } from "./Products.styles.tsx";
import { ActivityBar } from "../../compontents/activitybar/Activitybar.tsx";
import { Loader } from "../../compontents/globalcomponents/elements.tsx";
import StoreContext from "../../context/globalstorage.tsx";
import { AddProduct } from "./Addproduct.tsx";
import cartplus from "../../images/cartplus.svg";

export interface ProductModel {
	id: number | null;
	name: string | null;
photo_url: string ;
	category: string | null;
	price: number | null;
}

function Products() {
	const { addProductVisibilityFunction, productData, addNewProduct, addProductVisibility, handleCart } = useContext(StoreContext);
	const [product, setProduct] = useState<ProductModel[]>([]);
	const [loader, setLoader] = useState<boolean>(false);

	useEffect(() => {
		if (productData.length === 0) {
			fetch('https://api.slingacademy.com/v1/sample-data/products?offset=5&limit=20')
				.then(res => res.json())
				.then(data => addNewProduct(data.products))
				.catch(() => setLoader(true))
		}
		if (product.length > 0) {
			setLoader(true);
		}
	}, [])

	useEffect(() => {
		setProduct(productData);
	}, [productData])

	const activityBarModel = {
		handleFilter: '',
		buttonName: "Add Product",
		buttonOnclick: addProductVisibilityFunction,
	}

	const handleAddCart = (value) =>{
		const productDetail =	productData.find(obj => {return obj.id == value;});
		handleCart(productDetail);
	}

	return (
		<>
			{addProductVisibility && (
				<AddProduct />
			)}
			<ActivityBar activityBarModel={activityBarModel} />
			{loader ?
				<Loader />
				:
				<ProductCointainer >
					{product.map((value) =>
						<div key={value.id} className="product">
							<div>
								<div >{value.name}</div>
								<div ><img src={value.photo_url || ""} width={100} height={100} ></img></div>
								<div >Category - {value.category}</div>
								<div >Rs. {value.price}</div>
							</div>
							<div className="cart" onClick={() => {handleAddCart(value.id)}} ><img src={cartplus} width={35} height={35} ></img></div>
						</div>
					)}
				</ProductCointainer>
			}
		</>
	);
}

export default Products