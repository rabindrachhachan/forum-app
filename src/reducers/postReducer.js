import * as types from '../actions/types';
const initialState = {
    post: [],
    getPostSuccess: false,
    getPostFailed: false,

    comments: null,
    getCommentSuccess: false,
    getCommentFailed: false,

    users: [],
    getUserSuccess: false,
    getUserFailed: false,
};


const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POST_REQUEST:
            return {
                ...state,
                getPostSuccess: false,
                getPostFailed: false,
                
            };
        case types.GET_POST_SUCCESS:
            return {
                ...state,
                getPostSuccess: true,
                getPostFailed: false,
                post: action.payload['data']
                
            };
        case types.GET_POST_FAILURE:
            return {
                ...state,
                getPostSuccess: false,
                getPostFailed: true,
            };

        case types.GET_POST_DETAIL_REQUEST:
            return {
                ...state,
                getCommentSuccess: false,
                getCommentFailed: false,
                
            };
        case types.GET_POST_DETAIL_SUCCESS:
            return {
                ...state,
                getCommentSuccess: true,
                getCommentFailed: false,
                comments: action.payload['data']
                
            };
        case types.GET_POST_DETAIL_FAILURE:
            return {
                ...state,
                getCommentSuccess:false,
                getCommentFailed: true,
            };

        case types.GET_USER_REQUEST:
                return {
                    ...state,
                    getUserSuccess: false,
                    getUserFailed: false,
                    
                };
        case types.GET_USER_SUCCESS:
                return {
                    ...state,
                    getUserSuccess: true,
                    getUserFailed: false,
                    users: action.payload['data']
                    
                };
        case types.GET_USER_FAILURE:
                return {
                    ...state,
                    getUserSuccess: false,
                    getUserFailed: true,
                };
        
        default:
            return state;
    }
};

export default postReducer;