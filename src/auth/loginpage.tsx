import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { MainContainer, TitleContainer,Container,FormWrapper,Title } from "./loginpage.styles.tsx";
import { Form } from "../compontents/form/Form.tsx";
import StoreContext from "../context/globalstorage.tsx";
import { UserModel } from "../pages/users/Userslist.tsx";
import userdetails from "../data/userdetails.json";

interface ErrorLoginModel{
	email: string | null;
	password: string | null;
}

interface LoginModel{
	email: string | null;
	password: string | null;
}

const Login = () => {
	const {updateCurrentUser, store, addUserData, productData, addNewProduct} = useContext(StoreContext)

	const navigate = useNavigate();

	useEffect(() => {
		if (store.length === 0) {
			addUserData(userdetails.users);
		}
	}, [])

	useEffect(() => {
		if (productData.length === 0) {
			fetch('https://api.slingacademy.com/v1/sample-data/products?offset=5&limit=20')
				.then(res => res.json())
				.then(data => addNewProduct(data.products))
		}
	}, [])

	const onButtonClick = () => {
		// You'll update this function later...
	}

	const initialValues : LoginModel = {
		email: "john.doe@example.com",
		password: "test"
	};

	const errors : LoginModel = {
		email: null,
		password: null,
	};

	const [values, setValues] = useState(initialValues);
	const [error, setError] = useState(errors);

	const onSubmit = (values : LoginModel) => {
		let userData : UserModel | undefined = store?.find(user => user.email == values.email);
		if(userData?.password == values.password){
			updateCurrentUser(true, userData?.role);
			navigate("/home");
		}
		else{

			updateCurrentUser(false, null);
		}
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
		const passwordError = validateField('password', values.password);
		const emailError = validateField('email', values.email);

		setError({
			email: emailError,
			password: passwordError,
		});

		// Check for any validation errors
		if (passwordError || emailError) {
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
		{ elementType: 'text', required: true, label: 'Email', placeholder: 'Enter your email', value: values.email, error: error.email, change: (e) => handleChange('email', e.target.value) },
		{ elementType: 'text', required: true, label: 'Password', placeholder: 'Enter your Password', value: values.password, error: error.password, change: (e) => handleChange('password', e.target.value) },
		{ elementType: 'button', type: 'submit', label: 'Login In', click: () => handleSubmit(values) },
	];

	return (
		<>
			{/* <MainContainer>
				<TitleContainer>
					<div>Login</div>
				</TitleContainer>
				<br />
				<Form formFields={formFields}/>
			</MainContainer> */}
			 <Container>
      <FormWrapper>
        <Title>Login</Title>
       				<Form formFields={formFields}/>
      </FormWrapper>
    </Container>

		</>
	)
}

export default Login