import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Products = () => {
  // const MY_SERVER = 'http://127.0.0.1:8000/products'
  // const [catsrv, setcatsrv] = useState(`http://127.0.0.1:8000/categories/${useParams().categoriesId}/products/`)
  let temp = useParams().categoriesId
  const { categoriesId } = useParams();
  const [prods, setProds] = useState([]);


  useEffect(() => {
    // axios.get(`http://127.0.0.1:8000/categories/${temp}/products/`).then(res=> console.log(res.data))
    axios.get(`http://127.0.0.1:8000/categories/${categoriesId}/products/`).then(res => setProds(res.data))
  }, [categoriesId])
  
    return (
    <div>Products
        <h1>Category: {categoriesId}</h1>
            <div>
                {prods.map(product => (
                    <div>
                        <p>Name: {product.name}</p>
                        <p>Price: {product.price}</p>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Products