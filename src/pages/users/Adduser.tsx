import { Form } from "../../compontents/form/Form.tsx";
import { AddUserDiv } from "./Adduser.styles.tsx";
import React, { useContext, useState } from "react";
import StoreContext from "../../context/globalstorage.tsx";
import { CompanyHeading } from "../../compontents/layout/Header.styles.tsx";
import { CloseIcon } from "../../compontents/globalcomponents/elements.tsx";
import {UserModel} from "./Userslist.tsx";

interface ErrorModel{
	firstName: string | null;
	email: string | null;
}

export const AddUser = () => {
	const { addUserVisibilityFunction, store, addUserData } = useContext(StoreContext);

	const initialValues : UserModel = {
		id: null,
		firstName: null,
		lastName: null,
		age: null,
		email: null,
		phone: null
	};

	const errors : ErrorModel = {
		firstName: null,
		email: null,
	};

	const [values, setValues] = useState(initialValues);
	const [error, setError] = useState(errors);

	const onSubmit = (values : UserModel) => {
		values.id = store.length + 1;
		addUserData(values);
		addUserVisibilityFunction(false);
	};

	const validateField = (fieldName, value) => {
		if (!value || value.trim() === '') {
			return 'Field is required';
		}
		if (fieldName === 'email' && !value.includes('@')) {
			return 'Enter a valid email address';
		}
		return null;
	};

	const handleSubmit = (values) => {
		const firstNameError = validateField('firstName', values.firstName);
		const emailError = validateField('email', values.email);

		setError({
			firstName: firstNameError,
			email: emailError,
		});

		// Check for any validation errors
		if (firstNameError || emailError) {
			// You can handle the validation errors here or show messages to the user
			return;
		}

		// Validation passed, submit the form
		onSubmit(values);
	};


	const handleChange = (field, value) => {
		setValues((prevValues) => ({
			...prevValues,
			[field]: value,
		}));
	};

	const formFields = [
		{ elementType: 'text', required: true, label: 'FirstName', placeholder: 'Enter your firstname', value: values.firstName, error: error.firstName, change: (e) => handleChange('firstName', e.target.value) },
		{ elementType: 'text', required: false, label: 'LastName', placeholder: 'Enter your lastname', value: values.lastName, change: (e) => handleChange('lastName', e.target.value) },
		{ elementType: 'text', required: false, label: 'Age', placeholder: 'Enter your age', value: values.age, change: (e) => handleChange('age', e.target.value) },
		{ elementType: 'text', required: true, label: 'Email', placeholder: 'Enter your email', value: values.email, error: error.email, change: (e) => handleChange('email', e.target.value) },
		{ elementType: 'text', required: false, label: 'Phone', placeholder: 'Enter your phonenumber', value: values.phone, change: (e) => handleChange('phoneNumber', e.target.value) },
		{ elementType: 'button', type: 'submit', label: 'Add Now', click: () => handleSubmit(values) },
	];

	const formName = () => {

		return (
			<CompanyHeading>Add User:</CompanyHeading>
		);
	}



	return (
		<AddUserDiv>
			<div className="reveal-modal">
				{formName()} <CloseIcon onClick={addUserVisibilityFunction}>X</CloseIcon>
				<Form formFields={formFields} />
			</div>
		</AddUserDiv>
	);
}