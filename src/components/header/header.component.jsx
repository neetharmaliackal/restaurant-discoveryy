import React from 'react';
import {Link} from 'react-router-dom' //used for routing to the pages
import './header.styles.scss'
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';


//functional component (as there is no data/state that is to be changed)


const Header = ({ currentUser, hidden }) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
      <div className='options'>
        
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      
      </div>
    
    </div>
  );
  
  const mapStateToProps = ({ user: { currentUser } }) => ({
    currentUser,
  //  hidden
  });
  
  export default connect(mapStateToProps)(Header);
  

