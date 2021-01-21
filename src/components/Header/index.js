import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
const Header = () => (
    <Fragment>
        <Link to="/">home</Link>
        <Link to="login">login</Link>
    </Fragment>
)
export default Header