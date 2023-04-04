let toggle= document.getElementsByClassName('navbar-toggler')[0]
let sidebar = document.getElementsByClassName('sidebar')[0]

toggle.addEventListener('click', () => {
    toggle.ariaExpanded = toggle.ariaExpanded == "true"? "false" : "true"
    if(toggle.ariaExpanded === "true"){
        
    }
})