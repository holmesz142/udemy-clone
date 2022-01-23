import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useDispatch, useSelector } from "react-redux"
import { getAllClassApi } from "../../redux/_actions/Product/product.Action"

export default function ClassList() {
  const productRows = useSelector(state => state.product.classes)
  console.log(productRows)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllClassApi())
  }, [])
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    console.log(id)
    setData(data.filter((item) => item.id !== id));
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
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>

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
            pageSize={10}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
}
