/** @format */

import React from "react";

interface Props {
	handleTip: (tip: string) => void;
}
const TipField: React.FC<Props> = ({ handleTip }) => {
	return (
		<div className="form_control">
			<label>Tip% </label>
			<input
				type="number"
				id="tip_value"
				placeholder="10"
				onChange={(e) => handleTip(e.target.value)}
			/>
		</div>
	);
};

export default TipField;
