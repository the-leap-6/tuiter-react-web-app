const PostLink = (link)=>{
    if (link.length>0)
    return (`<span class="wd-summary m-2"><i class="fa fa-link"></i> ${link}</span>`);
    else
        return (`<span/>`);
}
const PostRoundImage = (post)=>{

    if (post.link.length>0 || post.title.length>0 || post.summary.length>0)
        return (`<img class="wd-post-top-image" src=${post.image}/>`);
    else
        return (`<img class="wd-post-full-image" src=${post.image}/>`);
}

const PostItem = (post) => {
    return(` 
         <div class="wd-post mb-3 pb-3">
            <img class="col-1 wd-profile-photo " src=${post.pp}/> 
            <div class="col-11 ps-2">
                <i class="fas fa-ellipsis-h" style="float: right"></i>
                <div class="wd-title">${post.userName} <i class="fa-solid fa-circle-check"></i>
                    <span class="wd-summary">@${post.handle} ⋅ ${post.time}</span>
                </div>
                <div class="wd-main-content wd-title pb-3 pe-2">
                   ${post.info}
                </div>
                <div class="wd-post-content mb-2">
                    ${PostRoundImage(post)}
                    <div class="ps-2 pe-2">
                        <div class="wd-title"> ${post.title}</div>
                        <div class="wd-summary">
                            ${post.summary}
                        </div>
                        <div>
                        ${PostLink(post.link)}
                        </div>    
                    </div>
                </div>
                <nav>
                    <a href="" class="wd-icons p-2">
                        <i class="fa-regular fa-comment"></i>
                        <span class="ps-1">${post.comments}</span>
                    </a>
                    <a href="" class="wd-icons p-2">
                        <i class="fa fa-retweet"></i>
                        <span class="ps-1">${post.retweets}</span>
                    </a>
                    <a href="" class="wd-icons p-2">
                        <i class="fa-regular fa-heart"></i>
                        <span class="ps-1">${post.likes}</span>
                    </a>
                    <a href="" class="wd-icons p-2">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        <span class="ps-1"></span>
                    </a>
                </nav>
            </div>
        </div>
        
        
`)}

export default PostItem



