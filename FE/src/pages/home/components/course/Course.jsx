import React from 'react'
import List from './components/list/List'
import { Link } from 'react-router-dom'
import './course.scss'


const Course = () => {

    return (
        <div className="course">
            <Link to='/courses'>
                <h2 className="course-title">Students are viewing</h2>
            </Link>
            <List />
        </div>
    )
}

export default Course
