import { Author } from '../../utils/authors'

export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';
export const HIGHLIGHT_CHAT = 'CHATS::HIGHLIGHT';



export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId: chatId,
  message: message
});

export const addMessageMiddleware = (chatId, message) => (dispatch, getState) => {
  dispatch(addMessage(chatId, message));

  const chat = getState().chats.find(c => c.id === chatId);

  if (message.author !== Author.Robot) {
    setTimeout(() => {
      const newRobotMessage = { message: `new bot message ${chat?.messageList.length || 0 + 1}`, sender: Author.Robot };
      dispatch(addMessage(chatId, newRobotMessage));
      dispatch(highlightChatMiddleware(chatId, true));
    }, 500);
  }
};

export const highlightChat = (chatId, highlight) => ({
  type: HIGHLIGHT_CHAT,
  chatId: chatId,
  highlight: highlight
});

export const highlightChatMiddleware = (chatId) => (dispatch, getState) => {
  dispatch(highlightChat(chatId, true));

  setTimeout(() => {
    dispatch(highlightChat(chatId, false));
  }, 1000);
};
