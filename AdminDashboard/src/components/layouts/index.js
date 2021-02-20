import React from 'react'
import Header from '../header/index';

/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    )

}

export default Layout;