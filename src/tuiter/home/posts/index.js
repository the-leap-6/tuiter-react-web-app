const PostLink = (link)=>{
    if (link.length>0)
        return (<span className="wd-summary m-2"><i className="fa fa-link"></i> {link}</span>);
    else
        return (<span/>);
}
const PostRoundImage = (post)=>{

    if (post.link.length>0 || post.title.length>0 || post.summary.length>0)
        return (<img className="wd-post-top-image" src={post.image}/>);
    else
        return (<img className="wd-post-full-image" src={post.image}/>);
}

const PostItem = ({post: post}) => {
    return(
        <div className="wd-post mb-3 pb-3">
            <img className="col-1 wd-profile-photo " src={post.pp}/>
            <div className="col-11 ps-2">
                <i className="fas fa-ellipsis-h" style={{float: "right"}}></i>
                <div className="wd-title">{post.userName} <i className="bi bi-check-circle-fill text-primary pe-1"></i>
                    <span className="wd-summary">@{post.handle} ⋅ {post.time}</span>
                </div>
                <div className="wd-main-content wd-title pb-3 pe-2">
                    {post.info}
                    <a className="ps-1" href={post.textLink}>{post.textLink}</a>
                </div>

                <div className="wd-post-content mb-2">
                    {PostRoundImage(post)}
                    <div className="ps-2 pe-2">
                        <div className="wd-title"> {post.title}</div>
                        <div className="wd-summary">
                            {post.summary}
                        </div>
                        <div>
                            {PostLink(post.link)}
                        </div>
                    </div>
                </div>
                <nav>
                    <a href="" className="wd-icons p-2">
                        <i className="bi bi-chat-fill"></i>
                        <span className="ps-1">{post.comments}</span>
                    </a>
                    <a href="" className="wd-icons p-2">
                        <i className="bi bi-repeat"></i>
                        <span className="ps-1">{post.retweets}</span>
                    </a>
                    <a href="" className="wd-icons p-2">
                        <i className="bi bi-heart-fill"></i>
                        <span className="ps-1">{post.likes}</span>
                    </a>
                    <a href="" className="wd-icons p-2">
                        <i className="bi bi-upload"></i>
                        <span className="ps-1"></span>
                    </a>
                </nav>
            </div>
        </div>
    )}

export default PostItem



