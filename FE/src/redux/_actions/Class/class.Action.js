import {
    GET_ALL_CLASS_FAIL,
    GET_ALL_CLASS_SUCCESS,
    GET_CLASS_BY_AUTHOR_FAIL,
    GET_CLASS_BY_AUTHOR_SUCCESS,
    CREATE_CLASS_SUCCESS,
    CREATE_CLASS_FAIL,
    GET_CLASS_FAIL,
    GET_CLASS_SUCCESS,
    ENROLL_CLASS_FAIL,
    ENROLL_CLASS_SUCCESS,
    UPDATE_CLASS_SUCCESS,
    UPDATE_CLASS_FAIL,
    UPDATE_CLASS_DETAIL_SUCCESS,
    UPDATE_CLASS_DETAIL_FAIL,
    DELETE_CLASS_SUCCESS,
    DELETE_CLASS_FAIL
} from './type'
import classApi from '../../../Apis/Class.Api'
import { changeLoading } from "../../_actions/System/app.Action"
const loading = (loading = false) => dispatch => {
    dispatch(changeLoading(loading))
}

export function getAllClassSuccess(data) {
    return {
        type: GET_ALL_CLASS_SUCCESS,
        payload: data
    }
}

export function getAllClassFail() {
    return {
        type: GET_ALL_CLASS_FAIL,
        payload: []
    }
}

export const getAllClassApi = () => async dispatch => {
    try {
        const res = await classApi.getAllClass()
        // console.log(res)
        dispatch(getAllClassSuccess(res))
    } catch (err) {
        dispatch(getAllClassFail())
    }
}

export function getClassByAuthorSuccess(data) {
    return {
        type: GET_CLASS_BY_AUTHOR_SUCCESS,
        payload: data
    }
}

export function getClassByAuthorFail() {
    return {
        type: GET_CLASS_BY_AUTHOR_FAIL,
        payload: []
    }
}

export const getClassByAuthorApi = (id) => async dispatch => {
    try {
        const res = await classApi.getClassByAuthor(id)
        // console.log(res)
        dispatch(getClassByAuthorSuccess(res))
    } catch (err) {
        dispatch(getClassByAuthorFail())
    }
}

export function getClassSuccess(data) {
    return {
        type: GET_CLASS_SUCCESS,
        payload: data
    }
}

export function getClassFail() {
    return {
        type: GET_CLASS_FAIL,
        payload: []
    }
}

export const getClassApi = (id) => async dispatch => {
    try {
        const data = await classApi.getById(id)
        // console.log(res)
        if (data) dispatch(getClassSuccess(data))
        else dispatch(getClassFail())
    } catch (err) {
        dispatch(getClassFail())
    }
}

export const createClassSuccess = data => {
    return {
        type: CREATE_CLASS_SUCCESS,
        payload: data
    }
}
export const createClassFail = () => {
    return {
        type: CREATE_CLASS_FAIL,
        payload: {}
    }
}

export const createClass = body => async dispatch => {
    try {
        const res = await classApi.createClass(body)
        if (!res.success) {
            dispatch(createClassFail())
        } else {
            dispatch(createClassSuccess(res.data))
        }
        return res.success
    } catch (error) {
        console.log(error)
        dispatch(createClassFail())
        return false
    }
}

export const enrollClassSuccess = data => {
    return {
        type: ENROLL_CLASS_SUCCESS,
        payload: data
    }
}
export const enrollClassFail = () => {
    return {
        type: ENROLL_CLASS_FAIL,
        payload: {}
    }
}

export const enrollClass = body => async dispatch => {
    try {
        const res = await classApi.enrollClass(body)
        console.log('res', res)
        if (!res.success) {
            dispatch(enrollClassFail())
        } else {
            dispatch(enrollClassSuccess(res.data))
        }
        return res.success
    } catch (error) {
        console.log(error)
        dispatch(enrollClassFail())
        return false
    }
}

export const updateClassSuccess = data => {
    return {
        type: UPDATE_CLASS_SUCCESS,
        payload: data
    }
}
export const updateClassFail = () => {
    return {
        type: UPDATE_CLASS_FAIL,
        payload: {}
    }
}

export const updateClass = body => async dispatch => {
    try {
        const res = await classApi.updateClass(body)
        console.log('res', res)
        if (!res.success) {
            dispatch(enrollClassFail())
        } else {
            dispatch(enrollClassSuccess(res.data))
        }
        return res.success
    } catch (error) {
        console.log(error)
        dispatch(enrollClassFail())
        return false
    }
}

export const updateClassDetailSuccess = data => {
    return {
        type: UPDATE_CLASS_DETAIL_SUCCESS,
        payload: data
    }
}
export const updateClassDetailFail = () => {
    return {
        type: UPDATE_CLASS_DETAIL_FAIL,
        payload: {}
    }
}

export const updateClassDetail = (id, body) => async dispatch => {
    try {
        const res = await classApi.updateClassDetail(id, body)
        // console.log('res', res)
        if (!res.success) {
            dispatch(updateClassDetailFail())
        } else {
            dispatch(updateClassDetailSuccess(res.data))
        }
        return res.success
    } catch (error) {
        console.log(error)
        dispatch(updateClassDetailFail())
        return false
    }
}

export const deleteClassSuccess = data => {
    return {
        type: DELETE_CLASS_SUCCESS,
        payload: data
    }
}

export const deleteClassFail = () => {
    return {
        type: DELETE_CLASS_FAIL,
        payload: {}
    }
}

export const deleteClass = body => async dispatch => {
    try {
        const res = await classApi.deleteClass(body)
        console.log('res', res)
        if (!res.success) {
            dispatch(deleteClassFail())
        } else {
            dispatch(deleteClassSuccess(res.data))
        }
        return res.success
    } catch (error) {
        console.log(error)
        dispatch(deleteClassFail())
        return false
    }
}