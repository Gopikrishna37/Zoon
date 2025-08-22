
import React from 'react';
import { describe, it, expect } from '@jest/globals';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import UsersList from './Userslist.tsx';


describe('UserListing Page', () => {
	it('renders without crashing', async () => {
		await act(async () => {
			render(
				<Router>
					<UsersList />
				</Router>
			);
		});
	});

	it('rendering table', () => {
		const mockdata = { users: [{ id: 8, firstName: 'Olivia', lastName: 'Wilson', age: 22, email: 'olivia.wilson@example.com', phone: "2134132" }] };

		render(
			<UsersList userdetails={mockdata} />
		);

		expect(screen.getByText('firstName')).toBeInTheDocument();
		expect(screen.getByText('Olivia')).toBeInTheDocument();
	})

	it('Checking wheather Activity bar is rendered', () => {

		render(
			<UsersList />
		);
		expect(screen.getByText('X')).toBeInTheDocument();
		fireEvent.click(screen.getByText('X'));
		expect(screen.getByText('Add User')).toBeInTheDocument();
		expect(screen.getByAltText('filtericon')).toBeInTheDocument();
	})

	it('sorting in table', () => {

		render(
			<UsersList />
		);

		const sort = screen.getByText('firstName');
		expect(sort).toBeInTheDocument();
		fireEvent.click(sort);
	})

	it('entering new user', async () => {

		render(
			<UsersList />
		);

		const firstName = screen.getByPlaceholderText('Enter your firstname');
		const lastName = screen.getByPlaceholderText('Enter your lastname');
		const email = screen.getByPlaceholderText("Enter your email");
		const phoneNumber = screen.getByPlaceholderText("Enter your phonenumber");
		const age = screen.getByPlaceholderText("Enter your age");

		await act(async () => {
			fireEvent.change(email, { target: { value: 'test@example.com' } });
			fireEvent.change(phoneNumber, { target: { value: "1234567890" } });
			fireEvent.change(firstName, { target: { value: 'Test' } });
			fireEvent.change(lastName, { target: { value: 'Test' } });
			fireEvent.change(age, { target: { value: '22' } });
		});

		const addnow = screen.getByText('Add Now');

		await act(async () => {
			fireEvent.click(addnow);
		});

	})

	it('checking filter is rendering', async () => {
		await act(async () => {
			render(
				<UsersList />
			);
		});

		expect(screen.getByAltText('filtericon')).toBeInTheDocument();

		fireEvent.click(screen.getByAltText('filtericon'));
		const Name = screen.getAllByText('FirstName');
		expect(Name[0]).toBeInTheDocument();
		expect(screen.getAllByText('Age')[0]).toBeInTheDocument();
		expect(screen.getAllByText('Email')[0]).toBeInTheDocument();
		expect(screen.getAllByText('Reset')[0]).toBeInTheDocument();
		const button = screen.getAllByText('Search')[0];
		expect(button).toBeInTheDocument();

		const firstName = screen.getAllByPlaceholderText('Eg. Tony')[0];

		await act(async () => {
			fireEvent.change(firstName, { target: { value: 'john' } });
			fireEvent.click(button);
		});

	});

});