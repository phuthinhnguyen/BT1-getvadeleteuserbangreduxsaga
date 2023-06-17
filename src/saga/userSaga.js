import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
    DELETEUSER,
    DELETEUSER_SUCCESS,
    FETCH_USER,
    FETCH_USER_SUCCESS,
    GETUSERS,
} from "../redux/action";

const BaseURL = "https://jsonplaceholder.typicode.com/users";
function* getUser() {
    try {
        const response = yield axios.get(BaseURL);
        // Sau khi lấy được dữ liệu từ fake API
        // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
        yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
    } catch (error) {
        console.log("error - getUser : ", error);
    }
}
function* authSagaFun() {
    yield put({ type: FETCH_USER, payload: {} });
}
function* delUser(id) {
    try {
        const response = yield axios.delete(`${BaseURL}/${id}`);
        // Sau khi lấy được dữ liệu từ fake API
        // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
        yield put({ type: DELETEUSER_SUCCESS, payload:id });
    } catch (error) {
        console.log("error - getUser : ", error);
    }
}
export default function* rootSaga() {
    yield takeLatest(GETUSERS, authSagaFun);
    yield takeLatest(FETCH_USER, getUser);
    yield takeLatest(DELETEUSER, delUser);
}