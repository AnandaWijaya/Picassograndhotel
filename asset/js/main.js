// SIDE BAR
// SHOW MENU
const showMenu = (toggleId, sidebarId,bodyId) =>{
    const toggle = document.getElementById(toggleId),
    sidebar = document.getElementById(sidebarId),
    bodypadding = document.getElementById(bodyId)

    if(toggle && sidebar){
        toggle.addEventListener('click', ()=>{
            sidebar.classList.toggle('show')
            toggle.classList.toggle('rotate')
            bodypadding.classList.toggle('expander')
        })
    }
}
showMenu('side-toggle','sidebar','layoutSidenav_content')

const linkColor = document.querySelectorAll('.side_link');   
function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
}

linkColor.forEach(l => l.addEventListener('click', colorLink));


