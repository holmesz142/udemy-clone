import "./newProduct.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar"
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createProduct } from "../../../../redux/_actions/Product/product.Action"
import { authRequest } from "../../../../redux/_actions/Auth/user.Action";

export default function TeacherNewProduct() {
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
  const createNewProduct = async (e) => {
    e.preventDefault()
    const { Name, Description, Price, Author, Intro, Part, Content, Requirement, Image, TotalLesson, TotalTime } = refStep1.current

    const obj = {
      Name: Name.value,
      Description: Description.value,
      Price: Price.value,
      Author: Author.value,
      Intros: Intro.value,
      Part: Part.value,
      Content: Content.value,
      Requirements: Requirement.value,
      Image: Image.value,
      TotalLesson: TotalLesson.value,
      TotalTime: TotalTime.TotalTime,
      FK_Author: currentUser.user._id
    }

    const res = await dispatch(createProduct(obj))
    if (res) {
      history.push("/teacher-new-course")
      Name.value = ''
      Description.value = ''
      Price.value = ''
      Author.value = ''
      Intro.value = ''
      Part.value = ''
      Content.value = ''
      Requirement.value = ''
      Image.value = ''
      TotalLesson.value = ''
      TotalTime.value = ''
      console.log("tao san pham thanh cong")
    } else {
      console.log("tao san pham that bai")
    }

  }

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="newProduct">
          <h1 className="addProductTitle">New Course</h1>
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
              <label>Intro</label>
              <input className="input" type="text" placeholder="" name="Intro" required />
            </div>
            <div className="addProductItem">
              <label>Part</label>
              <input className="input" type="text" placeholder="" name="Part" required />
            </div>
            <div className="addProductItem">
              <label>Content</label>
              <input className="input" type="text" placeholder="" name="Content" required />
            </div>
            <div className="addProductItem">
              <label>Requirement</label>
              <input className="input" type="text" placeholder="" name="Requirement" required />
            </div>
            <div className="addProductItem">
              <label>Image</label>
              <input className="input" type="text" placeholder="" name="Image" required />
            </div>
            <div className="addProductItem">
              <label>Total Lesson</label>
              <input className="input" type="text" placeholder="" name="TotalLesson" required />
            </div>
            <div className="addProductItem">
              <label>Total Time</label>
              <input className="input" type="text" placeholder="" name="TotalTime" required />
            </div>
            <button className="addProductButton" onClick={createNewProduct}>Create</button>
          </form>
        </div>
      </div>
    </>
  );
}
