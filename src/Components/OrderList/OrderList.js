import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const OrderList = () => {
    const [orders,setOrders]=useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(orders)

    useEffect(()=>{
        fetch('http://localhost:5005/allOrder?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setOrders(data));
    },[])

    return (
        <div style={{textAlign:'center'}}>
            
            {
                orders.map(order=><li>Book: {order.name}  || Price: {order.amount}</li>)
            }
        </div>
    );

};

export default OrderList;