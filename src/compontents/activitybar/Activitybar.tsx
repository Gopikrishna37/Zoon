import React from 'react';
import { Button, FilterIcon, TopBar } from "./Activitybar.styles.tsx";
import filter from "../../images/filter.svg";

interface ActivityModel{
	activityBarModel:{
		handleFilter: any;
		buttonName: string;
		buttonOnclick: any;
	};
}

export const ActivityBar : React.FC<ActivityModel>  = ({activityBarModel}) => {
	//const navigate = useNavigate();

	return (
		<TopBar>
			<div className="filter-items">
				<FilterIcon onClick={activityBarModel.handleFilter} data-testid={"filter"}>
					<img src={filter} width="30px" height="30px" alt="filtericon" />
				</FilterIcon>
			</div>
			<Button onClick={() => { activityBarModel.buttonOnclick()}}>{activityBarModel.buttonName}</Button>
		</TopBar>
	);
}