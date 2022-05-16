 const DELETE_ORDER = 'orders/DELETE'

 const remove = (id) => ({
   type: DELETE_ORDER,
   order_id: id
 })

 export const delete_order = (id) => async (dispatch) => {
  const current_order = await fetch(`/api/orders/${id}`, {
    method: "DELETE",
  })
  if (current_order.ok) {
    dispatch(remove(id))
  } else {
    return "ERROR AT DELETE_CART THUNK"
  }
}

const order_reducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case DELETE_ORDER:
      newState = { ...state }
      delete newState[action.cart_id]
      return newState
    default:
      return state;
  }
}

export default order_reducer;
