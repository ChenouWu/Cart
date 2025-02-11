import CartItem from './CartItem';
import { useGloableContext } from './context';

const CartContainer = () => {

  const {cart,clearCart,totalcost} = useGloableContext();
  const cartArray = Array.from(cart.entries()); 


  
  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      {/* cart header */}
      <header>
          <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          const[id,items] = cartItem;
          return <CartItem key={id} {...items} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>{totalcost}</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
