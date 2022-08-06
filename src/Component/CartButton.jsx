export const CartButton = ({handlequn}) =>{
    return <>
    <button onClick={() => {handlequn(1)}}>Increase Quantity</button>
    <button onClick={() => {handlequn(-1)}}>Decrasse Quantity</button>
    <button >Remove from Cart</button>
    </>
}