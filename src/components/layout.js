import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {container,
        heading,
        navLinks,
        navLinkItem,
        navLinkText,
        siteTitle} from './layout.module.css'

const Layout = ({pageTitle, pageHeading, children}) =>{
    const data= useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);
    return (
        <main className={container}>
            <title>{pageTitle + ' | ' + data.site.siteMetadata.title}</title>
            <p className={siteTitle}>{data.site.siteMetadata.title}</p>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home Page</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About Us Page</Link></li>
                    <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
                    <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact Us Page</Link></li>
                </ul>
            </nav>
      <h1 className={heading}>{pageHeading}</h1>
        {children}
        </main>
    )
}
export default Layout