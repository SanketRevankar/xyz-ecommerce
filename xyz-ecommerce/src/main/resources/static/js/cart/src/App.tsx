import * as React from 'react';
import CartList from './CartList';
import ProductList from './ProductList';

class App extends React.Component<{}, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            cart: false,
            cartItems: [],
            masterCart: {},
            products: [],
        };
        this.showCart = this.showCart.bind(this)
        this.showHome = this.showHome.bind(this)
        this.updateCart = this.updateCart.bind(this)
        this.addToNewCart = this.addToNewCart.bind(this)
        this.removeFromMasterCart = this.removeFromMasterCart.bind(this)
    }

    public componentDidMount() {
        fetch('http://localhost:8080/api/v1/carts/1')
            .then(response => response.json())
            .then(data => this.setState({ masterCart: data }));
        fetch('http://localhost:8080/api/v1/carts/1/cartItems')
            .then(response => response.json())
            .then(data => {
                data._embedded.cartItems.map((product: any) =>
                    fetch(product._links.product.href)
                        .then(response => response.json())
                        .then(data1 => {
                            product.product = data1;
                            const newCart = this.state.cartItems.concat(product);
                            this.setState({ cartItems: newCart });
                        })
                )
            });
        fetch('http://localhost:8080/api/v1/products')
            .then(response => response.json())
            .then(data => this.setState({ products: data._embedded.products }));

    }

    public render() {
        const dataProduct = { 'products': this.state.products, 'cartItems': this.state.cartItems, 'updateCart': this.updateCart, "addToNewCart": this.addToNewCart }
        const dataCart = { 'cartItems': this.state.cartItems, 'updateCart': this.updateCart }
        let totalCart = 0;
        this.state.cartItems.map((product: any) => { totalCart += product.quantity });
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a href="#" className="navbar-brand ml-3" onClick={this.showHome}>XYZ Shopping</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <a href="#" className="navbar-item ml-auto text-dark text-decoration-none" onClick={this.showHome}>Home</a>
                    <button className="navbar-item btn border-dark ml-3 mr-3" onClick={this.showCart}>Cart <span className="badge badge-dark">{totalCart}</span></button>
                </nav>
                {this.state.cart ?
                    <div className='container' style={{ marginTop: "10vh" }} >
                        <CartList data={dataCart} />
                    </div>
                    :
                    <div className='container' style={{ marginTop: "10vh" }} >
                        <ProductList data={dataProduct} />
                    </div>
                }
            </div>
        )
    }

    public showCart() {
        this.setState({ cart: true });
    }

    public showHome() {
        this.setState({ cart: false });
    }

    public updateCart(url: string, quantity: number) {
        const requestOptions = {
            body: JSON.stringify({ "quantity": quantity }),
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT',
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                for (const val of this.state.cartItems) {
                    if (val._links.self.href === data._links.self.href) {
                        val.quantity = data.quantity;
                    }
                }
                this.setState({ cartItems: this.state.cartItems });
                if (quantity === 0) {
                    this.removeFromMasterCart(url)
                }
            });

    }

    public addToNewCart(product: any) {
        const requestOptions = {
            body: JSON.stringify({ "quantity": 1, "product": product._links.self.href, "masterCart": this.state.masterCart._links.self.href }),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
        };
        fetch("http://localhost:8080/api/v1/cartItems", requestOptions)
            .then(response => response.json())
            .then(data => {
                data.product = product;
                const cartItems1 = this.state.cartItems.concat(data);
                this.setState({ cartItems: cartItems1 });
                return cartItems1;
            })
            .then(cartItems1 => {
                const requestOptions1 = {
                    body: JSON.stringify({ "cartItems": cartItems1.map((element: any) => element._links.self.href) }),
                    headers: { 'Content-Type': 'application/json' },
                    method: 'PATCH',
                };
                fetch(this.state.masterCart._links.self.href, requestOptions1)
                    .then(response => response.json())
                    .then(data => {
                        this.setState({ masterCart: data });
                    });
            });

    }

    public removeFromMasterCart(cartItem: any) {
        const cartItems1 = this.state.cartItems.map((element: any) => element._links.self.href).filter((element: any) => element !== cartItem);
        const requestOptions1 = {
            body: JSON.stringify({ "cartItems": cartItems1 }),
            headers: { 'Content-Type': 'application/json' },
            method: 'PATCH',
        };
        fetch(this.state.masterCart._links.self.href, requestOptions1)
            .then(response => response.json())
            .then(data => {
                this.setState({ masterCart: data });
            }).then(data1 => {
                const requestOptions = {
                    headers: { 'Content-Type': 'application/json' },
                    method: 'DELETE',
                };
                fetch(cartItem, requestOptions)
                    .then(data => {
                        const removedCart = this.state.cartItems.filter((element: any) => element._links.self.href !== cartItem);
                        this.state.products.map((element: any) => {
                            if (element.cart === cartItem) {
                                delete element.cart;
                                delete element.quantity;
                            }
                        });
                        this.setState({ cartItems: removedCart });
                    });
            });
    }

}

export default App;
