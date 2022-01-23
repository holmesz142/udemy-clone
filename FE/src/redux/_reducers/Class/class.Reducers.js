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
    UPDATE_CLASS_DETAIL_SUCCESS,
    UPDATE_CLASS_DETAIL_FAIL,
    DELETE_CLASS_FAIL,
    DELETE_CLASS_SUCCESS
} from '../../_actions/Class/type'

const initState = {
    classes: [],
    classesAuthor: [],
    class: {}
}
export default function (state = initState, action) {
    switch (action.type) {
        case GET_ALL_CLASS_SUCCESS:
            // console.log('reducer', action.payload)
            return {
                ...state,
                classes: action.payload.classes
            }
        case GET_ALL_CLASS_FAIL:
            return { ...state, classes: [] }
        case GET_CLASS_BY_AUTHOR_SUCCESS:
            return { ...state, classesAuthor: action.payload }
        case GET_CLASS_BY_AUTHOR_FAIL:
            return { ...state, classesAuthor: action.payload }
        case CREATE_CLASS_SUCCESS:
            return { ...state, class: action.payload }
        case CREATE_CLASS_FAIL:
            return { ...state, class: action.payload }
        case GET_CLASS_SUCCESS:
            return { ...state, class: action.payload }
        case GET_CLASS_FAIL:
            return {
                ...state,
                class: action.payload
            }
        case ENROLL_CLASS_SUCCESS:
            return { ...state, class: action.payload }
        case ENROLL_CLASS_FAIL:
            return { ...state, class: action.payload }
        case DELETE_CLASS_SUCCESS:
            return { ...state, class: action.payload }
        case DELETE_CLASS_FAIL:
            return { ...state, class: action.payload }
        case UPDATE_CLASS_DETAIL_SUCCESS:
            return { ...state, class: action.payload }
        case UPDATE_CLASS_DETAIL_FAIL:
            return { ...state, class: action.payload }
        default:
            return state
    }
}