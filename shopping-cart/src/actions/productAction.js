export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FILTER_PRODUCTS_BY_COLOR = "FILTER_PRODUCTS_BY_COLOR";
export const FILTER_PRODUCTS_BY_PRICE = "FILTER_PRODUCTS_BY_PRICE";


export const fetchProducts = () => (dispatch) => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .catch((err) =>
        fetch("db.json")
          .then((res) => res.json())
          .then((data) => data.products)
      )
      .then((data) => {
        dispatch({ type: FETCH_PRODUCTS, payload: data });
      });
  };

  export const filterProducts = (products, color) => (dispatch) => {
    dispatch({
      type: FILTER_PRODUCTS_BY_SIZE,
      payload: {
        color: color,
        items:
          color === ""
            ? products
            : products.filter(
                (x) => x.availableSizes.indexOf(size.toUpperCase()) >= 0
              ),
      },
    });
  };
  
  export const sortProducts = (items, sort) => (dispatch) => {
    const products = items.slice();
    if (sort !== "") {
      products.sort((a, b) =>
        sort === "lowestprice"
          ? a.price > b.price
            ? 1
            : -1
          : a.price < b.price
          ? 1
          : -1
      );
    } else {
      products.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
    dispatch({
      type: FILTER_PRODUCTS_BY_PRICE,
      payload: {
        sort: sort,
        items: products,
      },
    });
  };