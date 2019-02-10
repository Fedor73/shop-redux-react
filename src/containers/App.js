import React, { Component } from "react";
import { connect } from "react-redux";
import { setProducts } from "../actions/products";
import axios from "axios";
import Header from "../containers/Header";
import ProductCard from "./ProductCard";
import MainBasket from "../containers/MainBasket";

class App extends Component {
  componentWillMount() {
    const { setProducts } = this.props;
    axios.get("/products.json").then(({ data }) => {
      setProducts(data);
    });
  }

  render() {
    const { products, isReady, testmapdisp } = this.props;
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>{testmapdisp}</h1>
        <Header />
        <MainBasket />
        <ul>
          {!isReady
            ? "Загрузка"
            : products.map(product => (
                <ProductCard {...product} key={product.id} />
              ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = ({ products, testmapdisp }) => ({
  products: products.items,
  isReady: products.isReady,
  testmapdisp: testmapdisp.name
});

const mapDispatchToProps = dispatch => ({
  setProducts: products => dispatch(setProducts(products))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
