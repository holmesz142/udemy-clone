import userReducer from "./Auth/user.Reducers"
import productReducer from './Product/index'
import systemReducer from './System/app.Reducer'


const rootReducers = {
  user: userReducer,
  sytem: systemReducer,
  product: productReducer.category

}
export default rootReducers