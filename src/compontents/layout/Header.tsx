import React, { useContext, useState } from 'react';
import { HeaderWrapper, CompanyHeading, MenuWrapper, MenuLink, MenuIcon, DarkThemeButton, MenuLinkCart, MenuLinkName } from './Header.styles.tsx';
import StoreContext from '../../context/globalstorage.tsx';
import moon from "../../images/moon.svg";
import sun from "../../images/sun.svg";
import cartIcon from "../../images/cart.svg";
import menu from "../../images/menu.svg";
import logoutIcon from "../../images/logout.svg";
import menuwhite from "../../images/menuwhite.svg";
import { NavLink, useNavigate } from 'react-router-dom';
// const moon = require("../../images/moon.svg") as string;
// const sun = require("../../images/sun.svg") as string;
// const cart = require("../../images/cart.svg") as string;
// const menu = require("../../images/menu.svg") as string;
// const menuwhite = require("../../images/menuwhite.svg") as string;

interface HeaderProps {
	showMenu?: boolean;
  }

// Main component
const Header: React.FC<HeaderProps> = () => {
	const { handleDarkTheme, theme, cart, updateCurrentUser, currentUser } = useContext(StoreContext);
	const [localShowMenu, setLocalShowMenu] = useState(false);
	const navigate = useNavigate();

	const toggleMenu = () => {
		setLocalShowMenu(!localShowMenu);
	};

		const logout = () =>{
		updateCurrentUser(false, null);
		navigate("/");
	}

	return (
		<HeaderWrapper>
			<CompanyHeading>ZOON</CompanyHeading>
			<MenuWrapper showMenu={localShowMenu}>
				<NavLink to="/home"><MenuLink onClick={toggleMenu}> Home</MenuLink></NavLink>
				<NavLink to="/products"><MenuLink onClick={toggleMenu}> Products</MenuLink></NavLink>
				<NavLink to="/userslist"><MenuLink onClick={toggleMenu}> Users</MenuLink></NavLink>
				<NavLink to="/cart" data-testid={"cart"}> <MenuLinkCart><div className='cartnotify'> <img src={cartIcon} alt="cart" width="30px" height="30px" /> {cart.length>0 && <div className='numofitems'>  {cart.length} </div> }</div></MenuLinkCart>
					<MenuLinkName onClick={toggleMenu}> Cart </MenuLinkName>
				</NavLink>
			</MenuWrapper>
			<DarkThemeButton onClick={handleDarkTheme} data-testid={"darkicon"}>
				{theme ? <img src={sun} alt='sun' /> : <img src={moon} alt='moon' width="30px" height="30px" />}
			</DarkThemeButton>
						<DarkThemeButton onClick={logout}><img src={logoutIcon} width="25px" height="25px" alt="logout" /></DarkThemeButton>
			<MenuIcon onClick={toggleMenu} data-testid={"menuicon"}><img src={theme ? menuwhite : menu} alt='menu' /></MenuIcon>
		</HeaderWrapper>
	);
};

export default Header;
