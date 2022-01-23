const controller = require('./controller')
const productServices = require('../services/class.services')


const getAllClass = async (req, res, next) => {
    try {
        const resServices = await productServices.getAllClass(req.query)
        // console.log(resServices)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (err) {
        console.log(err);
        return controller.sendError(res)
    }
}

const getClass = async (req, res, next) => {
    try {
        const { id } = req.params
        // console.log(id)
        const resServices = await productServices.getClass(id)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}

const getClassByAuthor = async (req, res, next) => {
    try {
        const { FK_Author } = req.params
        // console.log(FK_Author)
        const resServices = await productServices.getClassByAuthor(FK_Author)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}

const createClass = async (req, res, next) => {
    try {
        const resServices = await productServices.createClass(req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, resServices.success, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }

}


const updateClass = async (req, res, next) => {
    try {
        const { id } = req.params
        const resServices = await productServices.updateClass(id, req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}

const updateClassDetail = async (req, res, next) => {
    try {
        const { id } = req.params
        console.log("params", req.params)
        console.log("body", req.body)
        const resServices = await productServices.updateClassDetail(id, req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}

const enrollClass = async (req, res, next) => {
    try {
        const { id } = req.params
        const resServices = await productServices.enrollClass(id, req.body)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, resServices.data, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}

const deleteClass = async (req, res, next) => {
    try {
        const { id } = req.params
        const resServices = await productServices.deleteClass(id)
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, {}, 200, resServices.message)
    } catch (error) {
        return controller.sendError(res)
    }
}

module.exports = Controller = {
    getAllClass,
    getClass,
    updateClass,
    deleteClass,
    getClassByAuthor,
    createClass,
    enrollClass,
    updateClassDetail
}