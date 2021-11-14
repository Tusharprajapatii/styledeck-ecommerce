export const addtoCart = (cart, itemsToAdd) => {
  const existingCart = cart.find((cart) => cart.id === itemsToAdd.id);
  if (existingCart) {
    return cart.map((cart) =>
      cart.id === itemsToAdd.id
        ? { ...cart, quantity: cart.quantity + 1 }
        : cart
    );
  }
  return [...cart, { ...itemsToAdd, quantity: 1 }];
};
