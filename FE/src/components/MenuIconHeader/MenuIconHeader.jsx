import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutUser } from "../../redux/_actions/Auth/user.Action";
import { AiOutlineUser } from "react-icons/ai"
import './menuIcon.scss'

const MenuIconHeader = () => {
  const dispatch = useDispatch();
  const { isLogin, user } = props;
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const renderUserStudent = () => {
    return (
      <div className="dropdown-menu">
        <Link className="dropdown-item " to="/profile">
          {user.fullName}
        </Link>

        <Link className="dropdown-item " to="/my-course">
          My course
        </Link>
        <Link className="dropdown-item " to="#" onClick={handleLogout}>
          Logout
        </Link>
      </div>
    );
  };

  const renderUserTeacher = () => {
    return (
      <div className="dropdown-menu">
        <Link className="dropdown-item " to="/profile">
          {user.fullName}
        </Link>
        <Link className="dropdown-item " to="/my-course">
          My course
        </Link>
        <Link className="dropdown-item " to="/sell-course">
          Sell course
        </Link>
        <Link className="dropdown-item " to="#" onClick={handleLogout}>
          Logout
        </Link>
      </div>
    );
  };

  return (
    <div className="hearer_icon d-flex">
      <div className="dropdown cart">
        <Link
          className="dropdown-toggle icon"
          to={isLogin === false ? PATH.login : "#"}
        >
          <AiOutlineUser />
        </Link>
        {isLogin && renderUser()}
      </div>
    </div>
  );
};

export default MenuIconHeader;
