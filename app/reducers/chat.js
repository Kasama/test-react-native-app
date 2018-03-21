export const ADD_MESSAGE = 'A_MESSAGE';

const chatState = {
  messages: [ ],
};

const chatReducer = (state = chatState, action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      return {
        messages: [
          ...state.messages,
          {
            timestamp: new Date(),
            user: action.data.user,
            text: action.data.text,
          },
        ],
      }
    default:
      return state;
  }
};

export default chatReducer;
