import React from 'react'
import '../email/styles.css'

export const Email = () => {
    return (
        <div class="login">
            <div class="form-container">
                <img src="assetits/logos/logo_yard_sale.png" alt="logo" class="logo" />

                <h1 class="title">Email has been sent!</h1>
                <p class="subtitle">Please check your inbox for instructions on how to reset the password</p>

                <div class="email-image">
                    <img src="assetits/icon/email.png" alt="email" />
                </div>

                <button class="primary-button login-button">Login</button>

                <p class="resend">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    )
}
