import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import "./AddBook.css"

const AddBook = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = data => {
    const eventData = {
      name: data.name,
      amount: data.amount,
      imageURL: imageURL,
    };
    const url = `http://localhost:5005/addBook`;

    console.log(eventData);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server', res))
  };

  const handelImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'bbd345fb35c0d562d641bb02a250865b');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="book">
      <form onSubmit={handleSubmit(onSubmit)}>
       <div className="input">
       <div>
          <h5>Book Name :</h5>
          <input name="name" required defaultValue="Book Name" ref={register} />

        </div>
        <div>
          <h5>Add Price :</h5>
          <input name="amount" required ref={register({ required: true })} />

        </div>
       </div>
        
        <input name="imageURL" type="file" onChange={handelImageUpload} />
        <br />

        <input type="submit" />
        
      </form>
    </div>
  );
};

export default AddBook;