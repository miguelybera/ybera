import * as React from "react";
import { Link } from "gatsby";
import {container, heading, navLinks, navLinkItem, navLinkText} from './layout.module.css'


const Layout = ({pageTitle, pageHeading, children}) =>{
    return (
        <main className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home Page</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About Us Page</Link></li>
                    <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact Us Page</Link></li>
                </ul>
            </nav>
      <h1 className={heading}>{pageHeading}</h1>
        {children}
        </main>
    )
}
export default Layout