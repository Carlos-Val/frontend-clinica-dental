import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';





function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Header/>


        <Switch>

          
          <Route path = "/" exact component = {Home}/>
          <Route path = "/register" exact component = {Register}/>



         




        </Switch> 
      
      </BrowserRouter>
      


    </div>
  );
}

export default App;
