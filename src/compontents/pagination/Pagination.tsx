import React from "react";
import { Pagination } from "./Pagination.styles.tsx";
import { PaginationModel } from "../../pages/users/Userslist.tsx";

export interface PaginationProps {
	pagination: PaginationModel;
}

export const CustomPagination: React.FC<PaginationProps> = ({ pagination }) => {

	return (
		<Pagination>
			<div>{pagination.startRecord} - {pagination.endRecord} of {pagination.totalCount} items</div>
			<div className="pagination">
				<div className="a" onClick={(e) => pagination.currentPage > 0 ? pagination.handlePageChange(pagination.currentPage - 1) : (e)}>&laquo;</div>
				{[...Array(pagination.count)].map((_, index) => (
					<div key={index} className={index === pagination.currentPage ? 'a active' : 'a'} onClick={() => { pagination.handlePageChange(index); pagination.setCurrentPage(index) }}>
						{index + 1}
					</div>
				))}
				<div className="a" onClick={(e) => pagination.currentPage < pagination.count - 1 ? pagination.handlePageChange(pagination.currentPage + 1) : (e)}>&raquo;</div>
			</div>
		</Pagination>
	);
}