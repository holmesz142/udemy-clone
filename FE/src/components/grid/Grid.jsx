import GridItem from '../gridItem/GridItem'
import './grid.scss'

const Grid = () => {
    return (
        <div className="grid">
            <h2 className="grid-header">
                Top categories
            </h2>
            <div className="grid-list">
                <GridItem imgSrc="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" />
                <GridItem imgSrc="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" />
                <GridItem imgSrc="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" />
                <GridItem imgSrc="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" />
                <GridItem imgSrc="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" />
                <GridItem imgSrc="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" />
                <GridItem imgSrc="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" />
                <GridItem imgSrc="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" />
            </div>

        </div>
    )
}

export default Grid
