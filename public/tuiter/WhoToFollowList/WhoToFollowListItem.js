const WhoToFollowListItem = (who) => {
    console.log(who)
    return(`<li class="list-group-item wd-border-none bg-light">
                <div class="row wd-align-center">
                    <div class="col-2">
                        <img class="wd-round-corners"  src=${who.avatarIcon}/>
                    </div>
                    <div class="col-6 ps-3">
                        <span class="wd-display-block"><b>${who.userName} <i class="fa fa-circle-check wd-goldenrod"></i></b></span>
                        <span class="wd-display-block wd-handler" >@${who.handle}</span>
                    </div>
                    <div class="col-4">
                        <button href="#" class="btn btn-primary btn-block rounded-pill">Follow</button>
                    </div>
                </div>
            </li>`)}

export default WhoToFollowListItem