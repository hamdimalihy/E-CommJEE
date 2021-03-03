import AdminMain from "./admin-template/AdminMain"
import LoginComponent from './login/LoginComponent'
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import ForgotPassword from "./login/ForgotPassword";



function App() {
  //const username = sessionStorage.getItem('authenticatedUser');
  return (
    <div className="App">
       <Router>
          <Switch>
              <Route exact path = "/"  component= {LoginComponent}/>
              <Route path= "/adminMain" component = {AdminMain}/>
              <Route path = "/forgot-password" component = {ForgotPassword} />              
          </Switch>
      </Router>
    </div>
  );
}

export default App;
