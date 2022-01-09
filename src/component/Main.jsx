import Item from '../component/CartItem'

function Main(props) {
    return <main id="cart">
        <h2>Your Cart</h2>

        <div className="cart--item-list-container">
            <ul className="item-list cart--item-list">
                <Item GrocieresToDisplay={props.GrocieresToDisplay} addItemToCart={props.addItemToCart} removeItemFromCart={props.removeItemFromCart} />
            </ul>
        </div>

        <div className="total-section">
            <div>
                <h3>Total</h3>
            </div>

            <div>
                <span className="total-number">£{props.getTotal().toFixed(2)}</span>
            </div>
        </div>
    </main>
}

export default Main