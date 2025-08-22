import React, { useContext, useEffect, useState } from "react";
import { HomePage } from "../../compontents/Styles.tsx";
import { ChartContatiner } from "./Home.styles.tsx";
import { BarChart, Bar, PieChart, Pie, XAxis, YAxis, Tooltip, Cell, Legend } from 'recharts';
import StoreContext from "../../context/globalstorage.tsx";

function Home() {
	const { productData } = useContext(StoreContext);
	const [barData, setBarData] = useState([]);
	const barColors = ["#1f77b4", "#ff7f0e", "#2ca02c"]

	useEffect(() => {
		const categoryCount = productData.reduce((acc, item) => {
			const category = item.category || "";
			acc[category] = (acc[category] || 0) + 1;
			return acc;
		}, {});
		console.log(categoryCount);

		const data = Object.keys(categoryCount).map(category => ({
			category,
			count: categoryCount[category],
		}));
		setBarData(data);
	}, [productData]);

	return (
		<HomePage>
			Dashboard
			<ChartContatiner >
				<div>
					<BarChart width={400} height={300} data={barData}>
						<XAxis dataKey="category" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="count" fill="#8884d8">
							{
								barData.map((entry, index) => (
									<Cell key={`cell-${index}`} fill={barColors[index % 20]} />
								))
							}
						</Bar>
					</BarChart>
				</div>
				&nbsp;
				&nbsp;
				<div>
					<PieChart width={400} height={300} >
						<Pie dataKey="count" fill="silver" nameKey="name" innerRadius={60} data={barData} label >
							{
								barData.map((entry, index) => (
									<Cell key={`cell-${index}`} fill={barColors[index % 20]} />
								))
							}
						</Pie>
					</PieChart>
				</div>
			</ChartContatiner>
		</HomePage>
	);
}

export default Home;
