import axiosClient from "./clientAxios.js"

const url = "product/"
const url2 = '/'

const getAllHome = async () => {
    try {
        const res = await axiosClient.get(`${url}getAllProducts`)
        // console.log(res.data)
        return { products: res.data }
    } catch (err) {
        console.log(err)
        return null
    }
}
const getById = async id => {
    try {
        const res = await axiosClient.get(`${url}getProduct/${id}`)
        return res.data
    } catch (err) {
        console.log(err)
        return null
    }
}

const getByAuthor = async FK_Author => {
    try {
        const res = await axiosClient.get(`${url}getProductByAuthor/${FK_Author}`)
        // console.log(res)
        return res.data
    } catch (err) {
        console.log(err)
        return null
    }
}

const getAllClass = async () => {
    try {
        const res = await axiosClient.get(`class/getAllClass`)
        console.log(res)
        return res.data
    } catch (err) {
        console.log(err)
        return null
    }
}


const createProduct = async (body) => {
    try {
        const res = await axiosClient.post(`${url}createProduct`, {
            Name: body.Name,
            Description: body.Description,
            Price: body.Price,
            Author: body.Author,
            Intros: body.Intros,
            Contents: {
                part: body.Part,
                content: body.Content
            },
            Requirements: body.Requirements,
            Image: body.Image,
            TotalLesson: body.TotalLesson,
            TotalTime: body.TotalTime,
            FK_Author: body.FK_Author
        })

        return res ? { data: res || {}, success: true } : { success: false }
    } catch (error) {
        return {
            success: false
        }
    }
}

const getFilter = async () => {
    try {
        const res = await axiosClient.get(`${url}filter`)
        return res.data
    } catch (err) {
        console.log(err)
        return null
    }
}



const Product = { getAllHome, getById, createProduct, getByAuthor, getFilter, getAllClass }

export default Product