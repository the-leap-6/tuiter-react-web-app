import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
            <li class="list-group-item" ><b>Who to follow</b></li>
            <!-- continue here -->
           ${who.map(w => ( WhoToFollowListItem(w))).join('')}

           </ul>
         
`); }

export default WhoToFollowList

