import '../Styles/ShoppingPage.css';

function Item() {
    return (
        <div className="item-card item row gp-12">
            <div className="item-image">
                <img src="mc-icon.png" alt="" />
            </div>
            <div className="item-description col">
                <h3>Item Name</h3>
                <p>Item Description</p>
                <h1>$2</h1>
                <div className="button shop">Add to cart</div>
            </div>
        </div>
    )
}

export default function ShoppingPage() {
    return (
        <>
            <div className="shopping-container"></div>
            <div className="document-shop-container">
                <div className="document-shop flex col gp-12">
                    <div className="row al-ctr jc-sb">
                        <h1>Shop</h1>
                        <span className="material-symbols-rounded shopping-cart-icon">shopping_cart</span>
                    </div>

                    <div className="search-bar row">
                        <input type="text" placeholder='Search Item' />
                    </div>
                    <h3>Search Results</h3>
                    <div className="items-container flx-wrp row gp-16">
                        <h1>Coming Soon</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
