import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from './postsActions';
import { RequestStatus } from '../../utils/constants';

const initialState = {
    posts: [],
    status: RequestStatus.Idle,
    error: null
};


const postsReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case GET_POSTS_REQUEST: 
            return {
                ...state,
                status: RequestStatus.Process,
                error: null
            }
        
        case GET_POSTS_SUCCESS: 
            return {
                ...state,
                posts: action.posts,
                status: RequestStatus.Success
            }
        
        case GET_POSTS_FAILURE: 
            return {
                ...state,
                error: action.error,
                status: RequestStatus.Failure
            }
        

        default: 
            return state;
  }
}

export default postsReducer;