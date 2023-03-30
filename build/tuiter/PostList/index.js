import PostItem from "./PostItem.js";
import post from "./post.js"

const PostList = () => {
    return (`
           <ul class="list-group m-0 p-0">
            <!-- continue here -->
           ${post.map(e => ( PostItem(e))).join("")}

           </ul>
         
`); }

export default PostList

