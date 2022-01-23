import "./sidebar.scss";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    Add,
    Class, School
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router'
import { authRequest } from '../../../../redux/_actions/Auth/user.Action'


export default function Sidebar() {
    const currentUser = useSelector(state => state.user)
    // console.log(currentUser.user._id)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authRequest())
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/teacher-dashboard" className="link">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <Link to={`/teacher-class/${currentUser.user._id}`} className="link">
                            <li className="sidebarListItem">
                                <Class className="sidebarIcon" />
                                Classes
                            </li>
                        </Link>
                        <Link to={`/teacher-new-class`} className="link">
                            <li className="sidebarListItem">
                                <School className="sidebarIcon" />
                                New Class
                            </li>
                        </Link>
                        <Link to={`/teacher-course/${currentUser.user._id}`} className="link">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon" />
                                Courses
                            </li>
                        </Link>
                        <Link to="/teacher-new-course" className="link">
                            <li className="sidebarListItem">
                                <Add className="sidebarIcon" />
                                New Course
                            </li>
                        </Link>
                    </ul>
                </div>

            </div>
        </div>
    );
}
