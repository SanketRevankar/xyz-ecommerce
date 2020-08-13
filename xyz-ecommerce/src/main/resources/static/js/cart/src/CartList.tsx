import * as React from 'react';
import CartProduct from './CartProduct';

class CartList extends React.Component<{ data: any }, any> {
	public render() {
		let totalCost = 0;
		const items = this.props.data.cartItems.map((item: any) => {
			const data1 = { "cartItem": item, "updateCart": this.props.data.updateCart };
			totalCost += Number(item.product.price.replace(/,/g, '') * item.quantity);
			return <CartProduct key={item._links.self.href} data={data1} />
		});
		return (
			<div className="mb-5">
				<div className="row ml-2"><h2>Your Cart</h2></div>
				<hr />
				{this.props.data.cartItems.length !== 0 ? items :
					<div>
						<h5>Nothing here!</h5>
						<p>Click on Home to see the products and add them to your cart!</p>
					</div>
				}
				<hr />
				{this.props.data.cartItems.length !== 0 ? <h5>Total Cost: &#x20B9; {totalCost.toLocaleString()}</h5> : <h5 />}
			</div>
		)
	}
}

export default CartList;
