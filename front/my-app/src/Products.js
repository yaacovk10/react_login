import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Pay from './Paypal'


const Products = () => {
  // const MY_SERVER = 'http://127.0.0.1:8000/products'
  // const [catsrv, setcatsrv] = useState(`http://127.0.0.1:8000/categories/${useParams().categoriesId}/products/`)
  let temp = useParams().categoriesId
  const { categoriesId } = useParams();
  const [prods, setProds] = useState([]);
  const [cart, setcart] = useState([])
  const [refresh, setrefresh] = useState(false)
  const [total, settotal] = useState(0)

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/categories/${categoriesId}/products/`).then(res => setProds(res.data))
  }, [categoriesId])

  useEffect(() => {
    //update display
    let temp = 0
    cart.forEach(prd=>(temp+= prd.amount *prd.price))
    settotal(temp)
  }, [cart, refresh])

  const add2Cart = (prod, amount) => {

    // let exist = cart.filter(prod => prod.id === orderItem.id)
    if (cart.filter(prd => prd.id === prod.id).length) {
      const found = cart.find((element) => element.id === prod.id)
      if (found.amount + amount == 0) //check if amount is 0
      {
        // remove : return all the cart without the product with amount 0
        setcart(cart.filter((element) => element.id != prod.id))
      }
      else {
        found.amount += amount
      }
      setrefresh(!refresh)
    }
    else {
      let orderItem = { id: prod.id, name: prod.name, amount: 1, price: prod.price }
      setcart([...cart, orderItem])
    }
  }

  return (
    <div>Products
      <h1>Category: {categoriesId}</h1>
      <div>
        {prods.map(product => (
          <div>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <button onClick={() => add2Cart(product, 1)}>BUY</button>
          </div>
        ))}
      </div>
      <br />
      <h1>Your cart only {total}</h1>
      <div>
        {cart.map(product => (
          <div>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p><button onClick={() => add2Cart(product, -1)}>-</button>Amount : {product.amount}<button onClick={() => add2Cart(product, 1)}>+</button></p>

          </div>
        ))}
      </div>
      <Pay></Pay>
    </div>
  )
}

export default Products