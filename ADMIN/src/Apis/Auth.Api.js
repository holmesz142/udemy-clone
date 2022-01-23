/* eslint-disable no-console */
import axiosClient from "./clientAxios.js";
import Cookie from "js-cookie";
import { toast } from "react-toastify";
// import notify from "../common/Notify/index.js"

const url = "auth/";
const login = async (body) => {
    try {
        const res = await axiosClient.post(`${url}login`, { ...body });

        if (!res) {
            toast("Dang nhap that bai");
            // alert("Sai email hoac mat khau")
            console.log("0");
            console.log(res);
            return { data: res, success: false };
        } else {
            Cookie.set("token", res.data.token);
            toast("Dang nhap thanh cong");
            // alert("Dang nhap thanh cong")
            console.log("1");
            return { data: {}, success: true };
        }
    } catch (err) {
        return {
            success: false,
        };
    }
};
const register = async (body) => {
    try {
        const res = await axiosClient.post(`${url}registerStudent`, {
            email: body.Email,
            password: body.Password,
            fullName: body.FullName,
        });
        toast(
            res ? "Đăng ký thành công vui lòng xác thực email" : "Đăng ký thất bại"
        );
        return res ? { data: res || {}, success: true } : { success: false };
    } catch (err) {
        return {
            success: false,
        };
    }
};

const verify = async (body) => {
    try {
        const res = await axiosClient.post(`${url}verify`, {
            email: body.Email,
            password: body.Password,
            otp: body.Otp,
        });
        toast(
            res
                ? "Xac thuc tai khoan thanh cong chao mung ban da den website"
                : "Xac thuc tai khoan that bai"
        );
        return res ? { data: res || {}, success: true } : { success: false };
    } catch (err) {
        return {
            success: false,
        };
    }
};

const getAuth = async () => {
    try {
        const res = await axiosClient.get(`auth/getAuth`);
        // console.log('res auth api:', res.data._id)
        return res ? { data: res.data, success: true } : { success: false };
    } catch (err) {
        return null;
    }
};

const updateProfile = async (id, body) => {
    try {
        const res = await axiosClient.post(`auth/updateProfile/${id}`, {
            fullName: body.FullName,
            email: body.Email,
            phoneNumber: body.PhoneNumber,
            address: body.Address,
            avatar: body.Avatar
        });
        toast(res ? "Update profile success" : "Update profile Fail");
        return res ? { success: true } : { success: false };
    } catch (err) {
        return null;
    }
};

const getAllUser = async () => {
    try {
        const res = await axiosClient.get(`auth/getAllUser`)

        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}

const Auth = { getAuth, login, register, verify, updateProfile, getAllUser };

export default Auth;
