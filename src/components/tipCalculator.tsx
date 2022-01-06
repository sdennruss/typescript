/** @format */

import React, { useState } from "react";
import Bill from "./billField";
import TotalField from "./totalField";
import TipField from "./tipFIeld";

const TipCalculator: React.FC = () => {
	const [bill, setBill] = useState<number | undefined>(0);
	const [tip, setTip] = useState<number | undefined>(0);

	function onBillChange(bill: string) {
		const convertToNum = parseInt(bill);
		setBill(convertToNum | 0);
		console.log(convertToNum);
	}

	function onTipChange(tip: string) {
		const convertToNum = parseInt(tip);
		setTip(convertToNum | 0);
		console.log(convertToNum);
	}

	function onTotalChange(bill: number, tip: number) {
		return bill * (tip / 100) + bill;
	}

	return (
		<div className="calculator_container">
			<h1>Tip Calculator</h1>
			<Bill handleBill={onBillChange} />
			<TipField handleTip={onTipChange} />
			<TotalField bill={bill} tip={tip}>
				{(bill, tip) => <div>Total: $ {onTotalChange(bill, tip)}</div>}
			</TotalField>
		</div>
	);
};

export default TipCalculator;
