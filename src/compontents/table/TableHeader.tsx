import React from "react";
import sorting from "../../images/sort.svg";

interface TableHeaderModel{
	data: any;
	sort: any;
}

export const TableHeader : React.FC<TableHeaderModel> = ({ data, sort }) => {
	return (
		<thead>
			<tr>
				{Object.keys(data).map((header) => (header != "id" && (
					<th key={header} onClick={() => { sort(header) }}>{header}<img src={sorting} alt='moon' width="10px" height="10px" /></th>
				)))}
			</tr>
		</thead>
	);
}