import {
    CHANGE_PAGE,
    GET_ALL_PRODUCT_BY_CATEGORY_FAIL,
    GET_ALL_PRODUCT_BY_CATEGORY_SUCCESS,
    GET_ALL_PRODUCT_FAIL,
    GET_ALL_PRODUCT_SUCCESS,
    GET_PRODUCT_DETAIL_FAIL,
    GET_PRODUCT_DETAIL_SUCCESS,
    SEARCH_PRODUCT,
    RESET_FILTER,
    CATEGORY_PRODUCT,
    CHANGE_LIMIT,
    GET_ALL_PRODUCT_HOME_SUCCESS,
    GET_ALL_PRODUCT_HOME_FAIL,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,
    GET_PRODUCT_BY_AUTHOR_FAIL,
    GET_PRODUCT_BY_AUTHOR_SUCCESS,
    PAYMENT_PRODUCT_SUCCESS,
    PAYMENT_PRODUCT_FAIL
} from "./type"
import productApi from "../../../Apis/Product.Api"
import { changeLoading } from "../../_actions/System/app.Action"

const loading = (loading = false) => dispatch => {
    dispatch(changeLoading(loading))
}

export function getAllProductsSuccess(data) {
    return {
        type: GET_ALL_PRODUCT_SUCCESS,
        payload: data
    }
}

export function getAllProductsFail() {
    return {
        type: GET_ALL_PRODUCT_FAIL,
        payload: []
    }
}

// export const getAllProductApi = reqData => async dispatch => {
//     try {
//         dispatch(loading(true))
//         const res = await productApi.getAllHome()
//         dispatch(loading())
//         dispatch(getAllProductsSuccess(res))
//         return true
//     } catch (err) {
//         console.log(err)
//         dispatch(loading())
//         dispatch(getAllProductsFail())
//         return false
//     }
// }

export function getAllProductsHomeSuccess(data) {
    return {
        type: GET_ALL_PRODUCT_HOME_SUCCESS,
        payload: data
    }
}

export function getAllProductsHomeFail() {
    return {
        type: GET_ALL_PRODUCT_HOME_FAIL,
        payload: []
    }
}

export const getAllProductsHomeApi = () => async dispatch => {
    try {
        const res = await productApi.getAllHome()
        // console.log(res)
        dispatch(getAllProductsHomeSuccess(res))
    } catch (err) {
        dispatch(getAllProductsHomeFail())
    }
}

export function getProductByAuthorSuccess(data) {
    return {
        type: GET_PRODUCT_BY_AUTHOR_SUCCESS,
        payload: data
    }
}

export function getProductByAuthorFail() {
    return {
        type: GET_PRODUCT_BY_AUTHOR_FAIL,
        payload: []
    }
}

export const getProductsByAuthorApi = (id) => async dispatch => {
    try {
        const res = await productApi.getByAuthor(id)
        // console.log(res)
        dispatch(getProductByAuthorSuccess(res))
    } catch (err) {
        dispatch(getProductByAuthorFail())
    }
}

export const createProductSuccess = data => {
    return {
        type: CREATE_PRODUCT_SUCCESS,
        payload: data
    }
}
export const createProductFail = () => {
    return {
        type: CREATE_PRODUCT_FAIL,
        payload: {}
    }
}

export const createProduct = body => async dispatch => {
    try {
        const res = await productApi.createProduct(body)
        if (!res.success) {
            dispatch(createProductFail())
        } else {
            dispatch(createProductSuccess(res.data))
        }
        return res.success
    } catch (error) {
        console.log(error)
        dispatch(createProductFail())
        return false
    }
}

export function getAllProductsByCategorySuccess(data) {
    return {
        type: GET_ALL_PRODUCT_BY_CATEGORY_SUCCESS,
        payload: data
    }
}

export function getAllProductsByCategoryFail() {
    return {
        type: GET_ALL_PRODUCT_BY_CATEGORY_FAIL,
        payload: []
    }
}

export const getAllProductByCategoryApi = id => async dispatch => {

    try {
        dispatch(loading(true))
        const data = await productApi.getByCate(id)
        dispatch(loading())
        dispatch(getAllProductsByCategorySuccess(data))
        return true
    } catch (err) {
        console.log(err)
        dispatch(loading())
        dispatch(getAllProductsByCategoryFail())
        return false
    }
}

export function getProductDetailSuccess(data) {
    return {
        type: GET_PRODUCT_DETAIL_SUCCESS,
        payload: data
    }
}

export function getProductDetailFail() {
    return {
        type: GET_PRODUCT_DETAIL_FAIL,
        payload: {}
    }
}

export const getProductDetailApi = id => async dispatch => {
    try {
        dispatch(loading(true))
        const data = await productApi.getById(id)

        if (data) dispatch(getProductDetailSuccess(data))
        else dispatch(getProductDetailFail())
        dispatch(loading())
    } catch (err) {
        console.log(err)
        dispatch(getProductDetailFail())
        dispatch(loading())
    }
}

export function paymentSuccess(data) {
    return {
        type: GET_PRODUCT_DETAIL_SUCCESS,
        payload: data
    }
}

export function paymentFail() {
    return {
        type: GET_PRODUCT_DETAIL_FAIL,
        payload: {}
    }
}

export const payment = price => async dispatch => {
    try {
        const data = await productApi.payment(price)
        console.log(data)
        if (data) dispatch(paymentSuccess(data))
        else dispatch(paymentFail())
        dispatch(loading())
    } catch (error) {
        console.log(error)
        dispatch(paymentFail())
        dispatch(loading())
    }
}

export const searchProduct = str => {
    return {
        type: SEARCH_PRODUCT,
        payload: str
    }
}

export const resetFilter = () => {
    return {
        type: RESET_FILTER,
        payload: {}
    }
}
export const filterCategory = id => {
    return {
        type: CATEGORY_PRODUCT,
        payload: id
    }
}

