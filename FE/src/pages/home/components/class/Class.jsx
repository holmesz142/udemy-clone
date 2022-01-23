import React from 'react'
import List from './components/list/List'
import { Link } from 'react-router-dom'
import './course.scss'


const Class = () => {

    return (
        <div className="course">
            <Link to='/classes'>
                <h2 className="course-title">Current Class</h2>
            </Link>
            <List />
        </div>
    )
}

export default Class
