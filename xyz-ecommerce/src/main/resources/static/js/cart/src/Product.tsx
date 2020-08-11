import * as React from 'react';


class Product extends React.Component<{product: any}, any> {
	public render() {
		return (
			<tr>
				<td>{this.props.product.name}</td>
				<td>{this.props.product.imageLocation}</td>
			</tr>
		)
	}
}

export default Product;