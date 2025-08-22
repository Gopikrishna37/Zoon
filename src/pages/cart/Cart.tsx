import React, { useContext, useEffect, useState } from "react";

import { HomePage } from "../../compontents/Styles.tsx";
import { CustomizedTable } from "../../compontents/table/Table.tsx";
import { CartContainer } from "../cart/Cart.styles.tsx";

import StoreContext from "../../context/globalstorage.tsx";
import del from "../../images/delete.svg";

export interface CartModel {
	id?: number;
	item?: React.JSX.Element;
	price?: React.JSX.Element;
	quantity?: React.JSX.Element;
	total: React.JSX.Element;
	Remove?: React.JSX.Element;
}

function Cart(): React.ReactNode {
	const { cart, deleteCart } = useContext(StoreContext);
	const [customizedCart, setCustomizedCart] = useState<CartModel[]>([]);
	const [quantity, setQuantity] = useState<{ [itemId: string]: number }>({});

	useEffect(() => {
		CustomCart(cart);
	}, [cart, quantity])

	const handleQuantity = (itemId: string, newQuantity: number) => {
		setQuantity((prevQuantity) => ({
			...prevQuantity,
			[itemId]: newQuantity,
		}));
	};

	const CustomCart = (cart) => {
		const numberOfItems = cart.length; // Set the desired number of items based on the length of the cart array

		const grandTotal = cart.reduce((total, currentItem) => {
			return total + currentItem.price * (quantity[currentItem.id] || 1);
		}, 0);


		console.log("total", grandTotal, "nofitem", numberOfItems);
		const data = Array.from({ length: numberOfItems + (numberOfItems > 0 ? 1 : 0) }, (_, index) => {

			if (index === numberOfItems) {
				return {
					grandTotal: true,
					total: <div><strong>Grand Total:</strong></div>,
					empty: "",
					amount: <div>${grandTotal.toFixed(2)}</div>,
				};
			}

			const currentItem = cart[index];
			return {
				id: currentItem.id,
				item: currentItem.id && <div className="cartitem"> {currentItem.name} &nbsp; <img src={currentItem.photo_url} width={100} height={100} ></img></div>,
				price: <div>${currentItem.price}</div>,
				quantity: <div className="quantity">
					<span onClick={(e) => quantity[currentItem.id] > 0 ? handleQuantity(currentItem.id, (quantity[currentItem.id] || 0) - 1) : (e)}>-</span>
					&nbsp;{currentItem.quantity = quantity[currentItem.id] || 1}&nbsp;
					<span onClick={() => handleQuantity(currentItem.id, (quantity[currentItem.id] || 0) + 1)}>+</span>
				</div>,
				total: (
					<div>
						${(currentItem.price * currentItem.quantity).toFixed(2)}
					</div>
				),
				Remove: <div onClick={() => deleteCart(currentItem.id)}> <img className="deleteicon" src={del} width={35} height={35} ></img></div>
			};
		});
		setCustomizedCart(data);
	}

	return (
		<CartContainer>
			<HomePage>
				Cart..
			</HomePage>
			{customizedCart.length > 0 ? <CustomizedTable dataBody={customizedCart} dataHeader={customizedCart[0]} handleHeaderClick={[]} />
				:
				<div><h2>Your shopping cart is empty.</h2></div>
			}
		</CartContainer>
	);

}

export default Cart