import { useState } from "react"
import { useEffect } from "react"
import { Productitem } from "./Productitem"

export const Product = () => {
    const [productdata, setproductdata] = useState([])
    const Product = () => {
        fetch("http://localhost:8080/products")
        .then((res) => res.json())
        .then((res) =>
        setproductdata(res))
    }
    // console.log(productdata)
    useEffect(() => {
        Product()
    },[])
    return <>
           <div> 
            {
                productdata.map((item) => (
                    <div>
        
                        <Productitem item={ item} />
                    </div>
                ))
            }
           </div>
        
    </> 
}