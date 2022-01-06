/** @format */

import React from "react";

interface Props {
	bill: number | undefined;
	tip: number | undefined;
	children: (bill: any, tip: any) => JSX.Element | null;
}

const totalField: React.FC<Props> = ({ children, bill, tip }) => {
	return <div>{children(bill, tip)}</div>;
};

export default totalField;
