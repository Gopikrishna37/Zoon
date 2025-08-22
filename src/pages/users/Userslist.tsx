import React, { useEffect, useState, useContext } from "react";

import userdetails from "../../data/userdetails.json";

import { ActivityBar } from "../../compontents/activitybar/Activitybar.tsx";
import { CustomizedTable } from "../../compontents/table/Table.tsx";
import { CustomPagination } from "../../compontents/pagination/Pagination.tsx";
import StoreContext from "../../context/globalstorage.tsx";
import { AddUser } from "./Adduser.tsx";
import Filter from "../../compontents/filter/Filter.tsx";
import { UsersListBox } from "./Userslist.styles.tsx";
import { CloseIcon } from "../../compontents/globalcomponents/elements.tsx";

export interface UserModel {
	id: number | null;
	firstName: string | null;
	lastName: string | null;
	age: number | null;
	email: string | null;
	phone: string | null;
	password?: string | null | undefined;
	role?: string | null;
}

interface FilterModel{
	firstName: string;
	age: number;
	email: string;
}

export interface PaginationModel{
		count: number;
		startRecord: number | undefined;
		endRecord: number | undefined;
		totalCount: number;
		handlePageChange: any;
		currentPage: number;
		setCurrentPage: (value: number) => void;
}



const UsersList = () => {
	const [tableData, setTableData] = useState<UserModel[]>(userdetails.users);
	const [currentData, setCurrentData] = useState<UserModel[]>(tableData);
	const [sortOrder, setSortOrder] = useState<string>('asc');
	const [selectedHeader, setSelectedHeader] = useState<string>('');
	const { addUserVisibility, addUserData , store, addUserVisibilityFunction } = useContext(StoreContext);
	const [filter, setFilter] = useState<boolean>(false);
	const [currentPage, setCurrentPage] = useState<number>(0);
	const itemsPerPage : number = 10;
	const [startIndex, setStartIndex] = useState<number>();
	const [endIndex, setEndIndex] = useState<number>();
	const count : number = Math.ceil(tableData.length / itemsPerPage);


	useEffect(() => {
		if (store.length === 0) {
			addUserData(tableData);
		}
	}, [])

	useEffect(() => {
		if (store.length != 0) {
			setTableData(store);
		}
	}, [store])

	const handleFilter = () => {
		setFilter((filter) => !filter);
	};

	const handleHeaderClick = (header) => {
		setSortOrder((prevSortOrder) =>
			header === selectedHeader && prevSortOrder === 'asc' ? 'desc' : 'asc'
		);
		setSelectedHeader(header);

		const sortedData = [...tableData].sort((a, b) => {
			const valueA = String(a[header]);
			const valueB = String(b[header]);

			return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
		});

		setTableData(sortedData);
	};

	const initialValues = {
		firstName: null as string | null,
		age: null as number | null,
		email: null as string | null,
	};

	const [values, setValues] = useState(initialValues);

	const handleChange = (field, value) => {
		setValues((prevValues) => ({
			...prevValues,
			[field]: value,
		}));
	};

	// useEffect(() => {

	// }, [store,tableData])


	const onSubmit = (values) => {
		let userData = store?.filter(user => {
			const typedUser = user as UserModel; // Type assertion here
			const firstNameMatch = !values?.firstName || (typedUser?.firstName?.toLowerCase() === values?.firstName?.toLowerCase());

			const emailMatch = !values.email || typedUser?.email === values.email;

			const ageMatch = !values.age || typedUser.age == values.age;

			setCurrentPage(0);
			return firstNameMatch && emailMatch && ageMatch;
		}
		);
		setTableData(userData);
	};

	const reset = () => {
		setTableData(store);
		setValues(initialValues);
		setFilter(false);
	};

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	const pagination: PaginationModel={
		count: count,
		startRecord: (startIndex || 0) + 1,
		endRecord: endIndex,
		totalCount: tableData.length,
		handlePageChange: handlePageChange,
		currentPage: currentPage,
		setCurrentPage: setCurrentPage,
	};

	useEffect(() => {
		setStartIndex((currentPage) * itemsPerPage);
		setEndIndex((currentPage * itemsPerPage) + itemsPerPage);
		// Get the subset of data for the current page
		const pageData = tableData.slice(startIndex, endIndex);
		setCurrentData(pageData);
	}, [currentPage, tableData, startIndex, endIndex])


	// const ResetFilter =()=>{
	//     return(
	//         (values.firstName || values.age || values.email ) &&  <Button onClick={reset}>Reset</Button>
	//     );
	// };


	const filterFields = [
		{ elementType: 'text', label: 'FirstName', placeholder: 'Eg. Tony', value: values.firstName, change: (e) => handleChange('firstName', e.target.value) },
		{ elementType: 'text', label: 'Age', placeholder: 'Eg. 22', value: values.age, change: (e) => handleChange('age', e.target.value) },
		{ elementType: 'text', label: 'Email', placeholder: 'Eg. tonystark@gmail.com', value: values.email, change: (e) => handleChange('email', e.target.value) },
		{ elementType: 'button', label: 'Reset', click: () => reset() },
		{ elementType: 'button', label: 'Search', click: () => onSubmit(values) },
	];

	const activityBarModel ={
		handleFilter: handleFilter,
		buttonName: "Add User",
		buttonOnclick: addUserVisibilityFunction,
	}


	return (
		<UsersListBox>
			{addUserVisibility && (
				<AddUser />
			)}
			<div className="item1"><ActivityBar activityBarModel={activityBarModel} /></div>
			<div className="item2">
				<div className="middlecontainer">
					{filter && (
						<div className="filter" >  <Filter filterFields={filterFields} /></div>
					)}
					<div className="userlist-tb">
						<CustomizedTable dataBody={currentData} dataHeader={userdetails.users[0]} handleHeaderClick={handleHeaderClick} />
					</div>
				</div>
			</div>
			<div className="item3"><CustomPagination pagination={pagination} /></div>
			{filter && (<div className="mobilefilter">  <Filter filterFields={filterFields} /> <CloseIcon onClick={handleFilter}>X</CloseIcon> </div>)}
		</UsersListBox>
	);
}

export default UsersList