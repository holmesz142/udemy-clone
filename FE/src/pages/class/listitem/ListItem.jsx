import React from 'react'
import { Link } from 'react-router-dom'
import './listItem.scss'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { updateClass } from "../../../redux/_actions/Class/class.Action"
import { authRequest } from "../../../redux/_actions/Auth/user.Action"
import dayjs from 'dayjs'

const ListItem = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const currentUser = useSelector(state => state.user)
    // console.log(currentUser)
    // const currentClass = useSelector(state => state.)
    useEffect(() => {
        dispatch(authRequest())
    }, [])
    const handleEnroll = async () => {
        const idUser = currentUser.user._id
        const idClass = [props.idClass]

        const res = await dispatch(updateClass({
            _id: idClass,
            students: idUser
        }))
        if (res) {
            alert("Tham gia lớp học thành công")
            console.log("enroll thanh cong")
        }

    }

    return (
        <div className="wrapper">
            <div className="list-item">
                <div className="img-container">
                    <img className="list-item-img" src={props.imgSrc} alt="" />
                </div>
                <h4 className="list-item-desc">{props.courseTitle}</h4>
                <p className="list-item-author">{props.courseAuthor}</p>
                <span className="list-item-price">{props.coursePrice}$</span>
                <div className='label-date'>Time: <span>{dayjs(props.TimeStart).format("DD/MM/YYYY")} - {dayjs(props.TimeEnd).format("DD/MM/YYYY")}</span></div>

            </div>
            <button className='btn-enroll' onClick={handleEnroll}>Enroll Now</button>
        </div>
    )
}

export default ListItem
