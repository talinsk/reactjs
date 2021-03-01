import './MessagerComponent.css';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));




function MessagerComponent() {

  const classes = useStyles();
  
  //sender: 0-user, 1-robot
  const [messages, setMessages] = useState([]);
  const [messageToSend, setMessageToSend] = useState("");

  useEffect(() => {
    // произошло обновление
    
    if (messages.length == 0)
      return;

    const lastEl = messages[messages.length - 1];
    if (lastEl.sender === 0) {
      const timerId = setTimeout(() => {
        const newRobotMessage = { message: `new message ${messages.length + 1}`, sender: 1, author: "robot" };
        const newMessages = [...messages, newRobotMessage];
        setMessages(newMessages);  
      }, 1000);

      return () => {
        clearTimeout(timerId);
      }
    }
  }, [messages]);


  const msgs = useMemo(() => messages.map((m, ind) =>
      <div className={m.sender == 0 ? 'text-author' : 'text-robot'} key={ind}>{m.author}: {m.message}</div>
  ), [messages]);

  const clear = useCallback(() => {
    setMessages([]);
  }, []);

  const handleSubmit = useCallback((e) => {
      e.preventDefault();
      if (messageToSend == "")
        return;
      const newMessage = { message: messageToSend, sender: 0, author: "Me" };
      setMessages([...messages, newMessage]);
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
            <Button
                type="button"
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={clear}
            >
                Очистить
            </Button>
        </form>
        <div>
          {msgs}
        </div>
      </main>
  );
}

export default MessagerComponent;




