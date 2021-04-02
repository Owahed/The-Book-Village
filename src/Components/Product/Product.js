import React, { useContext, useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Product.css';
import Button from '@material-ui/core/Button';



const Product = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [products, setProducts] = useState();
    

    const productData = products?.find((data) => data._id == id);
    // console.log(productData)

    useEffect(() => {
        fetch('http://localhost:5005/books')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handelCheckOut =()=>{
        const bookOrder={...loggedInUser,...productData};
        fetch('http://localhost:5005/bookOrder',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookOrder)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }


    return (

          <div style={{textAlign:"center"}}>
              <img style={{height:'300px'}} src={productData?.imageURL} alt=""/>
                <br/>
                <div style={{marginTop:"5%",textAlign:'center'}}>
                
                <TableContainer >
                    <Table className="table" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell> <b>Book Name :</b></TableCell>
                                <TableCell align="right"> <b>Quantity :</b> </TableCell>
                                
                                <TableCell align="right"> <b>Price :</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                    {productData?.name}
                                    </TableCell>
                                    <TableCell align="right">1</TableCell>
                                    
                                    <TableCell align="right">${productData?.amount}</TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button onClick={handelCheckOut} variant="contained" color="primary">Check Out</Button>
                <br/>
                
            </div>
          </div>
    );
};

export default Product;