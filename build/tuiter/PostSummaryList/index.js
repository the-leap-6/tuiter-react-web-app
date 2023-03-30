
import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./post.js";

const PostSummaryList = () => {
    return (`
           <ul class="list-group m-0 p-0">
            <!-- continue here -->
           ${exploreItems.map(e => ( PostSummaryItem(e))).join('')}

           </ul>
         
`); }

export default PostSummaryList

