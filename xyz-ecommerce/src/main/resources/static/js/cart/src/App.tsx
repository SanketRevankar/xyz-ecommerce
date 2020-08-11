import * as React from 'react';
import ProductList from './ProductList';

class App extends React.Component<{}, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            products: [],
        };
    }

    public componentDidMount() {
        fetch('http://localhost:8080/api/v1/products')
            .then(response => response.json())
            .then(data => this.setState({ products: data._embedded.products }));
    }

    public render() {
        // tslint:disable-next-line:no-console
        console.log(this.state.products);
		return (
			<ProductList products={...this.state.products}/>
		)
    }

}

export default App;
