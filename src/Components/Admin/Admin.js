import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div style={{display:'flex',marginLeft:"5%",marginTop:'5%'}}>
          <div>
          <Link  to="/addBook">Add book</Link>
            <br/>
            <Link  to="/manageProduct">Manage Product</Link>
          </div>
            
            <div style={{marginLeft:"10%"}}>
            <h2>This is Admin Panel</h2>
            <br/>
            <p>Here you can add a new Book <Link  to="/addBook">click here</Link></p>
            
            <p>or,</p>
            
            <p>You can change your old book  <Link  to="/manageProduct">click here</Link></p>
            </div>
        </div>
    );
};

export default Admin;