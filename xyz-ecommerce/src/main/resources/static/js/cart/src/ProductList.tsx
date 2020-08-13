import * as React from 'react';
import Product from './Product';

class ProductList extends React.Component<{ data: any }, any> {

    public render() {
        const products = this.props.data.products.map((product: any) => {
            for (const val of this.props.data.cartItems) {
                if (val.product._links.self.href === product._links.self.href) {
                    product.quantity = val.quantity;
                    product.cart = val._links.self.href;
                }
            }
            const data = { "product": product, "updateCart": this.props.data.updateCart, "addToNewCart": this.props.data.addToNewCart }
            return <Product key={product._links.self.href} data={data} />
        });
        return (
            <div className="row">
                {products}
            </div>
        )
    }
}

export default ProductList;
