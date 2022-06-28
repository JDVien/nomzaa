const LOAD_ALL_PRODUCTS = "products/GET";
const LOAD_ONE_PRODUCT = "products/GET_ONE";
const UPDATE_PRODUCT = "products/UPDATE";
// const CREATE_PRODUCT = 'products/CREATE'
// const DELETE_PRODUCT = 'products/DELETE'

const all_products = (products) => ({
  type: LOAD_ALL_PRODUCTS,
  products,
});

const get_one = (product) => ({
  type: LOAD_ONE_PRODUCT,
  product,
});

// const create = (product) => ({
//   type: CREATE_product,
//   product
// })

const update = (product) => ({
  type: UPDATE_PRODUCT,
  product,
});

// const remove = (id) => ({
//   type: DELETE_product,
//   product_id: id
// })

export const get_all_products = () => async (dispatch) => {
  const response = await fetch("/api/products/");
  if (response.ok) {
    const products = await response.json();
    dispatch(all_products(products.products_list));
  } else {
    return "ERROR AT GET_ALL_productS THUNK";
  }
};

export const get_one_product = (id) => async (dispatch) => {
  const response = await fetch(`/api/products/${id}`);
  if (response.ok) {
    const { product } = await response.json();

    dispatch(get_one(product));
  } else {
    return "ERROR AT GET_ONE_product THUNK";
  }
};

export const update_product = (product) => async (dispatch) => {
  const response = await fetch(`/api/products/${product.id}/edit`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (response.ok) {
    const data = await response.json();
    // const updated_product = data.product
    dispatch(update(data));
    return response;
  } else {
    return "ERROR AT UPDATE_PRODUCT THUNK";
  }
};

/////////////////////
const inititalState = {};

const product_reducer = (state = inititalState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ALL_PRODUCTS:
      newState = {};
      action.products.forEach((product) => (newState[product.id] = product));
      return newState;
    case LOAD_ONE_PRODUCT:
      return {
        ...state,
        [action.product.id]: {
          ...state[action.product.id],
          ...action.product,
        },
      };
    // case CREATE_PRODUCT:
    //     newState = { ...state, [action.product.id]: action.product }
    //     return newState;
    case UPDATE_PRODUCT:
      return {
        ...state,
        [action.product.id]: action.product,
      };
    // case DELETE_PRODUCT:
    //     newState = {...state}
    //     delete newState[action.product_id]
    //     return newState
    default:
      return state;
  }
};

export default product_reducer;
