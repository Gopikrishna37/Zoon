import React from "react";
import DynamicForm from "./DynamicForm.tsx"

interface FilterModel{
	formFields: any;
}

export const Form : React.FC<FilterModel> = ({ formFields }) => {

	// const formFields = [
	//     { type: 'text', label: 'Name', placeholder: 'Enter your name' },
	//     {
	//       type: 'dropdown',
	//       label: 'Select Country',
	//       options: [
	//         { value: 'us', label: 'United States' },
	//         { value: 'ca', label: 'Canada' },
	//         { value: 'uk', label: 'United Kingdom' },
	//       ],
	//     },
	//     {
	//       type: 'radio',
	//       label: 'Gender',
	//       name: 'gender',
	//       options: [
	//         { value: 'male', label: 'Male' },
	//         { value: 'female', label: 'Female' },
	//         { value: 'other', label: 'Other' },
	//       ],
	//     },
	// ];

	return (
		<DynamicForm formFields={formFields} />
	);
}