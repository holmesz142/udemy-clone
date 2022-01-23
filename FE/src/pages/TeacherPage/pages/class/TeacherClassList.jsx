import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getClassByAuthorApi, deleteClass } from "../../../../redux/_actions/Class/class.Action"

export default function TeacherClassList() {

  const params = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getClassByAuthorApi(params.id))
  }, [dispatch, params])
  const productRows = useSelector(state => state.class.classesAuthor)
  // console.log(productRows)

  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    console.log(id)
    // setData(data.filter((item) => item.id !== id));
    const deleteClass = dispatch(deleteClass(id))
    if (deleteClass.success === true) {
      alert("Xóa lớp học thành công")
      console.log("deleted")
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 120 },
    {
      field: "product",
      headerName: "Name",
      width: 300,
      renderCell: (params) => {
        // console.log(params)
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.Image} alt="" />
            {params.row.Name}
          </div>
        );
      },
    },
    { field: "Description", headerName: "Description", width: 550 },
    {
      field: "Author",
      headerName: "Author",
      width: 150,
    },
    {
      field: "Price",
      headerName: "Price (USD)",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/update-class/" + params.row._id}>
              <button className="productListEdit">View</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];


  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="productList">
          <DataGrid
            getRowId={(row) => row._id}
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
}
