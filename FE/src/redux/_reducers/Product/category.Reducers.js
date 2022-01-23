import {
    GET_ALL_PRODUCT_BY_CATEGORY_FAIL,
    GET_ALL_PRODUCT_BY_CATEGORY_SUCCESS,
    GET_ALL_PRODUCT_FAIL,
    GET_ALL_PRODUCT_SUCCESS,
    GET_PRODUCT_DETAIL_FAIL,
    GET_PRODUCT_DETAIL_SUCCESS,
    CHANGE_PAGE,
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
} from "../../_actions/Product/type"

const initState = {
    productHome: [],
    interHome: [],
    products: [],
    productsOwn: [],
    productDetail: {},
    paymentDetail: []
}
export default function (state = initState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCT_HOME_SUCCESS:
            return {
                ...state,
                productHome: action.payload.products
            }
        case GET_ALL_PRODUCT_HOME_FAIL:
            return { ...state, productHome: [], interHome: [] }
        case GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload.products
            }
        case GET_ALL_PRODUCT_FAIL:
            return { ...state, products: action.payload }
        case GET_ALL_PRODUCT_BY_CATEGORY_SUCCESS:
            return { ...state, products: action.payload }
        case GET_ALL_PRODUCT_BY_CATEGORY_FAIL:
            return { ...state, products: action.payload }
        case GET_PRODUCT_DETAIL_SUCCESS:
            return { ...state, productDetail: action.payload }
        case GET_PRODUCT_DETAIL_FAIL:
            return { ...state, productDetail: action.payload }
        case SEARCH_PRODUCT:
            return {
                ...state,
                strSearch: action.payload
            }
        case RESET_FILTER:
            return { ...state, strSearch: "" }
        case CREATE_PRODUCT_SUCCESS:
            return { ...state, productDetail: action.payload }
        case CREATE_PRODUCT_FAIL:
            return {
                ...state,
                productDetail: action.payload
            }
        case GET_PRODUCT_BY_AUTHOR_FAIL:
            return { ...state, products: action.payload }
        case GET_PRODUCT_BY_AUTHOR_SUCCESS:
            return { ...state, products: action.payload }
        case PAYMENT_PRODUCT_FAIL:
            return { ...state, paymentDetail: action.payload }
        case PAYMENT_PRODUCT_SUCCESS:
            return { ...state, paymentDetail: action.payload }
        default:
            return state
    }
}