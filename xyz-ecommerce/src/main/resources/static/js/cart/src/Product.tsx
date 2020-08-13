import * as React from 'react';


class Product extends React.Component<{ data: any }, any> {
	constructor(props: any) {
		super(props);

		this.addToCart = this.addToCart.bind(this)
		this.addToNewCart = this.addToNewCart.bind(this)
		this.removeFromCart = this.removeFromCart.bind(this)
	}

	public render() {
		return (
			<div className="col-md-3 mb-3">
				<div className="card h-100">
					<div className="wrapper">
						<img src={this.props.data.product.imageLocation} className="card-img-top" alt={this.props.data.product.name} />
					</div>
					<div className="card-body">
						<h6 className="card-title">{this.props.data.product.name}</h6>
						<p className="card-text">&#x20B9; {this.props.data.product.price}</p>
					</div>
					<div className="card-footer">
						{this.props.data.product.quantity ?
							<div className="btn-group" role="group">
								<button type="button" className="btn btn-dark" onClick={this.removeFromCart}>-</button>
								<button type="button" className="btn border-dark" style={{ pointerEvents: "none" }}>{this.props.data.product.quantity} in Cart</button>
								<button type="button" className="btn btn-dark" onClick={this.addToCart}>+</button>
							</div>
							:
							<a href="#" className="btn btn-dark" onClick={this.addToNewCart}>Add to Cart</a>
						}
					</div>
				</div>
			</div>
		)
	}

	public addToCart(e: any) {
		e.preventDefault();
		this.props.data.updateCart(this.props.data.product.cart, this.props.data.product.quantity ? this.props.data.product.quantity + 1 : 1);
	}

	public addToNewCart(e: any) {
		e.preventDefault();
		this.props.data.addToNewCart(this.props.data.product);
	}

	public removeFromCart(e: any) {
		e.preventDefault();
		this.props.data.updateCart(this.props.data.product.cart, this.props.data.product.quantity ? this.props.data.product.quantity - 1 : 1);
	}
}

export default Product;