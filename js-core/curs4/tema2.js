var cy = document.querySelector('#cycle')
cy.addEventListener('click' , move)

function move(){
    for(let i = 5; i >=0;i--){
    cy.style.height = i + 'em'
}
}