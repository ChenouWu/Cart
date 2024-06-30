 
export const Money = (cart)=>{
    let totalAmount = 0;

    let totalcost= 0;
    for(let item of cart.values()){
        totalcost += item.amount*item.price;
        totalAmount += item.amount;
    }
    
    
    return {totalAmount,totalcost};
}