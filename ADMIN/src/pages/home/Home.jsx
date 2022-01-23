import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react";
import { getAllClassApi } from "../../redux/_actions/Product/product.Action"
import { getAllProductsHomeApi } from "../../redux/_actions/Product/product.Action"
import { getAllUser } from "../../redux/_actions/Auth/user.Action"

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch((getAllUser()))
  }, [dispatch])
  useEffect(() => {
    dispatch(getAllProductsHomeApi())
  }, [dispatch])
  useEffect(() => {
    dispatch(getAllClassApi())
  }, [])
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home">
          <FeaturedInfo />
          <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
      </div>
    </>
  );
}
