export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId: chatId,
  message: message
});