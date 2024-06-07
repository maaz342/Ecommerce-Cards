import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details: ', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Product Details</h1>
      <hr />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <table className="table table-bordered table-hover">
            <tbody>
              <tr>
                <th>Title:</th>
                <td className='text-center'>{product.title}</td>
              </tr>
              <tr>
                <th>Description:</th>
                <td className='text-center'>{product.description}</td>
              </tr>
              <tr>
                <th>Price:</th>
                <td className='text-center'>${product.price}</td>
              </tr>
              <tr>
                <th>Category:</th>
                <td className='text-center'>{product.category}</td>
              </tr>
              <tr>
                <th>Image:</th>
                <td className='text-center'>
                  <img src={product.image} alt={product.title} className="img-fluid" style={{ maxWidth: '200px' }} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};



export default ProductDetails;
