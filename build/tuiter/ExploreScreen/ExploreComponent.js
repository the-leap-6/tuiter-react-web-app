import PostSummaryList
    from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(` 
             <div class="row wd-align-center">
                <div class="col-11" >
                    <div class="form-group has-search" >
                        <span class="fa fa-search form-control-feedback"></span>
                        <input type="text" class="form-control" placeholder="Search Twitter">
                    </div>
                </div>
                <div class="col-1">
                    <a href="explore-settings.html"><i class="fa fa-gear fa-2x"></i></a>
                </div>
             </div>
            <div class="row mt-2 wd-padding12" >
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-block">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>
            <div class="row">
                <img class="mt-2" src="../../images/spaceX.png"/>
            </div>
            <div class="mt-2">
            ${PostSummaryList()}
</div>
            
        `)}

export default ExploreComponent