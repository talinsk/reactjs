import './MessagerComponent.css';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import { Author } from '../../utils/authors';



const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));




function MessagerComponent({ messages, onAddMessage }) {

  const classes = useStyles();
  
  const [messageToSend, setMessageToSend] = useState("");

  const msgs = useMemo(() => messages?.map((m, ind) => 
    <div className={m.sender.id == 1 ? 'text-author' : 'text-robot'} key={ind}>{m.sender.name}: {m.message}</div>
  ), [messages]);

  const handleSubmit = useCallback((e) => {
      e.preventDefault();

      if (!onAddMessage)
        return;

      onAddMessage({ message: messageToSend, sender: Author.Me });
      setMessageToSend('');
  }, [messageToSend, messages]);

  const handleMessageChange = useCallback((e) => {
    setMessageToSend(e.target.value);
  }, []);

  return (
    

      <main className="app-body">
        <form onSubmit={handleSubmit}>
            <TextField
                inputProps={{ maxLength: 90 }}
                id="messageBox"
                label="Message to send"
                variant="outlined"
                color="secondary"
                placeholder="Input message"
                value={messageToSend} 
                onChange={handleMessageChange}
            />
            
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
            >
                Отправить
            </Button>
        </form>
        <div>
          {msgs}
        </div>
      </main>
  );
}

export default MessagerComponent;




