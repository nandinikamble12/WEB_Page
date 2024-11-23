import React from 'react';
// import appStoreLogo from '../assets/Down.jpeg'; // Add the correct path for your App Store logo
// import googlePlayLogo from ''; // Add the correct path for your Google Play logo
import Loogo from '../assets/logoo.png'
import Logo from '../assets/logo.png'
import './Header.css';



const Header = () => {
  return (
    <div className="header-div">
     <div className="button">
          <img src={Logo} className='img' alt="Download on the App Store"  />
        </div>
        <br/>
        
        
      <div className="download-buttons">
        <div className="button">
          <img src={Loogo} className='imges' alt="Download on the App Store"  />
        </div>
        
      </div>
    </div>
  );
};

export default Header;
