import * as React from 'react'
import { Link } from 'gatsby'
import { 
    header,
    heading,
    container,
    mainContainer,
    navLinks,
    navLinkItem,
    navLinkText
 } from '../components/layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Layout = (({ pageTitle, children }) => {
    return (
        <div>
            <header className={header}>
                <h1 className={heading}>{ pageTitle }</h1>
                <ul>
                    <li>
                        <a href='https://www.facebook.com/benjamin.knorr.39'>
                        <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com/Bennie_Oni'>
                        <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/benjamin-knorr-642a50aa/'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>
                    <li>
                        <a href='http://wa.me/31612391911'>
                        <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </li>
                    <li>
                        <a href='mailto:benjaminkorr@hotmail.com'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </li>
                </ul>
            </header>
            <div className={container}>
                <main className={mainContainer}>{ children }</main>
                <nav>
                    <ul className={ navLinks }>
                        <li className={navLinkItem}>
                            <Link to='/' className={navLinkText}>
                                Home
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to='/about' className={navLinkText}>
                                About Me
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to='/skills' className={navLinkText}>
                                Skills
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
})

export default Layout