import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as basketActions from "../actions/basket";
import ProductCard from "../components/ProductCard";

const mapStateToProps = ({ basket }, { id }) => ({
  addedCount: basket.items.reduce(
    (count, product) => count + (product.id === id ? 1 : 0),
    0
  )
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(basketActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
