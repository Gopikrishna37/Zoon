import React from 'react';

import { Form } from "../form/Form.tsx";
import { FilterBox } from "./Filter.styles.tsx";

interface FilterModel{
	filterFields: any;
}

const Filter:React.FC<FilterModel> = ({ filterFields }) => {

	return (
		<FilterBox>
			<Form formFields={filterFields} />
		</FilterBox>
	)
}

export default Filter;