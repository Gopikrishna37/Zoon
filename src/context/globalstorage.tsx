import React, { createContext, useState, ReactNode } from 'react';
import { UserModel } from '../pages/users/Userslist';
import { ProductModel } from '../pages/products/Products';
import { CartModel } from '../pages/cart/Cart';
import { darkTheme } from '../compontents/Styles';

interface StoreContextProps {
	children: ReactNode;
}

interface CurrentUser {
	active: boolean;
	role: string;
}
// interface AddNewData{
// 	addUser: boolean;
// 	addProduct: boolean;
// }

const StoreContext = createContext<TodoContextType>({
	store: [],
	addUserData: () => { },
	productData: [],
	addNewProduct: () => { },
	theme: false,
	handleDarkTheme: () => { },
	addUserVisibility: false,
	addUserVisibilityFunction: () => { },
	addProductVisibility: false,
	addProductVisibilityFunction: () => { },
	cart: [],
	handleCart: () => { },
	deleteCart: () => { },
	currentUser: {active: false,role: ""},
	updateCurrentUser: () => {}

});

interface TodoContextType {
	store: UserModel[];
	addUserData: any;
	theme: boolean;
	handleDarkTheme: any;
	addUserVisibility: boolean;
	addUserVisibilityFunction: any;
	addProductVisibility: boolean;
	addProductVisibilityFunction: any;
	productData: ProductModel[];
	addNewProduct: any;
	cart: CartModel[];
	handleCart: (newData : string) => void;
	deleteCart: any;
	currentUser: CurrentUser;
	updateCurrentUser: any;
}

export function StoreContextProvider(props: StoreContextProps) {
	const [userData, setUserData] = useState<UserModel[]>([]);
	const [isAddUserModalOpen, setAddUserModalOpen] = useState<boolean>(false);
	const [isAddProductModalOpen, setAddProductModalOpen] = useState<boolean>(false);
	const [productData, setProductData] = useState<ProductModel[]>([]);
	const [cartData, setCartData] = useState<CartModel[]>([]);
	const [currentUser, setCurrentUser] = useState<CurrentUser>({
	active: false,
	role: ""
});

	const openAddUserModal = () => {
		setAddUserModalOpen(isAddUserModalOpen => !isAddUserModalOpen);
	};

	const openAddProductModal = () => {
		setAddProductModalOpen(isAddProductModalOpen => !isAddProductModalOpen);
	};

	function addUserDataHandler(adduser) {
		setUserData((prevUserFavorites) => {
			return prevUserFavorites.concat(adduser);
		});
	}

	const [isDarkTheme, setDarkTheme] = useState<boolean>(false);

	const handleDarkThemeToggle = () => {
		setDarkTheme((prevTheme) => !prevTheme);
	};

	const addNewProductHandler = (newData) => {
		console.log("global", newData);
		setProductData((prevUserFavorites) => {
			return prevUserFavorites.concat(newData);
		});
	}

	const cart = (newData) => {
		setCartData(preData => {
			return preData.concat(newData);
		});
	}

	const removeCartItem = (id) => {
		setCartData((current) =>
			current.filter((data) => data.id !== id)
		);
	};

	const updateCurrentUser =(active: boolean, role : string ) =>{
		setCurrentUser((data) => ({
			...data	, active: active,role: role,
		}));
	};

	const context: TodoContextType = {
		store: userData,
		addUserData: addUserDataHandler,
		theme: isDarkTheme,
		handleDarkTheme: handleDarkThemeToggle,
		addUserVisibility: isAddUserModalOpen,
		addUserVisibilityFunction: openAddUserModal,
		addProductVisibility: isAddProductModalOpen,
		addProductVisibilityFunction: openAddProductModal,
		productData: productData,
		addNewProduct: addNewProductHandler,
		cart: cartData,
		handleCart: cart,
		deleteCart: removeCartItem,
		currentUser: currentUser,
		updateCurrentUser: updateCurrentUser
	};


	return (
		<StoreContext.Provider value={context}>
			{props.children}
		</StoreContext.Provider>);
}

export default StoreContext;