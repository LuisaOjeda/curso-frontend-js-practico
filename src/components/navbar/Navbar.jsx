import React from 'react'
import '../navbar/styles.css'

export const Navbar = () => {
    return (
        <nav>
            <img src="assetits/icon/icon_menu.png" alt="menu" class="menu" />

            <div class="navbar-left">
                <img src="assetits/logos/logo_yard_sale.png" alt="logo" class="logo" />

                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>

            <div class="navbar-right">
                <ul>
                    <li class="navbar-email">platzi@example.com</li>
                    <li class="navbar-shopping-cart">
                        <img
                            className='imgCar'
                            src="assetits/icon/icon_shopping_cart.png" alt="shopping cart" />
                        <div>2</div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
