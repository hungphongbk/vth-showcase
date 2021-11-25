import { createAction, createReducer } from "@reduxjs/toolkit";
import { Showcase } from "../../types/graphql";

type CartState = {
  list: Showcase[];
};

export const addShowcaseToCart = createAction<Showcase>("@@cart/add");

const cartReducer = createReducer<CartState>({ list: [] }, (builder) => {
  builder.addCase(addShowcaseToCart, (state, { payload }) => {
    state.list.push(payload);
  });
});

export default cartReducer;
