const PostSummaryItem = (post) => {
    return(` <li class="list-group-item">
                    <div class="col-2 wd-right">
                        <img class="wd-img" src=${post.image}/>
                    </div>
                    <div class="col-9" >
                        <span class="wd-gray wd-display-block">${post.topic}</span>
                        <span class="wd-display-block"><b>${post.userName}  </b><i class="fa fa-circle-check"></i><span class="wd-gray">  - ${post.time} </span> </span>
                        <span class="wd-display-block"><b>${post.title}</b></span>
                    </div>
                </li>`)}

export default PostSummaryItem