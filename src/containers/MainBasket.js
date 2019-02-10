import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as basketActionss from "../actions/basket";
import MainBasket from "../components/MainBasket";
import uniqBy from "lodash/uniqBy";

const mapStateToProps = ({ basket }) => ({
  items: uniqBy(basket.items, o => o.id)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(basketActionss, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainBasket);
