import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
import User from './components/User';
import ProductsList from './components/Products/ProductsList';
import ProductDetails from './components/Products/ProductDetail';
import Cart from './components/Cart/Cart'
import Main from './components/MainPage/index';
import OrderList from './components/Orders/OrderList';
import CancelOrder from './components/Orders/CancelOrder';
import CancelConfirmation from './components/Orders/CancelConfirmation';
import ReviewConfirmation from './components/Reviews/ReviewEditConfirm';
import CreateReview from './components/Reviews/CreateReviewForm';
import EditReview from './components/Reviews/EditReviewForm';
import DeleteReview from './components/Reviews/DeleteReview';
import DeleteConfirmation from './components/Reviews/DeleteConfirm';
import FilteredProducts from './components/Products/FilteredProductsList';
import { authenticate } from './store/session';

function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  // const dispatch = useDispatch();

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

      <Switch>
        <Route exact path="/products">
          <NavBar user={user}/>
          <ProductsList />
        </Route>
        <Route exact path="/products/:filter">
        <NavBar user={user}/>
          <FilteredProducts />
        </Route>
        <Route path="/products/:productId">
        <NavBar user={user}/>
          <ProductDetails loaded={loaded} />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/signup' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/reviews/new">
        <NavBar user={user}/>
            <CreateReview />
        </ProtectedRoute>
        <ProtectedRoute path="/reviews/:reviewId/edit">
        <NavBar user={user}/>
            <EditReview />
        </ProtectedRoute>
        <ProtectedRoute path="/reviews/confirm">
        <NavBar user={user}/>
            <ReviewConfirmation />
        </ProtectedRoute>
        <ProtectedRoute path="/reviews/delete">
        <NavBar user={user}/>
            <DeleteConfirmation />
        </ProtectedRoute>
        <ProtectedRoute path="/reviews/:reviewId/delete">
        <NavBar user={user}/>
            <DeleteReview />
        </ProtectedRoute>
        <Route exact path="/" >
        <NavBar user={user}/>
          <Main user={user} />
        </Route>
        <ProtectedRoute path='/cart'>
        <NavBar user={user}/>
          <Cart />
        </ProtectedRoute>
        <ProtectedRoute exact path="/orders">
                <NavBar user={user}/>
            <OrderList user={user} />
        </ProtectedRoute>
        <ProtectedRoute exact path="/orders/:orderId/delete">
        <NavBar user={user}/>
            <CancelOrder user={user} />
        </ProtectedRoute>
        <ProtectedRoute exact path="/confirm">
        <NavBar user={user}/>
            <CancelConfirmation />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
