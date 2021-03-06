import './HeaderComponent.css';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

function HeaderComponent() {
  
  return (
    <div className="header-comp">
        MyMessenger
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/chats">Chats</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>
          
        </ul>
    </div>
    
  );
}


export default HeaderComponent;




