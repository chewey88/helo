import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


const Nav = () => {
    
    return (
        <nav className="nav-buttons">
            <div className="nav-links">
                <Link to='/dashboard'>Home</Link>
                <Link to='/post'>New Post</Link>
                <Link to='/auth'>Logout</Link>
            </div>
        </nav>
        
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(Nav)
    
