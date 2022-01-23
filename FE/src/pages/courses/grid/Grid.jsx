import ListItem from '../../../components/listitem/ListItem'
import './grid.scss'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProductsHomeApi } from "../../../redux/_actions/Product/product.Action"


const Grid = () => {
    const products = useSelector(state => state.product.productHome)
    //console.log(products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProductsHomeApi())
    }, [dispatch])

    return (
        <div className="grid">
            <h2 className="grid-header">
                Top courses
            </h2>
            <div className="grid-lists">
                {products.map((item, i) => (
                    <ListItem key={i} imgSrc={item.Image} courseTitle={item.Name} courseAuthor={item.Author} coursePrice={item.Price} tag="Bestseller" path={`/single-product/${item._id}`} />
                ))}

            </div>
        </div>
    )
}

export default Grid
