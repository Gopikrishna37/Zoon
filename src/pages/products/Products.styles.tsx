import styled from "styled-components"

interface ProductContainerProps {
	theme: {
		productbox: string;
	};
}

export const ProductCointainer = styled.div<ProductContainerProps>`
    display: flex;
    flex-wrap: wrap;
	margin: 1%;
	font-size: medium;

	.product{
		display: block;
		position: relative;
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
		transition: 0.3s;
		width: 20%;
		height: 20%;
		text-align: center;
		padding: 1%;
		margin: 1%;
		background-color: ${(props) => props.theme.productbox};
	}

	.card:hover {
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}

	.cart{
		right: 0;
		bottom: 0;
		display: block;
		position: absolute;
		padding: 5%;
		cursor: pointer;
	}

	@media screen and (max-width: 900px) {
        display: flex;
		flex-wrap: wrap;
		justify-content: center;
		.product{
			box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
			transition: 0.3s;
			width: 35%;
			height: 90%;
			text-align: center;
			padding: 1%;
			margin: 1%;
			background-color: ${(props) => props.theme.productbox};
		}
    }

	@media screen and (max-width: 600px) {
        display: grid;
		justify-content: center;

		.product{
			justify-items: center;
			width: 200px;
			height: 90%;
			text-align: center;
			align-items: center;
			padding: 1%;
			margin: 5%;
		}
    }
`;
