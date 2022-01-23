import Grid from './grid/Grid'
import './courses.scss'
import Navbar from '../../components/navbar/Navbar'

const Class = () => {
    return (
        <div className="main-content">
            <Navbar />
            <div className="courses">

                <Grid />
            </div>
        </div>
    )
}

export default Class
