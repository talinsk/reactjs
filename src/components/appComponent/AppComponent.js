import './AppComponent.css';
import Router from '../routerComponent/RouterComponent'
import InstallPopup from '../installPopupComponent';

function AppComponent() {
  
  return (
      <div className="App">
          <Router />
          <InstallPopup />
      </div>
  );
}

export default AppComponent;




