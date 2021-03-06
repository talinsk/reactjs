import './AppComponent.css';
import HeaderComponent from '../headerComponent/HeaderComponent'
import MessagerComponent from '../messagerComponent/MessagerComponent'
import ChatListComponent from '../chatListComponent/ChatListComponent'
import { flexbox } from '@material-ui/system';
import Box from '@material-ui/core/Box';


function AppComponent() {
  
  return (
    <>
    <div className="App">
        <HeaderComponent/>
        <Box display="flex">
        <ChatListComponent/>
        <MessagerComponent/>
        </Box>
        
    </div>
    </>
  );
}

export default AppComponent;




