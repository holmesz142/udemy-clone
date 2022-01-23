import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useDispatch, useSelector } from "react-redux"
import { getAllUser } from "../../redux/_actions/Auth/user.Action"

export default function UserList() {
  const userRows = useSelector(state => state.user.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch((getAllUser()))
  }, [dispatch])
  console.log(userRows)
  // const userRows = user.user
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 120 },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.fullName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "isVerify",
      headerName: "Verify",
      width: 120,
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      width: 180,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>

            <DeleteOutline
              className="userListDelete"
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
        <div className="userList">
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
