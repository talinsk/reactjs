import './HeaderComponent.css';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import PushToggle from "../pushToggleComponent/PushToggleComponent"

function HeaderComponent() {
  
  const profile = useSelector((state) => state.profile);

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
          
          <li>
            <Link to="/test-posts">API Posts</Link>
          </li>

        </ul>

        <div className="right-block">
          <div className="push-container">
            <PushToggle />
          </div>
          {profile.name}
        </div>
    </div>
    
  );
}


export default HeaderComponent;