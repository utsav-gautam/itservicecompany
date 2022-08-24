import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import './Navbar.css'
class Navtest extends Component {
    render(){
        return (
            <>
                <div className='navbar'>
                    <div className="nav-container">
                        <Link to='/' className='nav-logo'>
                            <h1 >Digital Rocketship</h1>
                            <i className="fa-solid fa-rocket"></i>
                        </Link>
                        <i class="fa-solid fa-rocket-launch"></i>
                        <div className='nav-menu'>
                            {MenuItems.map((item, index) => {
                                return (<h4>
                                    <Link to={item.url} className={item.className}>
                                        {item.title}
                                    </Link>
                                </h4>)
                            })}
                        </div>
                        <Link style={{backgroundColor: this.props.flag?'seagreen':'black'}} to='/login' className='login'><h3>login</h3></Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Navtest;