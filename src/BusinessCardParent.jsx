import { Component } from "react";
import BusinessCardDisplay from "./BusinessCardDisplay";

class BusinessCardParent extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<BusinessCardDisplay></BusinessCardDisplay>
			</div>
		);
	}
}
