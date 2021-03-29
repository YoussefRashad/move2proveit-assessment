import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './css/App.css';
// Pages
import Home from './pages/Home'
import AddProduct from './pages/AddProduct'
// Components
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}  />
        <Route exact path="/AddProduct" component={AddProduct}  />
        <Route path="*" component={Home}  />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
