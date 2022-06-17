import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class nvbr extends React.Component {
render(){

    const { isAuthenticated } = this.props.auth;

    const userLinks = (
    <ul className="nav navbar-nav navbar-right">
        <li><Link to="#">Logout</Link></li>
    </ul>
    );
    
    const guestLinks = (
    <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup">sign up</Link></li>
        <li><Link to="/login">login</Link></li>
    </ul>
    );

    return (
        <nav>
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Red Dice</Link>
                </div>
    
                <div className="collapse navbar-collapse">
                    { isAuthenticated ? userLinks : guestLinks }  
                </div>
            </div>
        </nav>
      );
    }
}

nvbr.proptTypes = {
    auth: React.proptTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(nvbr);