import * as types from './types';

export function getPosts(){
    return {
        type: types.GET_POST_REQUEST,
        payload: {}
    }
}

export function getPostDetail(postId){
    return {
        type: types.GET_POST_DETAIL_REQUEST,
        payload: { postId:postId}
    }
}

export function getUsers(userId){
    return {
        type: types.GET_USER_REQUEST,
        payload: { userId:userId}
    }
}
