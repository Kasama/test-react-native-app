export const SET_USER = 'S_USER';

const userState = {
  username: 'Kasama',
};

const userReducer = (state = userState, action) => {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        username: action.data.username,
      }
    default:
      return state;
  }
};

export default userReducer;
