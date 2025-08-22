import React, { ReactElement } from "react";
import { FooterStyle } from "./Footer.styles.tsx";

function Footer(): React.ReactNode {  // ReactElement<{}>
	return (
		<FooterStyle>
			<p>@Project - 2024</p>
		</FooterStyle>
	);
}

export default Footer

