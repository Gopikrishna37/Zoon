import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import Footer from "./compontents/layout/Footer.tsx";
import Header from "./compontents/layout/Header.tsx";
import Home from "./pages/home/Home.tsx";
import Products from "./pages/products/Products.tsx";
import Cart from "./pages/cart/Cart.tsx";
import UsersList from "./pages/users/Userslist.tsx";

import { GlobalStyle, darkTheme, lightTheme } from "./compontents/Styles.tsx";
import StoreContext from "./context/globalstorage.tsx";
import { AddUser } from "./pages/users/Adduser.tsx";
import Login from "./auth/loginpage.tsx";

function Layout() : React.ReactNode {

	const { theme, currentUser } = useContext(StoreContext);

	return (
		<div>
			<ThemeProvider theme={theme ? darkTheme : lightTheme}>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<Login />}></Route>
				</Routes>
				{currentUser.active && <Header />}
				<Routes>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/products" element={<Products />}></Route>
					<Route path="/cart" element={<Cart />}></Route>
					<Route path="/userslist" element={<UsersList />}></Route>
					<Route path="/adduser" element={<AddUser />}></Route>
				</Routes>
				{currentUser.active && <Footer />}
			</ThemeProvider>

		</div>
	);
}

export default Layout