// Navbar initialization
document.addEventListener('DOMContentLoaded', function(){
    let nav = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(nav, {});
})

// Slider initialization
document.addEventListener('DOMContentLoaded', function(){
    let slider = document.querySelectorAll('.slider');
    let instances = M.Slider.init(slider, {
        indicators: false,
        transition: 8000,
        duration: 1000
    })
})

// Dropdown initialization
document.addEventListener('DOMContentLoaded', function(){
    let drop = document.querySelectorAll('.dropdown-trigger');
    let instances = M.Dropdown.init(drop, {})
})
