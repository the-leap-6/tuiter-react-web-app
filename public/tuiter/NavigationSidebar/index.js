const EachComponent = (active, icon, text, link) =>{
    if (active)
        return (` 
        <a href=${link} class="list-group-item d-block d-lg-block d-xl-none "><i class="${icon} wd-solid-icons"></i></a>
        <a href=${link} class="list-group-item d-none d-lg-none d-xl-block d-xxl-block"><i class="${icon} pe-3 wd-solid-icons"  ></i><b>${text}</b></a>    
        `)
    else
        return (` 
        <a href=${link} class="list-group-item d-block d-lg-block d-xl-none "><i class="${icon}"></i></a>
        <a href=${link} class="list-group-item d-none d-lg-none d-xl-block d-xxl-block"><i class="${icon} pe-3" ></i>${text}</a>    
        `)

}

const NavigationSidebar = (active) => {

    return(`
   <div class="list-group" style="background-color: white">
          <a href="#" class="list-group-item  "><i class="fab fa-twitter wd-dodgerblue wd-font22"></i></a>
          ${EachComponent(active=='home', 'fa-regular fa-face-smile', 'Home', '../HomeScreen/index.html')}
          ${EachComponent(active=='explore', 'fas fa-hashtag', 'Explore', '../ExploreScreen/index.html')}
          ${EachComponent(active=='notification', 'fa-regular fa-bell', 'Notification', '#')}
          ${EachComponent(active=='message', 'fa-regular fa-envelope', 'Messages', '#')}
          ${EachComponent(active=='bookmark', 'fa-regular fa-bookmark', 'Bookmarks', '#')}
          ${EachComponent(active=='article', 'fa-solid fa-list', 'Lists', '#')}
          ${EachComponent(active=='profile', 'fa-regular fa-user', 'Profile', '#')}
          ${EachComponent(active=='more', 'fa-solid fa-plus', 'More', '#')}
          
          <!-- continue rest of list, e.g.,
               Home, Explore, Notifications,  Messages, etc. -->
   </div>
   <div class="d-grid mt-2">
      <a href="tweet.html" class="btn btn-primary btn-block rounded-pill"> Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

