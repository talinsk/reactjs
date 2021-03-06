import './ChatListComponent.css';
import React, { useMemo } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


function ChatListComponent({ chats, chatId }) {
  const chatsList = useMemo(() => chats.map((ch, ind) => 
      <React.Fragment key={ch.id}>
        <ListItem alignItems="flex-start" className={ ch.id == chatId ? "chat-selected" : "" }>
          <ListItemAvatar>
            <Avatar alt={ch.user} />
          </ListItemAvatar>
          <Link to={`/chats/${ch.id}`}>
            <ListItemText
              primary={ch.id + ' - ' + ch.name}
            />
          </Link>
        </ListItem>
        <Divider variant="inset" component="li" />
      </React.Fragment>
  ), [chats, chatId]);

  return (
    <div className="chat-comp">
        <List className="chat-list">
          {chatsList}
        </List>
    </div>
  );
}


export default ChatListComponent;




