import React from "react";
import { UserModel } from "../../pages/users/Userslist";
import { ProductModel } from "../../pages/products/Products";
import { CartModel } from "../../pages/cart/Cart";
// export interface TableBodyModel{
// 	id: number;
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// 	email: string;
// 	phone: string;
// }

interface TableBodyProps {
	data: UserModel[] | CartModel[];
  }

export const TableBody : React.FC<TableBodyProps> = ({ data }) => {
	return (
		<tbody>
			{data.map((item) => (
				<tr key={item.id}>
					{Object.entries(item).map(([key, value]) => key !== "id" && <td key={key}>{value}</td>)}
				</tr>
			))}
		</tbody>
	);
}