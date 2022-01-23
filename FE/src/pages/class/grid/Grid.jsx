import ListItem from '../listitem/ListItem'
import './grid.scss'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllClassApi } from "../../../redux/_actions/Class/class.Action"


const Grid = () => {
    const classes = useSelector(state => state.class.classes)
    // console.log(classes)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllClassApi())
    }, [dispatch])

    return (
        <div className="grid">
            <h2 className="grid-header">
                Current class
            </h2>
            <div className="grid-lists">
                {classes.map((item, i) => (
                    <ListItem key={i} imgSrc={item.Image} courseTitle={item.Name} courseAuthor={item.Author} coursePrice={item.Price} />
                ))}

            </div>
        </div>
    )
}

export default Grid
