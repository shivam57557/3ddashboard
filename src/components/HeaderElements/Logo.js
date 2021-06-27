import React from 'react';
import '../CSS/Logo.css';
import  dslogo from '../../assets/images/ds.png';

// import '../../assets/images/3dsLogo.png'


const Logo = () => {
    return (
        <div className="Logo" >
             <img src={dslogo} alt="3DS" /> 
        </div>
    )
}


export default Logo;
