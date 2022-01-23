import { Search } from '@material-ui/icons'
import React from 'react'
import './haeder.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <img src="https://img-c.udemycdn.com/notices/web_banner/image_udlite/aaf7bcbb-9949-46e7-9bbb-4afc7446e64c.jpg" alt="" />
                <div className="header-wrap">
                    <div className="header-search">
                        <h1 className="header-search-title">Get there. From here.</h1>
                        <p className="header-search-desc">Welcome to the place where success begins. Log in for savings. Ends soon.</p>
                        <form className="header-search-wrap">
                            <input type="text" className="header-search-wrap-input" placeholder="What do you want to learn?" />
                            <button className="header-search-wrap-icon" >
                                <Search />
                            </button>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
