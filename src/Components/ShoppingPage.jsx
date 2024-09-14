import { useContext, useEffect, useState } from 'react';
// import '../Styles/ShoppingPage.css';
import { ShoppingCartContext } from '../Contexts/shoppingCart';

function ItemIncrement({ item, setItems, handleRemoveItem, handleAddItem }) {
    const [counter, setCounter] = useState(1);
    const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContext);

    return (
        <div className="item-increment flex row al-ctr jc-ctr gp-8">
            <div className='flex row al-ctr remove-item'
                onClick={() => {
                    handleRemoveItem(item.id);
                }}
            >
                <span className="material-symbols-rounded">remove</span>
            </div>
            <div className='flex row jc-ctr al-ctr'
                style={{
                    height: '100%',
                    flexGrow: 1,
                    backgroundColor: 'white',
                }}
            >
                <p>{item.quantity}</p>
            </div >
            <div className='flex row al-ctr add-item'
                onClick={() => {
                    handleAddItem(item.id);
                }}
            >
                <span className="material-symbols-rounded">add</span>
            </div>
        </div>
    )
}

function Item({ item, handleAddtoCart, handleRemoveItem, handleAddItem }) {
    const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContext);
    return (
        <div className="item-card item col gp-12">
            <div className="item-image">
                <img src="mc-icon.png" alt="" />
            </div>
            <div className="item-description col gp-4">
                <div className='flex row jc-sb al-ctr'>
                    <p
                        style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            textTransform: 'capitalize'
                        }}
                    >{item.name}</p>
                    {/* <p>{item.description ? item.description : 'No description provided'}</p> */}
                    <p
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: 600
                        }}
                    >{`$${item.price}`}</p>
                </div>
                <p
                    style={{
                        fontSize: '0.8rem',
                        fontWeight: 400,
                        paddingBottom: '0.5rem'
                    }}
                >{item.description ? item.description : 'No Description Provided'}</p>
                {
                    item.inCart ?
                        <ItemIncrement item={item} handleRemoveItem={handleRemoveItem} handleAddItem={handleAddItem} />
                        :
                        <div className={`button shop flex row gp-8 al-ctr jc-ctr`}
                            onClick={() => {
                                handleAddtoCart(item.id);
                            }}
                        >
                            <p>
                                Add to Cart
                            </p>
                        </div>
                }


            </div>
        </div >
    )
}

function ShoppingCartItem({ item }) {
    console.log(item);
    return (
        <div className='cart-item flex row al-ctr gp-12'>
            <div className='cart-item-image'>
                <img src="sahil.png" alt="" />
            </div>
            <div className='cart-item-desc flex row jc-sb'
                style={{
                    width: '100%'
                }}
            >
                <p
                    style={{
                        textTransform: 'capitalize'
                    }}
                >{item.name} {`(x${item.quantity})`}</p>
                <p>{`$${item.quantity * item.price}`}</p>
            </div>
        </div>
    )
}

export default function ShoppingPage() {
    const [items, setItems] = useState(null);
    const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContext);
    useEffect(() => {
        console.log('Shopping Page Mounted', shoppingCart);
    })
    useEffect(() => async () => {
        const response = await fetch('http://localhost:3000/items');
        const data = await response.json();
        const newData = data.map((item) => ({
            ...item, // Spread the original item properties
            inCart: false, // Add new property
            quantity: 0    // Add new property
        }));
        setItems(newData);
    }, [])
    function handleAddtoCart(id) {
        const newItems = items.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    inCart: true,
                    quantity: 1
                }
            }
            else {
                return item;
            }
        })
        setItems(newItems);
        const shoppingCartItems = newItems.filter((item) => item.inCart);
        setShoppingCart(shoppingCartItems);
        // const item = newItems.find((item) => item.id === id);
        // setShoppingCart([...shoppingCart, item]);
    }
    function handleRemoveItem(id) {
        const newItems = items.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    inCart: item.quantity > 1,
                    quantity: item.quantity == 0 ? 0 : item.quantity - 1
                }
            }
            else {
                return item;
            }
        })
        setItems(newItems);
        const shoppingCartItems = newItems.filter((item) => item.inCart);
        setShoppingCart(shoppingCartItems);
    }
    function handleAddItem(id) {
        const newItems = items.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            else {
                return item;
            }
        })
        setItems(newItems);
        const shoppingCartItems = newItems.filter((item) => item.inCart);
        setShoppingCart(shoppingCartItems);
    }
    return (
        <>
            <div className="shopping-container"></div>
            <div className="document-shop-container">
                <div className="document-shop flex col gp-12">
                    <div className="row al-ctr jc-sb">
                        <h1>Shop</h1>
                        <div className='shopping-cart-container'>
                            <span className="material-symbols-rounded shopping-cart-icon">shopping_cart</span>
                            <p className='unread-count'>
                                {shoppingCart.length}
                            </p>
                            <div className='shopping-cart-overlay flex col'>
                                <div className='flex row al-ctr shopping-cart-header'>
                                    <p>Shopping Cart</p>
                                </div>
                                {
                                    shoppingCart.length > 0 ?
                                        shoppingCart.map((item, index) =>
                                            <>
                                                <ShoppingCartItem key={item.id} item={item} />
                                                {
                                                    index !== shoppingCart.length - 1 ?
                                                        <div className='divider'></div>
                                                        :
                                                        null
                                                }
                                            </>
                                        )
                                        :
                                        <p className='empty-cart'
                                            style={{
                                                padding: '1rem'
                                            }}
                                        >Cart is Empty</p>
                                }
                                <div className='divider'></div>
                                <div className='cart-item-footer flex col gp-12'>
                                    <div className='flex row al-ctr jc-sb'>
                                        Cart Total
                                        <h3>
                                            {`$${shoppingCart.reduce((acc, item) => acc + (item.price * item.quantity), 0)}`}
                                        </h3>
                                    </div>
                                    <div className='button checkout flex row al-ctr jc-ctr'>
                                        <p>Checkout</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="search-bar row">
                        <div className='flex row search-container al-ctr'>
                            <input type="text" placeholder='Search Item' />
                            <span className="material-symbols-rounded search-icon-bar">search</span>
                        </div>

                    </div>
                    <h3>Search Results</h3>
                    <div className="items-container flx-wrp row gp-16">
                        {/* <h1>Coming Soon</h1> */}
                        {
                            items ?
                                items.map((item, index) =>
                                    <Item key={index} item={item} handleAddtoCart={handleAddtoCart} handleRemoveItem={handleRemoveItem} handleAddItem={handleAddItem} />
                                )
                                :
                                <h1>Loading...</h1>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
