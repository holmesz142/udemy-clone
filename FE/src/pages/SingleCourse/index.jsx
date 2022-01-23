import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import SingleCourse from "./components/SingleCourse/SingleCourse"
import { getProductDetailApi } from "../../redux/_actions/Product/product.Action"
import Navbar from "../../components/navbar/Navbar"

const SingleProductPage = (props) => {
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductDetailApi(params.id))
    }, [dispatch, params])

    return (
        <>
            <Navbar />
            <SingleCourse />
        </>
    )
}

export default SingleProductPage
