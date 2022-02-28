import React, { useState } from "react";
import "./NewProduct.css";

const NewProduct = () => {
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [rating, setRating] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState();
  const [picture, setPicture] = useState('');

  const onPictureChange = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };


  const data = {title, brand, category, description, price, stock, rating, discountPercentage, picture}
  console.log(data);

  return (
    <div className="create_product_container">
      <h6>Create a product by filling in the fields</h6>
      <form>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Brand</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            placeholder="Leave a product here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Rating</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Discount Percentage</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload the image</label>
          <input
            type="file"
            className="form-control"
            id="exampleInputEmail1"
            name="image"
            onChange={onPictureChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
