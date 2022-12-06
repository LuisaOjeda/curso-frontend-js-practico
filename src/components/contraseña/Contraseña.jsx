import React from 'react'
import '../contraseña/styles.css'

export const Contraseña = () => {
    return (
        <div className='login'>


            <div className="form-container">
                <div className="form-container">
                    <img src="assetits/logos/logo_yard_sale.png" alt="logo" className="logo" />

                    <h1 className="title">Create a new password</h1>
                    <p className="subtitle">Enter a new passwrd for yue account</p>

                    <form action="/" className="form">
                        <label className="label">Password</label>
                        <input type="password" id="password" placeholder="*********" className="input input-password" />

                        <label className="label">Password</label>
                        <input type="password" id="new-password" placeholder="*********" className="input input-password" />

                        <input type="submit" value="Confirm" className="primary-button login-button" />
                    </form>
                </div>
            </div>
        </div>
    )
}

