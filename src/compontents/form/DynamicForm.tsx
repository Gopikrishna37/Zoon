import React from "react";
import { FormControl, Label, Input, Select, RadioGroup, RadioButton, FormContainer } from "./Form.styles.tsx";
import { Button } from '../activitybar/Activitybar.styles.tsx';

interface FilterModel {
	formFields: any;
}

const DynamicForm: React.FC<FilterModel> = ({ formFields }) => {
	const renderFormFields = () => {
		return formFields.map((field, index) => {
			switch (field.elementType) {
			case 'text':
				return (
					<FormControl key={index}>
						<Label>{field.label}  {field.required && <div className='required'>*</div>}</Label>
						<Input type="text" placeholder={field.placeholder} value={field?.value} onChange={(e) => field.change(e)} />
						{field?.error && <div className='required error-msg'>{field.error}</div>}
					</FormControl>
				);

			case 'dropdown':
				return (
					<FormControl key={index}>
						<Label>{field.label}</Label>
						<Select>
							{field.options.map((option, optionIndex) => (
								<option key={optionIndex} value={option.value}>
									{option.label}
								</option>
							))}
						</Select>
					</FormControl>
				);

			case 'radio':
				return (
					<FormControl key={index}>
						<Label>{field.label}</Label>
						<RadioGroup>
							{field.options.map((option, optionIndex) => (
								<RadioButton key={optionIndex}>
									<input type="{val.type}" name={field.name} value={option.value} />
									{option.label}
								</RadioButton>
							))}
						</RadioGroup>
					</FormControl>
				);

			case 'upload':
				return (
					<FormControl key={index}>
						<Label>{field.label}  {field.required && <div className='required'>*</div>}</Label>
						<Input type="file" placeholder={field.placeholder} onChange={(e) => field.change(e)} />
						{field?.error && <div className='required error-msg'>{field.error}</div>}
					</FormControl>
				);

			case 'button':
				return (
					<FormControl key={index}>
						<div className="formbutton">
							<Button onClick={() => { field.click(field.value) }}>
								{field.label}
							</Button>
						</div>
						{/* <input type="submit" value="Submit" onClick={() => { field.click(field.value) }} /> */}
					</FormControl>
				);

			default:
				return null;
			}
		});
	};

	return (
		<FormContainer >
			{renderFormFields()}
		</FormContainer>
	);
};

export default DynamicForm;