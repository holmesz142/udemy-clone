import { toast } from "react-toastify"
import validator from "validator"
// import notify from "../../../common/Notify"

const validate = (Email, Password) => {
  const isEmail = validator.isEmail(Email)
  if (!isEmail) {
    toast("Email khong hop le")
    return false
  }
  const isPassword = validator.isEmpty(Password)
  if (isPassword) {
    toast("Vui long nhap lai mat khau")
    return false
  }
  return {
    Email,
    Password
  }
}

export default validate