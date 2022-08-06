import { useState, useEffect } from "react"
import { CartButton } from "./CartButton"

export const Cartitem = ({ id, product_id, quantity }) => {
    let temp = quantity
    // console.log("tem", temp)
    const [quan, setquan] = useState(quantity)
    const handlequn = (val) => {
        if (quan < 0) {
            setquan(0)
        }
        else {

            setquan(quan + val)
        }
        // console.log(quan)
    }
    // useEffect(() => {
    //     const handleremove = () => {
    //         fetch(`http://localhost:8080/cart?id=${}`, {
    //             method: "DELETE"
    //         })
    //     }

    // }, ["http://localhost:8080/cart"])

    return <>
        <div>
            <h1>Cart Id : {id}</h1>
            <h1>Product Id : {product_id}</h1>
            <h2>
                Quantity : {quan}
            </h2>
            <CartButton handlequn={handlequn} />
        </div>
    </>
}