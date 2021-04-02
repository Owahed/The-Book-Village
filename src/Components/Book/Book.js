import React from 'react';
import { useHistory } from 'react-router';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';


const Book = ({ book }) => {
    const id = book._id;

    const history = useHistory();
    const handelClick = (id) => {
        history.push(`/product/${id}`)
    }

    return (
        <div style={{ textAlign: "center",marginLeft: "10%",marginTop:"20px" }}>


            <Card style={{ width: '18rem',textAline:'center' }}>
                <Card.Img variant="top" style={{height:'300px',padding:'20px'}} src={book.imageURL} />
                <Card.Body>
                    <Card.Title>{book.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Price: ${book.amount}</Card.Subtitle>

                    <Button onClick={() => handelClick(id)}>Buy Now</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Book;