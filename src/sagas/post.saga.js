import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as types from './../actions/types';
import * as API from "./../api/api";

function* getPosts(action){
    const response = yield call(API.getPosts);
    yield call(getUsers)
    if(response){
        yield put({
            type: types.GET_POST_SUCCESS,
            payload: {
                data:response['data']
            }
        })
    }else{
        yield put({
            type: types.GET_POST_FAILURE,
            payload: {
                data: null
            }
        })
    }
}

function* getPostDetail(action){
    const response = yield call(API.getPostDetail,action['payload']);
    if(response){
        yield put({
            type: types.GET_POST_DETAIL_SUCCESS,
            payload: {
                data:response['data']
            }
        })
    }else{
        yield put({
            type: types.GET_POST_DETAIL_FAILURE,
            payload: {
                data: null
            }
        })

    }
}

function* getUsers(action){
    const response = yield call(API.getUsers);
    if(response){
        yield put({
            type: types.GET_USER_SUCCESS,
            payload: {
                data:response['data']
            }
        })
    }else{
        yield put({
            type: types.GET_USER_FAILURE,
            payload: {
                data: null
            }
        })
    }
}

export function* watchPost() {
    yield takeLatest(types.GET_POST_REQUEST, getPosts);
    yield takeLatest(types.GET_POST_DETAIL_REQUEST, getPostDetail);
    yield takeLatest(types.GET_USER_REQUEST, getUsers)
}
