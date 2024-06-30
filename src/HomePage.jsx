import cartItems from "./data";
import CartItem from "./CartItem";
import CartItemForHomePage from "./CarItemForHomePage";
const HomePage =()=>{
    return(
        <div>
            <h1>{cartItems.map((items)=>{
                const{title,price,img} = items
                return <CartItemForHomePage key={items.id} id={items.id} title={title} price={price} img={img}/>
            })}</h1>
        </div>
    )
}

export default HomePage