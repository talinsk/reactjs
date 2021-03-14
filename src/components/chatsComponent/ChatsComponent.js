import { Author } from '../../utils/authors'
import React, { useState, useMemo, useCallback } from 'react';
import { useParams } from "react-router-dom";
import { flexbox } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import MessagerComponent from '../messagerComponent/MessagerComponent'
import ChatListComponent from '../chatListComponent/ChatListComponent'

export default function ChatsComponent() {

    const params = useParams();

    const [chats, setChats] = useState([
        {
        id: 1,
        name: "Chat 1",
        user: "Ali Connors",
        messageList: [
            { message: `new message 1`, sender: Author.Me },
            { message: `new message 2`, sender: Author.Robot },
            { message: `new message 3`, sender: Author.Me },
            { message: `new message 4`, sender: Author.Robot }
        ],
        },
        {
        id: 2,
        name: "Chat 2",
        user: "Bryan",
        messageList: [
            { message: `new message 10`, sender: Author.Me },
            { message: `new message 20`, sender: Author.Robot }
        ],
        },
        {
        id: 3,
        name: "Chat 3",
        user: "Mary",
        messageList: [
            { message: `new message 100`, sender: Author.Me },
            { message: `new message 200`, sender: Author.Robot }
        ],
        }
    ]);

    const selectedChat = useMemo(() =>
        chats.find(ch => ch.id == params.chatId)
    , [chats, params]);


    const addMessage = useCallback(
        (msg) => {
            if (!selectedChat) {
                return;
            }

            const chatIndex = chats.findIndex(c => c.id === selectedChat.id);
            const newChats = [...chats];
            newChats[chatIndex] = {
                ...selectedChat,
                messageList: [ ...selectedChat.messageList, msg ],
            }

            setChats(newChats);
        },
        [chats, selectedChat]
    );


  return (
      <>
        <Box display="flex">
          
          <ChatListComponent chats={chats} chatId={params.chatId} />
          
          {selectedChat &&
                <MessagerComponent messages={selectedChat ? selectedChat.messageList : []}  onAddMessage={addMessage} />      
          }
          
        </Box>
        

      </>
  )


}