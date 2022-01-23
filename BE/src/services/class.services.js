const Class = require('../models/Class')
const User = require('../models/User')


const getAllClass = async () => {
    try {
        const currentClass = await Class.find({})
        // console.log(currentClass)
        return {
            message: 'Successfully get class',
            success: true,
            data: currentClass
        }
    } catch (err) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const getClass = async id => {
    try {
        const currentClass = await Class.findById(id)

        return {
            message: 'Successfully get class',
            success: true,
            data: currentClass
        }
    } catch (error) {

        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const getClassByAuthor = async body => {
    try {
        const currentClass = await Class.find({ FK_Author: body })

        return {
            message: 'Successfully get class',
            success: true,
            data: currentClass
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const createClass = async body => {
    try {
        const newClass = new Class(body)
        // console.log()
        await newClass.save()
        console.log("1")
        return {
            message: 'Successfully create class',
            success: true,
            data: newClass
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const getStudentClass = async (id) => {
    try {
        const currentClass = Class.findById(id)
        if (!currentClass) {
            return {
                message: 'An error occurred',
                success: false
            }
        }
        const studentOfClass = currentClass.arrStudent

        return {
            message: 'Successfully get student',
            success: true,
            data: studentOfClass
        }

    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const updateClass = async (id, body) => {
    try {
        const idNewStudent = body.students
        // console.log(idNewStudent)
        const existClass = await Class.findOne({ _id: id })
        // console.log(existClass.students)
        if (!existClass) {
            return {
                message: 'Class not exist',
                success: false
            }
        }
        const newStudentArr = existClass.students.concat(idNewStudent)
        // console.log('current class', newStudentArr)
        const updateClass = await Class.findByIdAndUpdate(id, { $set: { students: newStudentArr } })
        // await existClass.updateOne({ _id: id }, body)
        return {
            message: 'Successfully update class',
            success: true,
            data: body
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const updateClassDetail = async (id, body) => {
    try {
        const existClass = await Class.findOne({ _id: id })
        console.log(0)
        if (!existClass) {
            return {
                message: 'Product not exist',
                success: false
            }
        }

        await Class.findByIdAndUpdate(id, body)
        console.log(1)
        return {
            message: 'Successfully update class',
            success: true,
            data: body
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const enrollClass = async (id, body) => {
    try {
        const idClass = body.classes
        const existUser = await User.findOne({ _id: id })
        if (!existUser) {
            return {
                message: 'User not exist',
                success: false
            }
        }
        const newClassArr = existUser.classes.concat(idClass)
        // console.log(newClassArr)
        const updateClass = await User.findByIdAndUpdate(id, { $set: { classes: newClassArr } })
        return {
            message: 'Successfully enroll class',
            success: true,
            data: body
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const deleteClass = async id => {
    try {
        const existClass = await Class.findOne({ _id: id })
        if (!existClass) {
            return {
                message: 'Product not exist',
                success: false
            }
        }

        await Class.deleteOne({ _id: id })

        return {
            message: 'Successfully delete class',
            success: true
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}




module.exports = {
    createClass,
    getClass,
    getAllClass,
    updateClass,
    deleteClass,
    getClassByAuthor,
    enrollClass,
    updateClassDetail
}
