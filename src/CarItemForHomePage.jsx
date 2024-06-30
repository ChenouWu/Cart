import { useGloableContext } from './context';
const CartItemForHomePage = ({ id, img, title, price,}) => {

  const {add} = useGloableContext();

  return (
    <div className='shadow-md'>
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className=' text-base item-price'>${price}</span>
      </div>
      <div>
        <button className="shadow-md text-base" onClick={ ()=>{add(id)} }>Add</button>
      </div>
    </article>
    </div>
  );
};

export default CartItemForHomePage;
