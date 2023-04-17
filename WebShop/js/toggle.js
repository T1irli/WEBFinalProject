let toggle= document.getElementsByClassName('navbar-toggler')[0]
let sidebar = document.getElementsByClassName('sidebar')[0]

toggle.addEventListener('click', () => {
    toggle.className = toggle.className == "navbar-toggler open"? 
    "navbar-toggler close" : "navbar-toggler open"
    let sidebar = document.getElementsByClassName('sidebar')[0]
    checkToggle()
})

onresize = (event) => {
    let sidebar = document.getElementsByClassName('sidebar')[0]
    if(innerWidth > 768){
        sidebar.style.display = 'block'
        sidebar.style.width = '300px'
    }
    else{
        checkToggle()
    }
};

function checkToggle(){
    if(toggle.className === "navbar-toggler open"){
        sidebar.style.display = 'block'
        sidebar.style.width = '100vh'
    }
    else{
        sidebar.style.display = 'none'
        sidebar.style.width = 0
    }
}
