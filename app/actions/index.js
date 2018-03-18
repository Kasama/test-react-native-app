import {
  ADD_MESSAGE,
  GET_MESSAGES,
} from '../reducers/chat';

export default {
  addMessage(message) {
    return (dispatch) => {
      dispatch({
        type: ADD_MESSAGE,
        data: {
          user: 'Marcus',
          text: message,
        },
      });
    };
  },
  getMessages() {
    return (dispatch) => {
      dispatch({type: GET_MESSAGES});
    };
  },
};
