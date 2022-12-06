import React from 'react'
import '../login/styles.css'

export const Login = () => {
    return (
        <div class="login">
            <div class="form-container">
                <img src="assetits/logos/logo_yard_sale.png" alt="logo" class="logo" />

                <form action="/" class="form">
                    <label class="label">Email address</label>
                    <input type="text" id="email" placeholder="platzi@example.cm" class="input input-email" />

                    <label class="label">Password</label>
                    <input type="password" id="password" placeholder="*********" class="input input-password" />

                    <input type="submit" value="Log in" class="primary-button login-button" />
                    <a href="/">Forgot my password</a>


                </form>

                <button class="secondary-button signup-button">Sign up</button>
            </div>
        </div>
    )
}
