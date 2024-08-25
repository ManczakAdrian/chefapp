const ADD_CIRCULAR = "fullScreenCircularProgress/ADD_CIRCULAR";
const REMOVE_CIRCULAR = "fullScreenCircularProgress/ADD_CIRCULAR";

const addCircularActionCreator = () => ({ type: ADD_CIRCULAR });

const removeCircularActionCreator = () => ({ type: REMOVE_CIRCULAR });

export const circularProgress = {
  add: addCircularActionCreator,
  remove: removeCircularActionCreator,
};

const initialState = {
  circurals: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CIRCULAR:
      return {
        ...state,
        circurals: [...state.circulars, true],
      }
    case REMOVE_CIRCULAR:
      return {
        ...state,
        circurals: state.circulars.filter((el, index) => index !== 0),
      }
    default:
      return state;
  }
};
