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
        <div>
            <h2>You have:{orders.length}</h2>
            {
                orders.map(order=><li>Book: {order.name} date:{}</li>)
            }
        </div>
    );
};

export default OrderList;