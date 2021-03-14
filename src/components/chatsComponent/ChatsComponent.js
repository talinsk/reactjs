import { Author } from '../../utils/authors'
import React, { useState, useMemo, useCallback } from 'react';
import { useParams } from "react-router-dom";
import { flexbox } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import MessagerComponent from '../messagerComponent/MessagerComponent'
import ChatListComponent from '../chatListComponent/ChatListComponent'
import { useSelector, useDispatch } from 'react-redux'
import { addMessage } from "../../store/chats/chatsActions";

export default function ChatsComponent() {

    const params = useParams();
    const chats = useSelector(state => state.chats);
    const dispatch = useDispatch();

    const selectedChat = useMemo(() =>
        chats.find(ch => ch.id == params.chatId)
    , [chats, params]);

    const addNewMessage = useCallback(
        (msg) => {
            if (!selectedChat)
                return;

            dispatch(addMessage(selectedChat.id, msg));
        },
        [chats, selectedChat]
    );

  return (
      <>
        <Box display="flex">
          
          <ChatListComponent chats={chats} chatId={params.chatId} />
          
          {selectedChat &&
                <MessagerComponent messages={selectedChat ? selectedChat.messageList : []}  onAddMessage={addNewMessage} />      
          }
          
        </Box>
        

      </>
  )


}