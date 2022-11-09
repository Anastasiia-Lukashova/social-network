import Post from "./Post/Post";
import style from './Posts.module.css'

const Posts = (props) => {

     let postsElements = props.state.postPage.posts.map(p =>
         <Post message={p.message}
               likesCount={p.likesCount} />);
    debugger;
    let addPost =(props)=>{
        alert('Hey, wake up!');
    }

    return (
            <div className={style.posts}>
                My Posts
                <div>
                    <textarea></textarea>
                    <button onClick={addPost}>Add Post</button>
                </div>
                {postsElements}
               {/* <Post message ='Hi, how are you?' likeCount='23'/>
                <Post message ='it`s my first Post' likeCount='11'/>*/}
            </div>
    );
}

export default Posts;
