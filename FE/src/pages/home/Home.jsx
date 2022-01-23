import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Course from './components/course/Course'
import Header from './components/header/Header'
import Categories from './components/categories/Categories'
import "./home.scss"
import Teach from './components/teach/Teach'
import Footer from './components/footer/Footer'
import Class from './components/class/Class'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="main-content">
                <Header />
                <Class />
                <Course />
                <Categories />
                <Teach />
            </div>
            <Footer />
        </div>
    )
}

export default Home
