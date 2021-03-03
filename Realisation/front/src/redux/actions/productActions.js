import axios from "axios";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

// fetch products
//export const fetchProducts = products => {
//  return dispatch => {
//    dispatch(fetchProductsSuccess(products));
//  };
//};

function replacer(key, value) {
  // Filtering out properties
  if (key === 'id') {
    return value.toString();
  }
  return value;
}

export const fetchProducts = products => {
  return dispatch => {
    axios.get("http://localhost:8080/products")
    .then(({data}) => { 
      const dataS = JSON.stringify(data, replacer)
      console.log(dataS);
      dispatch(fetchProductsSuccess(JSON.parse(dataS)));
    });
};
}
