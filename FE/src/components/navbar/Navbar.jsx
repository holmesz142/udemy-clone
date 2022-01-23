import { Public, Search } from "@material-ui/icons"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./navbar.scss"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router'
import { logoutUser, authRequest } from '../../redux/_actions/Auth/user.Action'


const Navbar = () => {
    const [toogle, setToogle] = useState(false)
    const history = useHistory();
    const currentUser = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authRequest())
    }, [dispatch, currentUser.isLogin])

    const logout = () => {
        dispatch(logoutUser());
        history.push("/");
    };
    const handleToogle = () => {
        if (toogle === false) {
            setToogle(true)
        } else {
            setToogle(false)
        }
    }
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo-container">
                    <a href="/" className="logo">
                        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="" />
                    </a>
                </div>
                <Link to="/courses" className="btn-category" >Courses</Link>
                <form className="form-search">
                    <button className="btn-search">
                        <Search />
                    </button>
                    <input type="text" className="search-input" placeholder="Search for anything" />
                </form>
                <div className="wrap-button">
                    <Link to='/classes' className="btn-teach">
                        <span>Classes</span>
                    </Link>
                </div>
                <div className={currentUser.isLogin ? "hide" : "wrap-button"}>
                    <Link to="/login-teacher" className="btn-teach">
                        <span>Become an instructor</span>
                    </Link>
                </div>

                <div className="auth">
                    {currentUser.isLogin ? (
                        <div className="action">
                            <div className="profile">
                                <img
                                    src={currentUser.avatar ? currentUser.avatar : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
                                    alt="avatar"
                                    onClick={handleToogle}
                                />
                            </div>
                            <div className={toogle ? "menu active" : "menu"}>
                                <h3>{currentUser.user.fullName}</h3>
                                <ul>
                                    <li>
                                        <Link
                                            to="/user"
                                            className="dropdown-item"
                                        >
                                            My Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/teacher-dashboard"
                                            className="dropdown-item"
                                        >
                                            Instructor dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            className="logout-btn"
                                            onClick={logout}
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Link to="/log-in">
                                <button className="btn btn--outline">Log in</button>
                            </Link>
                            <Link to="/register">
                                <button className="btn btn--primary">Sign up</button>
                            </Link>
                        </div>
                    )}

                </div>

            </div >
        </div >
    )
}

export default Navbar


