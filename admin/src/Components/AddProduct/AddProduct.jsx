import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";
import { backend_url } from "../../App";
import Modal from "../Modal/Modal";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    image: "",
    category: "sunglasses",
    new_price: "",
    old_price: ""
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!productDetails.name) newErrors.name = "Il titolo prodotto è obbligatorio.";
    if (!productDetails.description) newErrors.description = "La descrizione prodotto è obbligatoria.";
    if (!productDetails.new_price) newErrors.new_price = "Il nuovo prezzo è obbligatorio.";
    if (!productDetails.category) newErrors.category = "La categoria prodotto è obbligatoria.";
    if (!image) newErrors.image = "L'immagine del prodotto è obbligatoria.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const AddProduct = async () => {
    if (!validateForm()) return; // Non procedere se ci sono errori

    let dataObj;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch(`${backend_url}/upload`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    }).then((resp) => resp.json())
      .then((data) => { dataObj = data });

    if (dataObj.success) {
      product.image = dataObj.image_url;
      await fetch(`${backend_url}/addproduct`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          setModalMessage(data.success ? "Prodotto aggiunto con successo" : "Prodotto non aggiunto");
          setIsModalOpen(true);
        });
    }
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Titolo prodotto</p>
        <input 
          type="text" 
          name="name" 
          value={productDetails.name} 
          onChange={changeHandler} 
          placeholder="Inserisci" 
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="addproduct-itemfield">
        <p>Descrizione prodotto</p>
        <input 
          type="text" 
          name="description" 
          value={productDetails.description} 
          onChange={changeHandler} 
          placeholder="Inserisci" 
        />
        {errors.description && <p className="error">{errors.description}</p>}
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Prezzo vecchio</p>
          <input 
            type="number" 
            name="old_price" 
            value={productDetails.old_price} 
            onChange={changeHandler} 
            placeholder="Inserisci" 
          />
          {errors.old_price && <p className="error">{errors.old_price}</p>}
        </div>
        <div className="addproduct-itemfield">
          <p>Prezzo nuovo</p>
          <input 
            type="number" 
            name="new_price" 
            value={productDetails.new_price} 
            onChange={changeHandler} 
            placeholder="Inserisci" 
          />
          {errors.new_price && <p className="error">{errors.new_price}</p>}
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Categoria prodotto</p>
        <select 
          value={productDetails.category} 
          name="category" 
          className="add-product-selector" 
          onChange={changeHandler}
        >
          <option value="sunglasses">Occhiali da sole</option>
          <option value="eyewear">Occhiali da vista</option>
        </select>
        {errors.category && <p className="error">{errors.category}</p>}
      </div>
      <div className="addproduct-itemfield">
        <p>Immagine prodotto</p>
        <label htmlFor="file-input">
          <img 
            className="addproduct-thumbnail-img" 
            src={!image ? upload_area : URL.createObjectURL(image)} 
            alt="" 
          />
        </label>
        <input 
          onChange={(e) => setImage(e.target.files[0])} 
          type="file" 
          name="image" 
          id="file-input" 
          accept="image/*" 
          hidden 
        />
        {errors.image && <p className="error">{errors.image}</p>}
      </div>
      <button className="addproduct-btn" onClick={AddProduct}>Aggiungi</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} message={modalMessage} />
    </div>
  );
};

export default AddProduct;
