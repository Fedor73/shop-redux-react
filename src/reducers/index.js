import { combineReducers } from "redux";
import products from "./products";
import basket from "./basket";
import testmapdisp from "./testmapdisp";

export const rootReducer = combineReducers({
  products,
  testmapdisp,
  basket
});

export default rootReducer;
