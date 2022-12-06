import React from 'react'
import '../detalleDelProducto/styles.css'

export const DetalleProducto = () => {
    return (
        <aside class="product-detail">
            <div class="product-detail-close">
                <img src="assetits/icon/icon_close.png" alt="close" />
            </div>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
            <div class="product-info">
                <p>$35,00</p>
                <p>Bike</p>
                <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                <button class="primary-button add-to-cart-button">
                    <img
                        className='imgShop'
                        src="assetits/icon/bt_add_to_cart.png" alt="add to cart" />
                    Add to cart
                </button>
            </div>
        </aside>
    )
}
