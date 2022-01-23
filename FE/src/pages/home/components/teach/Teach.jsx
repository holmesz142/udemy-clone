import { Link } from 'react-router-dom'
import './teach.scss'

const Teach = () => {
    return (
        <div className="teach">
            <div className="teach-wrapper">
                <img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="" className="teach-img" />
                <div className="teach-content">
                    <h2 className="teach-content-header">Become an instructor</h2>
                    <p className="teach-content-desc">
                        Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
                    </p>
                    <Link to="/teach-on-udemy">
                        <button className="teach-content-btn">Start teaching today</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Teach
