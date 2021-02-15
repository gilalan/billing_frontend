import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { logout } from '../../auth/AuthActions';
import userProfileLogo from '../../../public/assets/imgs/connor.jpg';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    changeOpen() {
        console.log('state: ', this.state.open);
        this.setState({ open: !this.state.open });
    }

    render() {
        const { name, email } = this.props.user;
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    {/* User Account: style can be found in dropdown.less */}
                    <li onMouseLeave={() => this.changeOpen()}
                        className={`dropdown user user-menu ${this.state.open ? "open" : ""}`}>
                        <a href="javascript:;" onClick={() => this.changeOpen()}
                            aria-expanded={this.state.open ? "true" : "false"}
                            className="dropdown-toggle"
                            data-toggle="dropdown">
                            <img src={userProfileLogo} className="user-image" alt="User" />
                            <span className="hidden-xs">{name}</span>
                        </a>
                        <ul className="dropdown-menu">
                            {/* User image */}
                            <li className="user-header">
                                <img src={userProfileLogo} className="img-circle" alt="User" />
                                <p>
                                    {name}
                                    <small>{email}</small>
                                </p>
                            </li>
                            {/* Menu Body */}
                            <li className="user-body">
                            </li>
                            {/* Menu Footer*/}
                            <li className="user-footer">
                                <div className="pull-right">
                                    <a href="#" onClick={this.props.logout}
                                        className="btn btn-default btn-flat">Sair</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);