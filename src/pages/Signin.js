import React from 'react'
import classes from './Signin.module.css'
import { Link } from 'react-router-dom'

function Signin() {
    return (
        <div className={classes.wrapper} >
            <div className={classes.titleContainer}>
                <h1>OpenBoard</h1>
            </div>
            <div className={classes.container}>

                <h1>Sign In</h1>
                <h3>Sign in to your account</h3>
                <div>
                    <button>Sign in with Google</button>
                    <button>Sign in with Apple</button>
                </div>
                <form className={classes.form}>
                    <label>Email Address</label>
                    <input type='email' />
                    <label>Password</label>
                    <input type='password' />
                    <Link><a href='/'>Forgot Password?</a></Link>
                    <Link to='/' > <button>Sign In</button> </Link>
                </form>
                <p>Don't have an account?</p><span><a href='/'>Register Here</a></span>

            </div>
        </div>
    )
}

export default Signin