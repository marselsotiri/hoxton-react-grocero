

function Store(props) {
    return <>
        {
            props.GrocieresToDisplay.map(grociero => (
                <li>
                    <div className="store--item-icon">
                        <img src={`./assets/icons/${grociero.id.toString().padStart(3, 0)}-${grociero.name}.svg`} alt={grociero.name} />
                    </div>
                    <button
                        onClick={() => props.addItemToCart(grociero)}
                    >Add to cart</button>
                </li>
            ))
        }

    </>
}

export default Store