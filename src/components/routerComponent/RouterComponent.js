import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from "../homeComponent/HomeComponent";
import Profile from "../profileComponent/ProfileComponent";
import HeaderComponent from '../headerComponent/HeaderComponent'
import Chats from "../chatsComponent/ChatsComponent";
import Posts from "../postsComponent/PostsComponent";


export default function Router() {
  return (
    <BrowserRouter>
      <HeaderComponent/>


      <Switch>
        <Route path="/test-posts">
          <Posts />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route exact path="/chats">
          <Chats />
        </Route>

        <Route path="/chats/:chatId">
          <Chats />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}