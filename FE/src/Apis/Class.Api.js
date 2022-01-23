import axiosClient from "./clientAxios.js"

const url = "class/"
const url2 = '/'

const getAllClass = async () => {
    try {
        const res = await axiosClient.get(`${url}getAllClass`)
        // console.log(res.data)
        return { classes: res.data }
    } catch (err) {
        console.log(err)
        return null
    }
}
const getById = async id => {
    try {
        const res = await axiosClient.get(`${url}getClass/${id}`)
        return res.data
    } catch (err) {
        console.log(err)
        return null
    }
}

const getClassByAuthor = async FK_Author => {
    try {
        const res = await axiosClient.get(`${url}getClassByAuthor/${FK_Author}`)
        // console.log(res)
        return res.data
    } catch (err) {
        console.log(err)
        return null
    }
}

const payment = async (price) => {
    try {
        const res = await axiosClient.post(`${url2}paypal/payment`, {
            price: price
        })

        console.log(res.data)
        return res ? { data: res, success: true } : { success: false }

    } catch (error) {
        return {
            success: false
        }
    }
}

const createClass = async (body) => {
    try {
        const res = await axiosClient.post(`${url}createClass`, {
            Name: body.Name,
            Description: body.Description,
            Price: body.Price,
            Author: body.Author,
            Image: body.Image,
            FK_Author: body.FK_Author,
            students: body.students,
            TimeStart: body.TimeStart,
            TimeEnd: body.TimeEnd
        })

        return res ? { data: res || {}, success: true } : { success: false }
    } catch (error) {
        return {
            success: false
        }
    }
}

const updateClass = async (body) => {
    try {
        const res = await axiosClient.put(`${url}updateClass/${body._id}`, {
            students: body.students
        })

        return res ? { data: res || {}, success: true } : { success: false }

    } catch (error) {
        return {
            success: false
        }
    }
}

const updateClassDetail = async (id, body) => {
    try {
        const res = await axiosClient.put(`${url}updateClassDetail/${id}`, {
            Name: body.Name,
            Description: body.Description,
            Price: body.Price,
            Author: body.Author,
            Image: body.Image,
            TimeStart: body.TimeStart,
            TimeEnd: body.TimeEnd
        })

        return res ? { data: res || {}, success: true } : { success: false }

    } catch (error) {
        return {
            success: false
        }
    }
}

const enrollClass = async (body) => {
    try {
        console.log(body)
        const res = await axiosClient.put(`${url}enrollClass/${body._id}`, {
            classes: body.classes
        })
        // console.log('data', res)

        return res ? { data: res || {}, success: true } : { success: false }
    } catch (error) {
        return {
            success: false
        }
    }
}

const deleteClass = async (id) => {
    try {
        const res = await axiosClient.delete(`${url}deleteClass/${id}`)

        return res ? { data: res || {}, success: true } : { success: false }
    } catch (error) {
        return {
            success: false
        }
    }
}





const Class = { getAllClass, getById, createClass, getClassByAuthor, enrollClass, updateClass, deleteClass, updateClassDetail }

export default Class