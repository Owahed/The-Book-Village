import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import AddBook from './Components/AddBook/AddBook';
import { createContext, useState } from 'react';
import Product from './Components/Product/Product';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { Nav, Navbar } from 'react-bootstrap';
import OrderList from './Components/OrderList/OrderList';
import Admin from './Components/Admin/Admin';
import ManageProduct from './Components/ManageProduct/ManageProduct';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}
      <Router>
        <div>

          <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">The Book Village</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/order">Order</Nav.Link>
              <Nav.Link href="/admin">Admin</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link  href="/login"> <b>{loggedInUser.name}</b></Nav.Link>
            </Nav>

          </Navbar>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/order">
              <OrderList></OrderList>
            </PrivateRoute>
            <PrivateRoute path="/product/:id">
              <Product></Product>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addBook">
              <AddBook></AddBook>
            </Route>
            <Route path="/manageProduct">
              <ManageProduct></ManageProduct>
            </Route>

          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
