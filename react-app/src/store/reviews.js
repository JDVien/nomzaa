const LOAD_ALL_REVIEWS = 'reviews/GET'

const all_reviews = (reviews) => ({
  type: LOAD_ALL_REVIEWS,
  reviews
})

export const get_all_reviews = () => async (dispatch) => {
  const response = await fetch("/api/reviews/")
  if(response.ok) {
    const reviews = await response.json()
    dispatch(all_reviews(reviews.reviews_list))
  } else {
    return "ERROR AT GET_ALL_REVIEWS THUNK"
  }
}


const inititalState = {}

const review_reducer = (state = inititalState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ALL_REVIEWS:
      newState = {}
      action.reviews.forEach((review) => (newState[review.id] = review))
      return newState

    default:
      return state;
  }
}

export default review_reducer;
