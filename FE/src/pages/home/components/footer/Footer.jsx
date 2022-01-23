import { Link } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-list-link">
                    <div className="footer-list-link-item">
                        <ul className="link-column">
                            <li className="li-link">
                                <Link to="/" className="link">Udemy Business</Link>
                            </li>
                            <li className="li-link">
                                <Link to="/" className="link">Teach on Udemy</Link>
                            </li>
                            <li className="li-link"><Link to="/" className="link">Get the app</Link></li>
                            <li className="li-link"><Link to="/" className="link">About us</Link></li>
                            <li className="li-link"><Link to="/" className="link">Contact us</Link></li>
                        </ul>
                        <ul className="link-column">
                            <li className="li-link"><Link to="/" className="link">Careers</Link></li>
                            <li className="li-link"><Link to="/" className="link">Blog</Link></li>
                            <li className="li-link"><Link to="/" className="link">Help and Support</Link></li>
                            <li className="li-link"><Link to="/" className="link">Affiliate</Link></li>
                        </ul>
                        <ul className="link-column">
                            <li className="li-link"><Link to="/" className="link">Terms</Link></li>
                            <li className="li-link"><Link to="/" className="link">Privacy policy</Link></li>
                            <li className="li-link"><Link to="/" className="link">Sitemap</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="logo-container">
                    <div className="logo">
                        <a href="/">
                            <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="" className="footer-logo" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
