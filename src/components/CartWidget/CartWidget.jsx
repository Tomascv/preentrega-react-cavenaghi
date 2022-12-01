import React from 'react'; 
import cartLogo from '../../assets/images/shopbag.png'; 

const CartWidget = () => { 

  return (<>
      {
      <a style={{ backgroundColor: '#2d303b', border: 'none', marginLeft: 15, marginRight: 25 }}>
        <img src={cartLogo} alt="cart" width={30} height={30} />
        <button style={{ backgroundColor: '#2d303b', border: 'none'}}>{0}</button>        
      </a>
      }
  </>
  );
};

export default CartWidget;
