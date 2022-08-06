export const Productitem = ({item}) => {
    return <> 
        <div>
            <img src="item.image" />
            <h1>Brand {item.brand}</h1>
            <h2>{item.title}</h2>
            <h3>Category: {item.category}</h3>
            <h4>Price : {item.price}</h4>
            <button >Add to Card</button>
        </div>
    </>
}