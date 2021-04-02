import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



const ManageProduct = () => {
  const [books, setBooks] = useState([]);
  // const id = books._id;
  // console.log(books);

  useEffect(() => {
    fetch('https://obscure-sea-42742.herokuapp.com/books')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, []);


  const deleteProduct = (event, id) => {
    
    fetch(`https://obscure-sea-42742.herokuapp.com/delete/${id}`, {
      method: 'DELETE',

    })
      .then(res => res.json())
      .then(result => {
        if(result){
          event.target.parentNode.style.display="none"
        }
      })
  }

  // --------------------------------------------
  const classes = useStyles();
  return (
    <div>
      <div style={{ textAlign: 'center', padding: '5%' }}>
        <Link to='/addBook'>Add book</Link>
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> <b>Book Name</b></TableCell>
              <TableCell align="right"> <b>Quantity</b></TableCell>
              <TableCell align="right"> <b>Price</b></TableCell>

              <TableCell align="right"><b>Action</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">-</TableCell>
                <TableCell align="right">{row.amount}</TableCell>

                <TableCell align="right"><Button onClick={(event) => deleteProduct(event, row._id)} variant="contained" color="secondary">Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
};

export default ManageProduct;