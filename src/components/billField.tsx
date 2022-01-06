/** @format */

import React from "react";

interface Props {
	handleBill: (bill: string) => void;
}

const Bill: React.FC<Props> = ({ handleBill }) => {
	return (
		<div className="form_control">
			<label>Bill(in $) </label>
			<input
				type="number"
				id="bill_value"
				placeholder="100"
				onChange={(e) => handleBill(e.target.value)}
			/>
		</div>
	);
};
export default Bill;
