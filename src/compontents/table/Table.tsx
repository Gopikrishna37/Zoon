import { Table } from "./Table.styles.tsx";
import { TableHeader } from "./TableHeader.tsx";
import { TableBody } from "./TableBody.tsx";
import { UserModel } from "../../pages/users/Userslist.tsx";

import React from "react";
import { ProductModel } from "../../pages/products/Products.tsx";
import { CartModel } from "../../pages/cart/Cart.tsx";

interface CustomizedTableProps{
	dataBody: UserModel[] | CartModel[];
	dataHeader: any;
	handleHeaderClick: any;
}

export const CustomizedTable : React.FC<CustomizedTableProps> = ({ dataBody, dataHeader, handleHeaderClick }) => {

	return (
		<Table>
			<table>
				<TableHeader data={dataHeader} sort={handleHeaderClick} />
				{(dataBody && dataBody.length > 0) ? <TableBody data={dataBody} /> : <tbody><tr><td>No records found</td></tr></tbody>}
			</table>
		</Table>
	);
};

