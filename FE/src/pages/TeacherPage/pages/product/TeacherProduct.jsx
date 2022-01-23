import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router"
import { getClassApi } from "../../../../redux/_actions/Class/class.Action"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar"
import { deleteClass, updateClassDetail } from '../../../../redux/_actions/Class/class.Action'
import dayjs from 'dayjs'

export default function TeacherProduct() {
    const refStep1 = useRef(null)
    const history = useHistory()
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getClassApi(params.id))
    }, [dispatch, params])
    const productRows = useSelector(state => state.class.class)
    const student = productRows?.students
    const [data, setData] = useState(student);
    // console.log(student)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    const handleUpdate = async (e) => {
        e.preventDefault()
        const { Name, Description, Price, Author, Image, TimeStart, TimeEnd } = refStep1.current
        const newName = (Name.value) ? Name.value : productRows.Name
        const newDescription = (Description.value) ? Description.value : productRows.Description
        const newPrice = (Price.value) ? Price.value : productRows.Price
        const newAuthor = (Author.value) ? Author.value : productRows.Author
        const newImage = (Image.value) ? Image.value : productRows.Image
        const newTimeS = (TimeStart.value) ? TimeStart.value : productRows.TimeStart
        const newTimeE = (TimeEnd.value) ? TimeEnd.value : productRows.TimeEnd
        const obj = {
            Name: newName,
            Description: newDescription,
            Price: newPrice,
            Author: newAuthor,
            Image: newImage,
            TimeStart: newTimeS,
            TimeEnd: newTimeE
        }
        // console.log(productRows._id)
        const res = await dispatch(updateClassDetail(productRows._id, obj))
        if (res === true) {
            history.push(`/update-class/${productRows._id}`)
            // console.log(1)
            Name.value = ''
            Description.value = ''
            Price.value = ''
            Author.value = ''
            Image.value = ''
        }
    }

    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="product">
                    <div className="productTitleContainer">
                        <h1 className="productTitle">Class</h1>
                    </div>
                    <div className="productTop">
                        <div className="productTopLeft">
                            <table id="table-data">
                                <tr>
                                    <th>Email</th>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                </tr>
                                {
                                    productRows.students?.map((item, i) => (
                                        <tr>

                                            <td>{item.email}</td>
                                            <td>{item.fullName}</td>
                                            <td>{item.phoneNumber}</td>
                                        </tr>
                                    ))
                                }

                            </table>

                        </div>
                        <div className="productTopRight">
                            <div className="productInfoTop">
                                <img src={productRows?.Image} alt="" className="productInfoImg" />
                                <span className="productName">{productRows?.Name}</span>
                            </div>
                            <div className="productInfoBottom">
                                <div className="productInfoItem">
                                    <span className="productInfoKey">Id:</span>
                                    <p className="productInfoValue">{productRows?._id}</p>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">Description:</span>
                                    <span className="productInfoValue">{productRows?.Description}</span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">Author:</span>
                                    <span className="productInfoValue">{productRows?.Author}</span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">Price:</span>
                                    <span className="productInfoValue">{productRows?.Price}</span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">Time:</span>
                                    <span className="productInfoValue">{dayjs(productRows?.TimeStart).format("DD/MM/YYYY")} - {dayjs(productRows?.TimeEnd).format("DD/MM/YYYY")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="productBottom">
                        <form className="productForm" ref={refStep1}>
                            <div className="productFormLeft">
                                <label>Class Name</label>
                                <input type="text" className="input-class" placeholder="class name" name="Name" />
                                <label>Description</label>
                                <input type="text" className="input-class" placeholder="class description" name="Description" />
                                <label>Price</label>
                                <input type="text" className="input-class" placeholder="class price" name="Price" />
                                <label>Author</label>
                                <input type="text" className="input-class" placeholder="author" name="Author" />
                                <label>Image</label>
                                <input type="text" className="input-class" placeholder="url image" name="Image" />
                                <label>Time Start</label>
                                <input type="date" className="input-class" placeholder="" name="TimeStart" />
                                <label>Time End</label>
                                <input type="date" className="input-class" placeholder="" name="TimeEnd" />
                            </div>
                            <div className="productFormRight">
                                <div className="productUpload">
                                    <img src={productRows?.Image} alt="" className="productUploadImg" />
                                    <label for="file">
                                        <Publish />
                                    </label>
                                    <input type="file" id="file" style={{ display: "none" }} />
                                </div>
                                <button className="productButton" onClick={handleUpdate}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
