import React from "react";
import "./index.css"
import PostArray from "./posts/post.json";
import PostItem from "./posts";

function HomeComponent() {
    return (

    <ul className="list-group">
        {
            PostArray.map((post, index) =>
                <PostItem key={index}
                          post={post}/> )
        }
    </ul>

    );
}

export default HomeComponent