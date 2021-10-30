import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Contact from './components/Contact/Contact';
import Login from './components/Authentication/Login/Login';

import AddService from './components/AddService/AddService';
import Header from './components/Shared/Header.js/Header';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import MyOrder from './components/MyOrder/MyOrder';
import Register from './components/Authentication/Register/Register';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserDetails from './components/UserDetails/UserDetails';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import AllBook from './components/AllBook/AllBook';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/Shared/NotFound/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path = '/'>
          <Home></Home>
        </Route>
        <Route path = '/home'>
          <Home></Home>
        </Route>
        <Route path = '/contact'>
          <Contact></Contact>
        </Route>
        <Route path = '/services'>
          <Services></Services>
        </Route>
        <Route path = '/login'>
          <Login></Login>
        </Route>
        <Route path = '/addService'>
          <AddService></AddService>
        </Route>
        <Route path = '/selected'>
          <AddService></AddService>
        </Route>
        <PrivateRoute path = '/myOrder'>
          <MyOrder></MyOrder>
        </PrivateRoute>
        <PrivateRoute path = '/allBook'>
          <AllBook></AllBook>
        </PrivateRoute>
        <Route path = '/register'>
          <Register></Register>
        </Route>
        <Route path = '/placeOrder'>
          <PlaceOrder></PlaceOrder>
        </Route>
        <Route path = '/userDetails'>
          <UserDetails></UserDetails>
        </Route>
        <Route path = '/dashboard'>
          <Dashboard></Dashboard>
        </Route>
        <Route path = '*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
  );
}

export default App;
