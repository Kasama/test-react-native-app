import {
  ADD_MESSAGE,
} from '../reducers/chat';

export default {
  addMessage(user, message) {
    return (dispatch) => {
      dispatch({
        type: ADD_MESSAGE,
        data: {
          user: user,
          text: message,
        },
      });
    };
  },
};
