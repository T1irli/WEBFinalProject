let modalPanel = document.getElementById('modal-panel')
let modalPanelBack = document.getElementById('modal-panel-back')

function openModalPanel(){
    modalPanel.style.visibility = 'visible'
    modalPanelBack.style.visibility = 'visible'
}

function closeModalPanel(){
    modalPanel.style.visibility = 'hidden'
    modalPanelBack.style.visibility = 'hidden'
}