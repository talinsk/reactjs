import './PostsComponent.css';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useCallback, useMemo } from "react"
import { getPostsMiddleware } from '../../store/posts/postsActions'
import { RequestStatus } from '../../utils/constants';


function PostsComponent() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const postsStatus = useSelector(state => state.posts.status);
    const postsError = useSelector(state => state.posts.error);

    useEffect(() => {
        dispatch(getPostsMiddleware());
    }, [dispatch]);


    const postsRender = useMemo(() => posts?.map((m, ind) => 
       <div key={m.id} className="post">
            <h5>{m.title}</h5>
            <div>{m.body}</div>
       </div>
    ), [posts]);


    if (postsStatus === RequestStatus.Process) {
        return <div className="posts-container">
            <h3>Loading...</h3>
        </div>
    }

    if (postsStatus === RequestStatus.Failure) {
        return <div className="posts-container">
            <h3>ERROR: {postsError}</h3>
        </div>
    }
  
    return (
        <div className="posts-container">
            <h2>Posts from API</h2>
            {postsRender}
        </div>
    );
  }
  
  export default PostsComponent;