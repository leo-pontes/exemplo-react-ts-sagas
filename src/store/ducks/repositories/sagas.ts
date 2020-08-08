import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadSuccces, loadFailure } from "./actions";

export function* load() {
    try {
        const response = yield call(api.get, "users/diego3g/repos");
        yield put(loadSuccces(response.data));
    } catch (err) {
        yield put(loadFailure());
    }
}
