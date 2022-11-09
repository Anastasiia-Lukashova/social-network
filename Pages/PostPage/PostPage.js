import React from "react";
import Posts from "../../components/Posts/Posts";
const PostPage = (props)=>{
    return (
        <div>
            <Posts state={props.state.postPage.posts}/>
        </div>
    );
}
export default PostPage;
