import { Link } from 'react-router-dom'
import './gridItem.scss'

const GridItem = (props) => {
    return (
        <div className="gird-wrapper">
            <Link to="/course/development" className="grid-item">
                <img src={props.imgSrc} alt="" className="grid-item-img" />
                <span className="grid-item-text">Development</span>
            </Link>
        </div>
    )
}

export default GridItem
