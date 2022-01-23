import userReducer from "./Auth/user.Reducers"
import productReducer from './Product/index'
import systemReducer from './System/app.Reducer'
import classReducer from './Class/class.Reducers'


const rootReducers = {
  user: userReducer,
  system: systemReducer,
  product: productReducer.category,
  class: classReducer
}
export default rootReducers