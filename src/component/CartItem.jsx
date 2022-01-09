
function Item(props) {
    return <>
        {
            props.GrocieresToDisplay.map((grociero) => {
                if (grociero.amountInCart)
                    return (<li key={grociero.id}>
                        <img
                            className="cart--item-icon"
                            src={`./assets/icons/${grociero.id.toString().padStart(3, 0)}-${grociero.name}.svg`}
                            alt={grociero.name}
                        />
                        <p>{grociero.name}</p>
                        <button className="quantity-btn remove-btn center"
                        onClick={() => props.removeItemFromCart(grociero)}
                        >-</button>
                        <span className="quantity-text center">{grociero.amountInCart}</span>
                        <button className="quantity-btn add-btn center"
                        onClick={() => props.addItemToCart(grociero)}
                        >+</button>
                    </li>
                    )
            }
            )


        }

    </>
}

export default Item