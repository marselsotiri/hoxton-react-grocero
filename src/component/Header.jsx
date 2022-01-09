import Store from '../component/StoreItem'

function Header(props) {
    return <header id="store">
        <h1>Grocero</h1>
        <ul className="item-list store--item-list">
            <Store GrocieresToDisplay={props.GrocieresToDisplay} addItemToCart={props.addItemToCart} />
        </ul>
    </header>
}

export default Header