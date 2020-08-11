import * as React from 'react';
import Product from './Product';

class ProductList extends React.Component<{products: any}, any> {
	public render() {
		const products = this.props.products.map((product: any) =>
			<Product key={product._links.self.href} product={...product}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>Image Location</th>
					</tr>
					{products}
				</tbody>
			</table>
		)
	}
}

export default ProductList;
