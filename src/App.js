import React from 'react';
//import logo from './logo.svg';
import './App.css';
//Get homepage component to main component
import HomePage from './pages/homepage/homepage.component';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import Restaurant from './components/restaurant/restaurant';
import Header from './components/header/header.component';
import { connect } from 'react-redux';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { Switch,  Redirect } from 'react-router-dom';






class App extends React.Component {
  //  unsubscribeFromAuth = null;
  
    componentDidMount() {
      const { setCurrentUser } = this.props;
  
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
  
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        }
  
        setCurrentUser(userAuth);
      });
    }
  
    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }
  
    render() {
      return (
        <div>
           <Router>
          <Header />
          <Switch>
          <Route path="/" exact={true}component={HomePage}/>
            <Route path="/restaurant/:id" component={Restaurant}/>
            <Route
              exact
              path='/signin'
              render={() =>
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Switch>
          </Router>
        </div>
      );
    }
  }
  
  const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
  });
  
  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
  