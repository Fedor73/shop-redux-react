import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as basketActions from "../actions/products";
import Header from "../components/Header";

const mapStateToProps = ({ basket }) => ({
  totalPrice: basket.items.reduce((total, product) => total + product.price, 0),
  count: basket.items.length
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(basketActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
