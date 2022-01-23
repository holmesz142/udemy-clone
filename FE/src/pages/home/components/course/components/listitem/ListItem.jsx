import React from 'react'
import { Link } from 'react-router-dom'
import './listItem.scss'

const ListItem = (props) => {
    //console.log(props)
    return (
        <div className="wrapper">
            <Link to={props.path} className="list-item">
                <div className="img-container">
                    <img className="list-item-img" src={props.imgSrc} alt="" />
                </div>
                <h4 className="list-item-desc">{props.courseTitle}</h4>
                <p className="list-item-author">{props.courseAuthor}</p>
                <span className="list-item-price">{props.coursePrice}$</span>
                <div className="list-item-tag" >{props.tag}</div>
            </Link>
        </div>
    )
}

export default ListItem
