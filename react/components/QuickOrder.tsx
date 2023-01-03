import React, { useState, useEffect } from 'react'
import { useMutation, useLazyQuery } from 'react-apollo'
import { useCssHandles } from 'vtex.css-handles'


import UPDATE_CART from '../graphql/updateCart.graphql'
import GET_PRODUCT from '../graphql/getProductBySku.graphql'
import './styles.css'


const QuickOrder = () => {
  const CSS_HANDLES = ['quickOrder-container', 'quickOrder-content' ,'quickOrder-input', 'quickOrder-submitButton']
  const handles = useCssHandles(CSS_HANDLES)
  const [inputText, setInputText] = useState("")
  const [search, setSearch] = useState("")

  const [getProductData, {data: product}] = useLazyQuery(GET_PRODUCT)
  const [addToCart] = useMutation(UPDATE_CART)

  const handleChange = (event: any) => {
    setInputText(event.target.value)
    console.log(inputText)
  }

  useEffect(() => {
    console.log("el resultado es:", product, search)
    if(product) {
      const {productId} = product.product
      let skuId = parseInt(productId)
      addToCart({
        variables: {
          salesChannel: "1",
          items: [
            {
              id: skuId,
              quantity: 1,
              seller: "1"
            }
          ]
        }
      })
      .then(() => {
        window.location.href = "/checkout"
      })
    }
  }, [product, search])

  const addProductToCart = () => {
    getProductData({
      variables: {
        sku: inputText
      }
    })
  }

  const searchProduct = (event: any) => {
    event.preventDefault()
    if(!inputText) alert("no hay producto a comprar")
    setSearch(inputText)
    addProductToCart()
  }

  return (
    <div className={`${handles['quickOrder-container']} flex flex-column`}>
      <h2>Compra rápida</h2>
      <form className={`${handles['quickOrder-content']} flex flex-column`} onSubmit={searchProduct}>
        <div className='flex'>
          <label className='mr4' htmlFor='sku'>Ingresa el numero SKU</label>
          <input className={`${handles['quickOrder-input']}`} id='sku' type='text' onChange={handleChange}></input>
        </div>
        <input className={`${handles['quickOrder-submitButton']}`} type='submit' value="Añadir al carrito" />
      </form>
    </div>
  )
}

export default QuickOrder
