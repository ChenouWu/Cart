import { FaCartPlus } from 'react-icons/fa';
import { useGloableContext } from './context';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const {totalAmount} = useGloableContext();
  return (
    <nav>
      <div className='nav-center'>
        <h4>PHONE</h4>
        <div className='nav-container'> 
          <FaCartPlus className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{totalAmount}</p>
          </div>
        </div>
      </div>
      <Link to="/container">Go to Cart</Link>
    </nav>
  );
};

export default Navbar;
