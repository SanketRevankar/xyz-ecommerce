import * as React from 'react';


class CartProduct extends React.Component<{ data: any }, any> {
	constructor(props: any) {
		super(props);

		this.addToCart = this.addToCart.bind(this)
		this.removeFromCart = this.removeFromCart.bind(this)
	}

	public render() {
		return (
			<div className="row">
				{this.props.data.cartItem.quantity ?
					<div className="col-md-12 mb-3">
						<div className="card h-100">
							<div className="row no-gutters">
								<div className="wrapper col-md-4">
									<img src={this.props.data.cartItem.product.imageLocation} className="card-img-top" alt={this.props.data.cartItem.product.name} />
								</div>
								<div className="card-body col-md-8">
									<div className='row w-100'>
										<h3 className="card-title">{this.props.data.cartItem.product.name}</h3>
									</div>
									<div className='row w-100'>
										<h6 className="card-text pull-right">&#x20B9; {this.props.data.cartItem.product.price}</h6>
									</div>
									<div className='row w-100'>
										<p className="card-text pull-right">Total price: &#x20B9; {(Number(this.props.data.cartItem.product.price.replace(/,/g, '')) * Number(this.props.data.cartItem.quantity)).toLocaleString()}</p>
									</div>

									<div className="btn-group mt-5" role="group">
										<button type="button" className="btn btn-dark" onClick={this.removeFromCart}>-</button>
										<button type="button" className="btn border-dark" style={{ pointerEvents: "none" }}>{this.props.data.cartItem.quantity} in Cart</button>
										<button type="button" className="btn btn-dark" onClick={this.addToCart}>+</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					:
					<div />
				}
			</div>
		)
	}

	public addToCart(e: any) {
		e.preventDefault();
		this.props.data.updateCart(this.props.data.cartItem._links.self.href, this.props.data.cartItem.quantity ? this.props.data.cartItem.quantity + 1 : 1);
	}

	public removeFromCart(e: any) {
		e.preventDefault();
		this.props.data.updateCart(this.props.data.cartItem._links.self.href, this.props.data.cartItem.quantity ? this.props.data.cartItem.quantity - 1 : 1);
	}
}

export default CartProduct;