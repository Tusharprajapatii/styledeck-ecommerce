const productsReducer = (state, action) => {
  if (action.type === "GET_PRODUCTS") {
    const customers_Products = action.payload.filter(
      (item) => item.routeName === "Customers"
    );
    const wholesalers_Products = action.payload.filter(
      (item) => item.routeName === "Wholesalers"
    );
    const latest = action.payload.filter((item) => item.routeName === "Latest");

    return {
      ...state,
      customers_Products,
      wholesalers_Products,
      latest,
    };
  }
};
export default productsReducer;
