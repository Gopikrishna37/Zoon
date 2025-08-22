import { Form } from "../../compontents/form/Form.tsx";
import { AddProductContainter } from "./Addproduct.styles.tsx";
import React, { useContext, useState } from "react";
import StoreContext from "../../context/globalstorage.tsx";
import { CompanyHeading } from "../../compontents/layout/Header.styles.tsx";
import { CloseIcon } from "../../compontents/globalcomponents/elements.tsx";
import { ProductModel } from "./Products.tsx";

interface ErrorModel {
	name: string | null;
	category: string | null;
	price: string | null;
}

export const AddProduct = () => {
	const { addProductVisibilityFunction, productData, addNewProduct } = useContext(StoreContext);

	const initialValues: ProductModel = {
		id: null,
		name: null,
		photo_url: null,
		category: null,
		price: null
	};

	const errors: ErrorModel = {
		name: null,
		category: null,
		price: null
	};

	const [values, setValues] = useState<ProductModel>(initialValues);
	const [error, setError] = useState<ErrorModel>(errors);

	const onSubmit = (values: ProductModel) => {
		values.id = productData.length + 1;
		addNewProduct(values);
		addProductVisibilityFunction(false);
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
		const nameError = validateField('name', values.name);
		const categoryError = validateField('category', values.category);
		const priceError = validateField('price', values.price);

		setError({
			name: nameError,
			category: categoryError,
			price: priceError
		});

		// Check for any validation errors
		if (nameError || categoryError || priceError) {
			// You can handle the validation errors here or show messages to the user
			return;
		}

		// Validation passed, submit the form
		onSubmit(values);
	};

	const handleChange = (field, value) => {
		if (field === 'photo_url' && value) {
			//const blob = new Blob([value[0]], { type: 'image/jpeg' });
			const imageUrl = URL.createObjectURL(value[0]);

			// Update state to store the image URL for preview
			setValues((prevValues) => ({
				...prevValues,
				photo_url: imageUrl,
			}));

			// Optionally, you can log the image URL
			console.log(imageUrl);
		} else {
			// For other fields or non-image values
			setValues((prevValues) => ({
				...prevValues,
				[field]: value,
			}));
		}
	};


	const formFields = [
		{ elementType: 'text', required: true, label: 'Product Name', placeholder: 'Enter your proudct name', value: values.name, error: error.name, change: (e) => handleChange('name', e.target.value) },
		{ elementType: 'upload', required: false, label: 'Upload Image', placeholder: 'upload here', value: values.photo_url, change: (e) => handleChange('photo_url', e.target.files) },
		{ elementType: 'text', required: true, label: 'Category', placeholder: 'Enter your category', value: values.category, error: error.name, change: (e) => handleChange('category', e.target.value) },
		{ elementType: 'text', required: true, label: 'Price', placeholder: 'Enter your price', value: values.price, error: error.price, change: (e) => handleChange('price', e.target.value) },
		{ elementType: 'button', type: 'submit', label: 'Add Now', click: () => handleSubmit(values) },
	];

	const formName = () => {

		return (
			<CompanyHeading>Add Product:</CompanyHeading>
		);
	}



	return (
		<AddProductContainter>
			<div className="reveal-modal">
				{formName()} <CloseIcon onClick={addProductVisibilityFunction}>X</CloseIcon>
				<Form formFields={formFields} />
			</div>
		</AddProductContainter>
	);
}