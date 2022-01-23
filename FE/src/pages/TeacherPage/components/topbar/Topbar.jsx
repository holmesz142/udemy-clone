import React from "react";
import "./topbar.scss";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router'
import { Link } from "react-router-dom"
import { logoutUser, authRequest } from '../../../../redux/_actions/Auth/user.Action'


export default function Topbar() {
    const [toogle, setToogle] = useState(false)
    const history = useHistory();
    const currentUser = useSelector(state => state.user)
    // console.log(currentUser.user._id)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authRequest())
    }, [])

    const logout = () => {
        dispatch(logoutUser());
        history.push("/");
    };


    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Welcome back, {currentUser.user.fullName}</span>
                </div>
                <div className="topRight">
                    <Link to='/' className="student-switch-btn">
                        Student
                    </Link>
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="topAvatar" />
                    <a className="btn-logout" onClick={logout}>Logout</a>
                </div>
            </div>
        </div>
    );
}
