const LOAD_ALL_SAVED = "saved/GET";
const LOAD_ONE_SAVED = "saved/GET_ONE";
const CREATE_SAVED = "saved/CREATE";
const UPDATE_SAVED = "saved/UPDATE";
const DELETE_SAVED = "saved/DELETE";
const EDIT_SAVED = "saved/EDIT";

const all_saved = (saved) => ({
  type: LOAD_ALL_SAVED,
  saved,
});

const get_one = (save) => ({
  type: LOAD_ONE_SAVED,
  save,
});

const create = (save) => ({
  type: CREATE_SAVED,
  save,
});


const update = (saved) => ({
  type: UPDATE_SAVED,
  saved,
});

const remove = (id) => ({
  type: DELETE_SAVED,
  save_id: id,
});

const edit = (save) => ({
  type: EDIT_SAVED,
  save,
});
// thunks
export const get_all_saved = () => async (dispatch) => {
  const response = await fetch("/api/saved"); // get the response from fetching this route
  if (response.ok) {
    const saved = await response.json(); //has to be in json format
    dispatch(all_saved(saved.saved)); // call the action above
  } else {
    return "ERROR AT GET_ALL_SAVED THUNK";
  }
};

export const create_saved = (save) => async (dispatch) => {
  const response = await fetch("/api/saved", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(save),
  });
  if (response.ok) {
    const save = await response.json();
    dispatch(create(save));
  } else {
    return "ERROR AT CREATE_SAVED THUNK";
  }
};



export const update_saved = (saved) => async (dispatch) => {
  const response = await fetch(`/api/saved/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(saved),
  });
  if (response.ok) {
    const data = await response.json();
    const updated_saved = data.saved;
    dispatch(update(updated_saved));
  } else {
    return "ERROR AT UPDATE_SAVED THUNK";
  }
};

export const delete_saved = (id) => async (dispatch) => {
  const current_save = await fetch(`/api/saved/${id}`, {
    method: "DELETE",
  });
  if (current_save.ok) {
    dispatch(remove(id));
  } else {
    return "ERROR AT DELETE_SAVED THUNK";
  }
};

// reducer
const save_reducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ALL_SAVED:
      newState = {};
      action.saved.forEach((save) => (newState[save.id] = save));
      return newState;
    case LOAD_ONE_SAVED:
      return {
        ...state,
        [action.save.id]: {
          ...state[action.save.id],
          ...action.save,
        },
      };
    case CREATE_SAVED:
      newState = { ...state, [action.save.id]: action.save };
      return newState;
    case UPDATE_SAVED:
      newState = { ...state };
      action.saved.forEach((save) => (newState[save.id] = { ...save }));
      return newState;
    case EDIT_SAVED:
      return {
        ...state,
        [action.save]: action.save,
      };
    case DELETE_SAVED:
      newState = { ...state };
      delete newState[action.save_id];
      return newState;
    default:
      return state;
  }
};

export default save_reducer;
