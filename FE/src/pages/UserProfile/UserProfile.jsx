import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../home/components/footer/Footer";
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router'
import { authRequest, updateProfileApi } from '../../redux/_actions/Auth/user.Action'

export default function UserProfile() {
    const refStep1 = useRef(null)
    const currentUser = useSelector(state => state.user)
    // console.log(currentUser)
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        dispatch(authRequest())
    }, [])

    const updateUser = async (e) => {
        e.preventDefault()
        const { FullName, Email, PhoneNumber, Address, Avatar } = refStep1.current

        const obj = {
            FullName: FullName.value,
            Email: Email.value,
            PhoneNumber: PhoneNumber.value,
            Address: Address.value,
            Avatar: Avatar.value
        }

        const res = await dispatch(updateProfileApi(currentUser.user._id, obj))
        if (res === true) {
            console.log("update user thanh cong")
            history.push("/user")

        }
    }

    return (
        <>
            <Navbar />
            <div className="user">
                <div className="userTitleContainer">
                    <h1 className="userTitle">User Profile</h1>
                </div>
                <div className="userContainer">
                    <div className="userShow">
                        <div className="userShowTop">
                            <img
                                src={currentUser.user.avatar ? currentUser.user.avatar : "https://64.media.tumblr.com/32968f251b2637db7629c0be2b3e79d3/25a00bf427f54f07-b3/s1280x1920/f88e8339861061edb289eca044957ddc40b1e12c.jpg"}
                                alt=""
                                className="userShowImg"
                            />
                            <div className="userShowTopTitle">
                                <span className="userShowUsername">{currentUser.user.fullName}</span>
                                <span className="userShowUserTitle">Student</span>
                            </div>
                        </div>
                        <div className="userShowBottom">
                            <span className="userShowTitle">Account Details</span>
                            <div className="userShowInfo">
                                <PermIdentity className="userShowIcon" />
                                <span className="userShowInfoTitle">{currentUser.user.fullName}</span>
                            </div>
                            {/* <div className="userShowInfo">
                                <CalendarToday className="userShowIcon" />
                                <span className="userShowInfoTitle">10.12.1999</span>
                            </div> */}
                            <span className="userShowTitle">Contact Details</span>
                            <div className="userShowInfo">
                                <PhoneAndroid className="userShowIcon" />
                                <span className="userShowInfoTitle">{currentUser.user.phoneNumber}</span>
                            </div>
                            <div className="userShowInfo">
                                <MailOutline className="userShowIcon" />
                                <span className="userShowInfoTitle">{currentUser.user.email}</span>
                            </div>
                            <div className="userShowInfo">
                                <LocationSearching className="userShowIcon" />
                                <span className="userShowInfoTitle">{currentUser.user.address}</span>
                            </div>
                        </div>
                    </div>
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Edit</span>
                        <form className="userUpdateForm" ref={refStep1}>
                            <div className="userUpdateLeft">

                                <div className="userUpdateItem">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        placeholder={currentUser.user.fullName}
                                        className="userUpdateInput"
                                        name="FullName"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        placeholder={currentUser.user.email}
                                        className="userUpdateInput"
                                        name="Email"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        placeholder={currentUser.user.phoneNumber ? currentUser.user.phoneNumber : '+84 123 456 789'}
                                        className="userUpdateInput"
                                        name="PhoneNumber"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        placeholder={currentUser.user.address ? currentUser.user.address : 'Ho Chi Minh || VietNam'}
                                        className="userUpdateInput"
                                        name="Address"
                                    />
                                </div>
                            </div>
                            <div className="userUpdateRight">
                                <div className="userUpdateUpload">
                                    <img
                                        className="userUpdateImg"
                                        src={currentUser.user.avatar ? currentUser.user.avatar : "https://64.media.tumblr.com/32968f251b2637db7629c0be2b3e79d3/25a00bf427f54f07-b3/s1280x1920/f88e8339861061edb289eca044957ddc40b1e12c.jpg"}
                                        alt=""
                                    />
                                    <label htmlFor="file">
                                        <Publish className="userUpdateIcon" />
                                    </label>
                                    <input name="Avatar" type="file" id="file" style={{ display: "none" }} />
                                </div>
                                <button className="userUpdateButton" onClick={updateUser} >Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
