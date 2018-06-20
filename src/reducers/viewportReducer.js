export const SET_VIEWPORT = "SET_VIEWPORT";

export const setViewport = () => {
  return {
    type: SET_VIEWPORT
  };
};

const initialState = {
  size: 0
};

export default function viewportReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VIEWPORT: {
      const size = window.innerWidth;
      return {
        ...state,
        size
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}

export const watchWindowResize = dispatch => {
  window.addEventListener("resize", function() {
    dispatch(setViewport());
  });
};
