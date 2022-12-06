import React from 'react'
import '../menu/styles.css'

export const Menu = () => {
    return (
        <div class="desktop-menu">
            <ul>
                <li>
                    <a href="/" class="title">My orders</a>
                </li>

                <li>
                    <a href="/">My account</a>
                </li>

                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
        </div>
    )
}
