function getProductsFromLocalStorage() {
  const cart = localStorage.getItem("cart");

  if (!cart) {
    return [];
  }
  return JSON.parse(cart);
}

function setProductsToLocalStorage(productId) {
  const cart = localStorage.getItem("cart");
  if (!cart) {
    const productIds = [productId];
    localStorage.setItem("cart", JSON.stringify(productIds));
  } else {
    const parsedIds = JSON.parse(cart);
    const newIds = [...parsedIds, productId];

    localStorage.setItem("cart", JSON.stringify(newIds));
  }
}

function clearProductsFromLocalStorage() {
  const cart = localStorage.getItem("cart");
  if (!cart) return;
  localStorage.removeItem("cart");
}

export {
  getProductsFromLocalStorage,
  setProductsToLocalStorage,
  clearProductsFromLocalStorage,
};
