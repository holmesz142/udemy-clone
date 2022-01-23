import "./newProduct.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar"
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createClass } from "../../../../redux/_actions/Class/class.Action"
import { authRequest } from "../../../../redux/_actions/Auth/user.Action";

export default function TeacherNewClass() {
  const refStep1 = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const currentUser = useSelector(state => state.user)
  // console.log(currentUser.user._id)
  // const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authRequest())
  }, [])
  // const userID = currentUser.user._id
  const createNewClass = async (e) => {
    e.preventDefault()
    const { Name, Description, Price, Author, Image, TimeStart, TimeEnd } = refStep1.current

    const obj = {
      Name: Name.value,
      Description: Description.value,
      Price: Price.value,
      Author: Author.value,
      Image: Image.value,
      FK_Author: currentUser.user._id,
      TimeStart: TimeStart.value,
      TimeEnd: TimeEnd.value
    }

    const res = await dispatch(createClass(obj))
    if (res) {
      history.push("/teacher-new-class")
      Name.value = ''
      Description.value = ''
      Price.value = ''
      Author.value = ''
      Image.value = ''
      // TimeStart.value
      // TimeEnd.value
      console.log("tao class thanh cong")
    } else {
      console.log("tao class that bai")
    }

  }

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="newProduct">
          <h1 className="addProductTitle">New Class</h1>
          <form className="addProductForm" ref={refStep1}>
            <div className="addProductItem">
              <label>Name</label>
              <input className="input" type="text" placeholder="" name="Name" required />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <input className="input" type="text" placeholder="" name="Description" required />
            </div>
            <div className="addProductItem">
              <label>Price</label>
              <input className="input" type="text" placeholder="" name="Price" required />
            </div>
            <div className="addProductItem">
              <label>Author</label>
              <input className="input" type="text" placeholder="" name="Author" required />
            </div>

            <div className="addProductItem">
              <label>Image</label>
              <input className="input" type="text" placeholder="" name="Image" required />
            </div>
            <div className="addProductItem">
              <label>Time Start</label>
              <input className="input" type="date" placeholder="" name="TimeStart" required />
            </div>
            <div className="addProductItem">
              <label>Time End</label>
              <input className="input" type="date" placeholder="" name="TimeEnd" required />
            </div>
            <button className="addProductButton" onClick={createNewClass}>Create</button>
          </form>
        </div>
      </div>
    </>
  );
}
