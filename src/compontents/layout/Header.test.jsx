
import React from 'react';
import { describe, it, expect } from '@jest/globals';
import { render, screen, fireEvent, } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';


describe('Header Component', () => {
	it('renders without crashing', () => {
		render(
			<Router>
				<Header />
			</Router>
		);

		// Check if the company heading is rendered
		expect(screen.getByText('ZOON')).toBeInTheDocument();
	});

	it('toggles menu when MenuIcon is clicked', () => {
		render(
			<Router>
				<Header />
			</Router>
		);


		// Click on the MenuIcon to open the menu
		fireEvent.click(screen.getByAltText('menu'));

		// Check if the menu is now open
		expect(screen.getByText('Home')).toBeInTheDocument();
		expect(screen.getByText('Products')).toBeInTheDocument();
		expect(screen.getByText('Users')).toBeInTheDocument();
		expect(screen.getByTestId('cart')).toBeInTheDocument();
		expect(screen.getByTestId('menuicon')).toBeInTheDocument();
		expect(screen.getByTestId('darkicon')).toBeInTheDocument();
		fireEvent.click(screen.getByTestId('cart'));
		expect(screen.getByText('Cart')).toBeInTheDocument();

		// Click on the MenuIcon again to close the menu
		fireEvent.click(screen.getByAltText('menu'));

	});

	// Add more test cases as needed for other functionalities
});
