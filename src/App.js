import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';
import Register from './containers/Register/Register';
import Appointment from "./containers/Appointment/Appointment";
import Admin from "./containers/Admin/Admin";




function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Header/> 


        <Switch>
        
        
          <Route path = "/" exact component = {Home}/>
          <Route path = "/register" exact component = {Register}/>
          <Route path = "/login" exact component = {Login}/>
          <Route path = "/profile" exact component = {Profile}/>
          <Route path = "/appointments" exact component = {Appointment}/>
          <Route path = "/admin" exact component = {Admin}/>
        
          
        </Switch> 
        
      </BrowserRouter>
      


    </div>
  );
}

export default App;
