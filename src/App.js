import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import PackageDetails from './Pages/Details/PackageDetails/PackageDetails';
import Home from './Pages/Landing/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import TourPackage from './Pages/TourAlphaPackage/TourPackage/TourPackage';
import Login from './Pages/User/Login/Login';
import PrivateRoute from './Pages/User/PrivateRoute/PrivateRoute';
import Register from './Pages/User/Register/Register';
import './App.css';

function App() {

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/tour-package">
              <TourPackage></TourPackage>
            </Route>
            <PrivateRoute path='/package-details'>
              <PackageDetails></PackageDetails>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
