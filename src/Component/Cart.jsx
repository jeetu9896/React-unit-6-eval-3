import { useState } from "react"
import { useEffect } from "react"
import { Cartitem } from "./CartItem"

export const Cart =  () => {
  const [cartdata,setcartdata] =useState([])
  
    useEffect(() =>{
        fetch('http://localhost:8080/cart')
        .then((res) => res.json())
        .then((res) =>
        setcartdata(res)
        )
    },["http://localhost:8080/cart"])

  console.log(cartdata)
    return <> 
    {
        cartdata.map((item) => (
        //   console.log(item)  
        <Cartitem   id ={item.id} product_id= {item.product_id} quantity ={item.quantity}  />
        ))
    }
    </>
}