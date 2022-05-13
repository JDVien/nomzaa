import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import ProductsList from './components/Products/ProductsList';
import ProductDetails from './components/Products/ProductDetail';
import Cart from './components/Cart/Cart'
import Main from './components/MainPage/index';
import OrderList from './components/Orders/OrderList';
import { authenticate } from './store/session';

function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <>
    <BrowserRouter>
      <NavBar user={user}/>
      <Switch>
        <Route exact path="/products">
          <ProductsList />
        </Route>
        <Route path="/products/:productId">
          <ProductDetails loaded={loaded} />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute exact path="/" >
          <Main user={user} />
        </ProtectedRoute>
        <ProtectedRoute path='/cart'>
          <Cart />
        </ProtectedRoute>
        <ProtectedRoute exact path="/orders">
            <OrderList user={user} />
        </ProtectedRoute>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        {/* <ProtectedRoute path='/' exact={true} >
          <h1>Main</h1>
        </ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
